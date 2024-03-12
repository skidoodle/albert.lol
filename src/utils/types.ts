export type IconType = {
  children: React.ReactNode
  reference: string
  copyValue?: boolean
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
