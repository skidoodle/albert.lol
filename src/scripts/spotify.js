export class SpotifyClient {
  constructor(url, elementId) {
    this.url = url;
    this.elementId = elementId;
    this.element = document.getElementById(this.elementId);

    this.ws = null;
    this.reconnectTimeout = null;
    this.reconnectAttempts = 0;

    this.RECONNECT_BASE_DELAY = 1000;
    this.RECONNECT_MAX_DELAY = 30000;
  }

  start() {
    if (!this.element) {
      console.error(`Spotify-WS: Element with ID "${this.elementId}" not found.`);
      return;
    }
    this.connect();
  }

  connect() {
    if (this.ws) {
      return;
    }

    console.log("Spotify-WS: Connecting...");
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      console.log("Spotify-WS: Connection established.");
      this.reconnectAttempts = 0;
    };

    this.ws.onmessage = (event) => {
      this.updateDOM(event.data);
    };

    this.ws.onclose = (event) => {
      if (!event.wasClean) {
        console.warn("Spotify-WS: Connection closed unexpectedly. Attempting to reconnect...");
        this.reconnect();
      } else {
        console.log("Spotify-WS: Connection closed cleanly.");
      }
      this.ws = null;
    };

    this.ws.onerror = (error) => {
      console.error("Spotify-WS: An error occurred:", error);
    };
  }

  reconnect() {
    const delay = Math.min(
      this.RECONNECT_MAX_DELAY,
      this.RECONNECT_BASE_DELAY * Math.pow(2, this.reconnectAttempts)
    ) * (0.8 + Math.random() * 0.4);

    console.log(`Spotify-WS: Reconnecting in ${Math.round(delay / 1000)}s...`);

    this.reconnectAttempts++;
    this.reconnectTimeout = setTimeout(() => this.connect(), delay);
  }

  updateDOM(data) {
    try {
      const payload = JSON.parse(data);
      if (payload.is_playing && payload.item) {
        const artists = payload.item.artists.map(a => a.name).join(", ");
        this.element.textContent = `${payload.item.name} - ${artists}`;
      } else {
        this.element.textContent = "";
      }
    } catch (err) {
      console.error("Spotify-WS: Failed to parse message data.", err);
    }
  }
}
