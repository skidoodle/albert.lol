import axios, { type AxiosResponse } from 'axios'
import { SongResultMap } from '@/utils/result'
import type { SongResult, Item } from '@/utils/types'

export class SpotifyService {
  private accessToken: string | undefined
  private clientId: string
  private clientSecret: string
  private refreshToken: string

  constructor(clientId: string, clientSecret: string, refreshToken: string) {
    this.clientId = clientId
    this.clientSecret = clientSecret
    this.refreshToken = refreshToken
  }

  private hasAccessToken(): boolean {
    return !!this.accessToken
  }

  private setAccessToken(token: string): void {
    this.accessToken = token
  }

  private async refreshAccessToken(): Promise<void> {
    try {
      const response: AxiosResponse<{ access_token: string }> =
        await axios.post('https://accounts.spotify.com/api/token', null, {
          params: {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            refresh_token: this.refreshToken,
            grant_type: 'refresh_token',
          },
        })

      this.setAccessToken(response.data.access_token)
    } catch (error) {
      throw new Error('Invalid credentials were given')
    }
  }

  public async getCurrentSong(): Promise<SongResult | undefined> {
    try {
      if (!this.hasAccessToken()) {
        await this.refreshAccessToken()
      }

      const response: AxiosResponse<{
        progress_ms: number
        item: Item
        is_playing: boolean
      }> = await axios.get(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
          headers: {
            Authorization: 'Bearer ' + this.accessToken,
          },
        }
      )

      return SongResultMap.parseSong(response.data)
    } catch (error) {
      await this.refreshAccessToken()
    }
  }
}
