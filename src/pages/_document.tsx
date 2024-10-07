import { Html, Head, Main, NextScript } from 'next/document'
import age from '@/utils'

const metadata = {
  title: 'albert',
  description: `${age()}yo student at Óbuda University`,
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
          src='https://analytics.albert.lol/script.js'
          data-website-id='2c900d5e-c577-4824-ad37-0cdf68383c42'
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
