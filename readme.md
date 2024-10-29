# albert.lol

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Umami](https://umami.is/)
- **Spotify**: [spotify-ws](https://github.com/skidoodle/spotify-ws)

## Spotify integration

- Refer to this [gist](https://gist.github.com/skidoodle/9a9dc9c8802434f7fc0da94ebe4dba18) for guidance
- Deploy [spotify-ws](https://github.com/skidoodle/spotify-ws)
- Set the correct WSS address in your `.env`.

```sh
NEXT_PUBLIC_SPOTIFY_WS=wss://example.com
```

## Running Locally

```bash
git clone https://github.com/skidoodle/albert.lol
cd albert.lol
pnpm install
pnpm dev
```

## License

[GPL-3.0](https://github.com/skidoodle/albert.lol/blob/master/license)