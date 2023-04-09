export type SongResult = {
    progress: number
    album: {
        name: string
        image: string
        release: string  
    },
    artists: {
        name: string
        url: string
    },
    url: string
    title: string
    length: number
    isPlaying: boolean
}