import { Mapper } from '@/utils/mapper'
import { SongResult } from '@/utils/type'

export class SongResultMap implements Mapper<SongResult> {
    public static parseSong(result: any): SongResult {
        const { item } = result

        return {
            progress: result.progress_ms,
            title: item.name,
            album: {
                name: item.album.name,
                image: item.album.images[1].url,
                release: item.album.release_date,
            },
            artists: {
                name: item.artists.map((x: any) => x.name),
                url: item.artists.map((x: any) => x.external_urls.spotify)
            },
            url: item.external_urls.spotify,
            length: item.duration_ms,
            isPlaying: result.is_playing
        }
      }
}