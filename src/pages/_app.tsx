import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
import '@/styles/globals.scss'
import Head from 'next/head'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
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
  )
}
