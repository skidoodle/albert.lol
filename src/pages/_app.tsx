import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
import '@/styles/globals.scss'
import Head from 'next/head'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const App = ({ Component, pageProps }: AppProps) => {
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
      <SpeedInsights />
      <Analytics />
    </>
  )
}

export default App
