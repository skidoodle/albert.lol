import { SongResult } from '@/utils/type'
import { SongResultMap } from '@/utils/result'

import axios from 'axios'

export class SpotifyService {
    private accessToken: string = ''
    private clientId: string
    private clientSecret: string
    private refreshToken: string

    constructor(clientId: string, clientSecret: string, refreshToken: string) {
        this.clientId = clientId
        this.clientSecret = clientSecret
        this.refreshToken = refreshToken
    }

    private hasAccessToken(): boolean {
        return this.accessToken !== ''
    }

    private setAccessToken(token: string): void {
        this.accessToken = token
    }

    private async getAccessToken(): Promise<void> {
        try {
            const response = await axios({ url: 'https://accounts.spotify.com/api/token', 
                method: 'POST', 
                params: {
                    client_id: this.clientId,
                    client_secret: this.clientSecret,
                    refresh_token: this.refreshToken,
                    grant_type: 'refresh_token',
                }
            }).then((res) => res.data)
    
            this.setAccessToken(response.access_token)
        } catch {
            throw new Error('Invalid credentials were given')
        }
    } 

    public async getCurrentSong(): Promise<SongResult>  {
        try {
            if(!this.hasAccessToken()) {
                await this.getAccessToken()
            }

            const response = await axios({ url: 'https://api.spotify.com/v1/me/player/currently-playing', 
                method: 'GET', 
                headers: {
                    'Authorization': 'Bearer ' + this.accessToken
                }
            }).then((res) => res.data)
            return SongResultMap.parseSong(response)
        } catch {
            return await this.getAccessToken() as any
        }
    }
}