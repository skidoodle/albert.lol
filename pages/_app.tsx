import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import 'styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>albert</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
