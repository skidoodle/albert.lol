export type IconType = {
  children: React.ReactNode
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
