interface Album {
  name: string
  images: {
    url: string
  }[]
  release: string[]
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
