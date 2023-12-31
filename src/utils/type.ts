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
