import { Html, Head, Main, NextScript } from 'next/document';

export default function Document () {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://vitals.vercel-insights.com' />
        <meta name='title' content='albert' />
        <meta name='og:title' content='albert' />
        <meta name='description' content='sysadmin' />
        <meta name='og:description' content='sysadmin' />
        <meta name='theme-color' content='#000000' />
        <meta property='og:image' content='/favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
