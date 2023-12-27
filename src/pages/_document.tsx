import { Html, Head, Main, NextScript } from 'next/document'
import age from '@/utils/age'

export default function Document() {
  return (
    <Html lang='zxx'>
      <Head>
        <meta name='theme-color' content='#121212' />
        <meta name='title' content='albert' />
        <meta name='og:title' content='albert' />
        <meta property='og:url' content='https://albert.lol' />
        <link
          rel='preconnect'
          href='https://vitals.vercel-insights.com'
          crossOrigin='anonymous'
        />
        <meta
          name='description'
          content={`${age()}-year-old sysadmin from hungary`}
        />
        <meta
          name='og:description'
          content={`${age()}-year-old sysadmin from hungary`}
        />
        <meta
          property='og:image'
          content='https://cdn.albert.lol/KmxuVVvWGUtGa.webp'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
