import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { LASTFM_USERNAME, LASTFM_API } = process.env;

  const { recenttracks: response } = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API}&format=json&limit=1`
  ).then((res) => res.json());

  const { track } = response;
  const { artist, name, url, image } = track[0];

  let nowplaying = Boolean(track[0]["@attr"]?.nowplaying);

  if (nowplaying) {
    return res.status(200).json({
      nowplaying,
      song: {
        artist: artist["#text"],
        title: name,
        url: url,
        image: image[2]["#text"],
      },
    });
  }

  return res.status(200).json({ nowplaying });
}
