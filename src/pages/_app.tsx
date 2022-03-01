import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useStore } from '../redux'

import { Header } from '@layouts/Header'

function App({ Component, pageProps }: AppProps) {
  const STORE = useStore(pageProps.initialReduxState)

  return (
    <Provider store={ STORE }>
      <Header />
      <Component { ...pageProps } />
    </Provider>
  )
}

export default App
