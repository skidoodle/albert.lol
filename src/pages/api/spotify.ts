import type { NextApiRequest, NextApiResponse } from 'next';
import { SpotifyService } from '@/service/spotify';

const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } = process.env;
const spotify = new SpotifyService(CLIENT_ID!, CLIENT_SECRET!, REFRESH_TOKEN!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const song = await spotify.getCurrentSong();
  if (!song || !song.isPlaying) {
    return res.status(200).json({
      nowplaying: false,
    });
  }
  res.status(200).json({
    nowplaying: true,
    song: {
      artist: song.artists.name,
      title: song.title,
      url: song.url,
      image: song.album.image,
    },
  });
}
