import type {AppProps} from 'next/app'

import MainProvider from '../app/providers/MainProvider'
import '../app/assets/styles/globals.scss'

function MyApp({Component, pageProps}: AppProps) {
  return (
      <MainProvider>
        <Component {...pageProps} />
      </MainProvider>
  )
}

export default MyApp
