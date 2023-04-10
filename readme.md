# albert.lol

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Running Locally

```bash
git clone https://github.com/skidoodle/albert.lol
cd albert.lol
yarn install
yarn dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/skidoodle/albert.lol/blob/master/.env.example).

### Prerequisites

1. Create an application in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)
   - Click on the `Edit settings` button
   - Set the `Redirect URIs` to a convenient location <sup>_(doesn't matter)_</sup>
   - Save the given `Client ID` along with the `Client Secret`
2. Retrieve the access code
   - Visit the following URL after replacing `$CLIENT_ID`, `$SCOPE`, and `$REDIRECT_URI`
   ```url
   https://accounts.spotify.com/authorize?response_type=code&client_id=$CLIENT_ID&scope=$SCOPE&redirect_uri=$REDIRECT_URI
   ```
   - You can choose scope(s) by visiting the [Spotify API docs](https://developer.spotify.com/documentation/general/guides/authorization/scopes/)
3. Note `code` from the URL you were redirected to
4. Acquire your refresh token
   - Run the following CURL command
   ```sh
   curl -X POST https://accounts.spotify.com/api/token -d "client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET&grant_type=authorization_code&code=$CODE&redirect_uri=$REDIRECT_URI"
   ```
   - Either replace or export the variables in your shell (`$CILENT_ID`, `$CLIENT_SECRET`, `$CODE`, and `$REDIRECT_URI`)
5. Save `refresh_token` in your `.env` file as well as your `client_id` and `client_secret`.

## License

[GPL-3.0](https://github.com/skidoodle/albert.lol/blob/master/license)
