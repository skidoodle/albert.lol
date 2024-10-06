export type IconType = {
  children: IconType
  reference: string
  copyValue?: boolean
  ariaLabel: string
}

export interface SpotifyData {
  is_playing?: boolean
  progress_ms: number
  item: {
    artists: {
      name: string
      external_urls: {
        spotify: string
      }
    }[]
    album: {
      images: {
        url: string
      }[]
    }
    external_urls: {
      spotify: string
    }
    name: string
    url: string
    duration_ms: number
  }
}
