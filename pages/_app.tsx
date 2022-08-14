import 'styles/globals.scss'
import Head from 'next/head'

import { AppProps } from 'next/app'

export default function({ Component, pageProps }: AppProps) {
    return(
        <>
            <Head>
                    <link rel='preconnect' href='https://vitals.vercel-insights.com' />
                    <title>albert</title>
                    <meta name='title' content='albert' />
                    <meta name='og:title' content='albert' />
                    <meta name='description' content='system administrator' />
                    <meta name='og:description' content='system administrator' />
                    <meta name='theme-color' content='#000000' />
                    <meta property='og:image' content='/favicon.ico' />
            </Head>
            <Component {...pageProps} />
        </>
    )
}