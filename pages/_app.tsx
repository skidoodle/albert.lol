import { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  <Head>
    <title>albert</title>
  </Head>
  return <Component {...pageProps} />
}

export default MyApp