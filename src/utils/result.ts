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
      is_playing: result.is_playing,
      title: item.name,
      album: {
        name: item.album.name,
        image: item.album.images[0]?.url,
        release_date: item.album.release_date,
      },
      artists: {
        name: item.artists.map((x: Artist) => x.name),
        url: item.artists.map((x: Artist) => x.external_urls.spotify),
      },
      url: item.external_urls.spotify,
      progress: result.progress_ms,
      duration: item.duration_ms,
    }
  }
}
