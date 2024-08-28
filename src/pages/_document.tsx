import { Html, Head, Main, NextScript } from 'next/document'
import age from '@/utils/age'

const metadata = {
  title: 'albert',
  description: `${age()}yo devops engineer`,
  image: '/profile.webp',
  url: 'https://albert.lol',
}

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='title' content={metadata.title} />
        <meta name='og:title' content={metadata.title} />
        <meta property='og:url' content={metadata.url} />
        <meta name='description' content={metadata.description} />
        <meta name='og:description' content={metadata.description} />
        <meta property='og:image' content={metadata.image} />
        <script
          defer
          src="https://analytics.albert.lol/script.js"
          data-website-id="f579488c-c994-42af-bc04-0e9578f62c4c">
        </script>
        <link
          rel='preconnect'
          href='https://vitals.vercel-insights.com'
          crossOrigin='anonymous'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
