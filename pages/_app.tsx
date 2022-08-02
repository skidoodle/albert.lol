import { AppProps } from 'next/app'
import 'styles/globals.scss'

export default MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}