import type { SongResult } from '@/utils/type'
import type { Artist, Item } from '@/utils/interface'

export class SongResultMap {
  public static parseSong(result: {
    progress_ms: number
    item: Item
    is_playing: boolean
  }): SongResult {
    const { item } = result

    return {
      progress: result.progress_ms,
      title: item.name,
      album: {
        name: item.album.name,
        image: item.album.images[0]?.url,
        release: item.album.release,
      },
      artists: {
        name: item.artists.map((x: Artist) => x.name),
        url: item.artists.map((x: Artist) => x.external_urls.spotify),
      },
      url: item.external_urls.spotify,
      length: item.duration_ms,
      isPlaying: result.is_playing,
    }
  }
}
