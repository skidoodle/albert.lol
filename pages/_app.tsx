import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { config, library } from '@fortawesome/fontawesome-svg-core';

import type { AppProps } from 'next/app'

import '@/styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'

library.add(fab, fas)
config.autoAddCss = false

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
