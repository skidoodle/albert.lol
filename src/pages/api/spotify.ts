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
    if (!song || !song.isPlaying) {
      return res.status(200).json({
        nowplaying: false,
      })
    }
    res.status(200).json({
      nowplaying: true,
      song: {
        artist: song.artists.name,
        title: song.title,
        url: song.url,
        image: song.album.image,
        progress: song.progress,
        length: song.length,
      },
    })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while fetching the song.' })
  }
}
