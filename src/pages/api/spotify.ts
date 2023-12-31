import type { NextApiRequest, NextApiResponse } from 'next'
import { SpotifyService } from '@/service/spotify'

function getEnvVar(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }
  return value
}

const CLIENT_ID = getEnvVar('CLIENT_ID')
const CLIENT_SECRET = getEnvVar('CLIENT_SECRET')
const REFRESH_TOKEN = getEnvVar('REFRESH_TOKEN')

const spotify = new SpotifyService(CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const song = await spotify.getCurrentSong()
    if (!song.is_playing) {
      return res.status(200).json({
        is_playing: false,
      })
    }
    res.status(200).json({
      is_playing: true,
      name: song.name,
      album: {
        name: song.album.name,
        image: song.album.image,
        release: song.album.release_date,
      },
      artists: {
        name: song.artists.name,
        url: song.artists.url,
      },
      url: song.url,
      progress: song.progress,
      duration: song.duration,
    })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while fetching the song.' })
  }
}
