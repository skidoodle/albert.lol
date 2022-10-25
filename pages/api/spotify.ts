import { NextApiRequest, NextApiResponse } from 'next';
import { SpotifyService } from 'spotify-now-playing'

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } = process.env;
    const spotify = new SpotifyService(CLIENT_ID!, CLIENT_SECRET!, REFRESH_TOKEN!)
    const song = await spotify.getCurrentSong()

    if(!!song|| !song.isPlaying ) {
        return res.status(200).json({
          nowplaying: false,
        });
    }
    
    res.status(200).json({
      nowplaying: true,
      song: {
        artist: song.artist.name,
        title: song.title,
        url: song.externalUrl,
      }
    });
}
