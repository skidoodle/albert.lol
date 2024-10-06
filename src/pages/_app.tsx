import { Albert_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import '@/styles/globals.css'
import Head from 'next/head'

const albert_sans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>albert</title>
      </Head>
      <main className={`${albert_sans.variable} font-sans`}>
        <ThemeProvider attribute='class'>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </Fragment>
  )
}
