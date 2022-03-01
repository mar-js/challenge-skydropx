import { composeWithDevTools } from 'redux-devtools-extension'
import {
  createStore,
  applyMiddleware,
  Store,
  AnyAction
} from 'redux'
import thunk from 'redux-thunk'

import { ROOT_REDUCERS } from 'src/redux/reducers/index'
import { useMemo } from 'react'

const COMPOSE_ENHANCERS = composeWithDevTools(applyMiddleware(thunk))
let store: any = null

export const STORE = (initialState: any): Store<any, AnyAction> => {
  const STORE: any = createStore(
    ROOT_REDUCERS,
    initialState,
    COMPOSE_ENHANCERS
  )

  return STORE
}

export const INITIALIZE_STORE = (preloadedState: any) => {
  let initialStore = store ?? STORE(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    initialStore = STORE({
      ...store.getState(),
      ...preloadedState
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') {
    return initialStore
  }
  // Create the store once in the client
  if (!store) store = initialStore

  return initialStore
}

export const useStore = (initialState: any) => useMemo(() => INITIALIZE_STORE(initialState), [ initialState ])
