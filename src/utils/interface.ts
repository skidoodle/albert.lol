interface Album {
  name: string
  images: {
    url: string
  }[]
  release_date: string
}

export interface Artist {
  name: string
  external_urls: { spotify: string }
}

export interface Item {
  name: string
  album: Album
  artists: Artist[]
  external_urls: { spotify: string }
  duration_ms: number
}

export interface SpotifyData {
  is_playing?: boolean
  title: string
  artists: { name: string[] }
  album: { image: string }
  url: string
  progress: number
  duration: number
}

export interface ErrorProps {
  statusCode?: number
}
