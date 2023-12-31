export type SongResult = {
  is_playing: boolean
  name: string
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
  progress: number
  duration: number
}
