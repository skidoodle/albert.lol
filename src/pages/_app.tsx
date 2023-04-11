import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>albert</title>
      </Head>
      <main className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
      <Analytics />
    </>
  );
}
