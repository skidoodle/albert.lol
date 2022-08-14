import 'styles/globals.scss'
import Head from 'next/head'

import { AppProps } from 'next/app'

export default function({ Component, pageProps }: AppProps) {
    return(
        <>
            <Head>
                <title>albert</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}