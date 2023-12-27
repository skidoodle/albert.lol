# albert.lol

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Spotify**: [spotify-ws](https://github.com/skidoodle/spotify-ws)

## Spotify integration
- Refer to this [gist](https://gist.github.com/skidoodle/9a9dc9c8802434f7fc0da94ebe4dba18) for guidance
- Deploy [spotify-ws](https://github.com/skidoodle/spotify-ws)
- Set the correct WSS address in the [SpotifyCard](https://github.com/skidoodle/albert.lol/blob/1f8d8f5b6826982a45ff2d18f8448da95e181d17/src/components/SpotifyCard.tsx#L21C45-L21C45) component.

## Running Locally

```bash
git clone https://github.com/skidoodle/albert.lol
cd albert.lol
pnpm install
pnpm dev
```

## License

[GPL-3.0](https://github.com/skidoodle/albert.lol/blob/master/license)
