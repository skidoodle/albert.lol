export type SongResult = {
  progress: number
  album: {
    name: string
    image?: string
    release_date: string
  }
  artists: {
    name: string[]
    url: string[]
  }
  url: string
  title: string
  duration: number
  is_playing: boolean
}

export type Icon = {
  children: React.ReactNode
  reference: string
  copyValue?: boolean
}
