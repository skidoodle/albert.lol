import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from 'next-themes'
import { Albert_Sans } from 'next/font/google'
import type { AppProps } from 'next/app'
import '@/styles/globals.scss'
import Head from 'next/head'

const albert_sans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-inter',
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>albert</title>
      </Head>
      <main className={`${albert_sans.variable} font-sans`}>
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
