import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import 'styles/globals.scss';
import Head from 'next/head';

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
