interface SpotifyArtist {
  name: string;
}

interface SpotifyItem {
  name: string;
  artists: SpotifyArtist[];
}

interface SpotifyMessage {
  is_playing: boolean;
  item: SpotifyItem | null;
}

export class SpotifyClient {
  private readonly url: string;
  private readonly elementId: string;
  private element: HTMLElement | null = null;
  private ws: WebSocket | null = null;
  private reconnectTimeout: ReturnType<typeof setTimeout> | null = null;
  private reconnectAttempts: number = 0;

  private readonly RECONNECT_BASE_DELAY = 1000;
  private readonly RECONNECT_MAX_DELAY = 30000;

  constructor(url: string, elementId: string) {
    this.url = url;
    this.elementId = elementId;
  }

  public start(): void {
    this.element = document.getElementById(this.elementId);

    if (!this.element) {
      console.warn(`Spotify-WS: Element #${this.elementId} not found. Retrying in 1s...`);
      setTimeout(() => this.start(), 1000);
      return;
    }

    this.connect();
  }

  private connect(): void {
    if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
      return;
    }

    console.log("Spotify-WS: Connecting...");
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      console.log("Spotify-WS: Connected");
      this.reconnectAttempts = 0;
    };

    this.ws.onmessage = (event: MessageEvent) => {
      this.updateDOM(event.data);
    };

    this.ws.onclose = (event: CloseEvent) => {
      this.ws = null;
      if (!event.wasClean) {
        this.scheduleReconnect();
      }
    };

    this.ws.onerror = (error: Event) => {
      console.error("Spotify-WS Error:", error);
    };
  }

  private scheduleReconnect(): void {
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
    }

    const delay = Math.min(this.RECONNECT_MAX_DELAY, this.RECONNECT_BASE_DELAY * Math.pow(2, this.reconnectAttempts)) * (0.8 + Math.random() * 0.4);

    console.log(`Spotify-WS: Reconnecting in ${Math.round(delay / 1000)}s...`);

    this.reconnectAttempts++;
    this.reconnectTimeout = setTimeout(() => this.connect(), delay);
  }

  private updateDOM(data: string): void {
    if (!this.element) return;

    try {
      const payload: SpotifyMessage = JSON.parse(data);

      if (payload.is_playing && payload.item) {
        const artists = payload.item.artists.map((a) => a.name).join(", ");
        const text = `${payload.item.name} - ${artists}`;

        if (this.element.textContent !== text) {
          this.element.textContent = text;
          this.element.title = `Playing: ${payload.item.name}`;
        }
      } else {
        this.element.textContent = "";
        this.element.title = "";
      }
    } catch (err) {
      console.error("Spotify-WS: Invalid JSON received", err);
    }
  }
}
