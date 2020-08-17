import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import sagas from './sagas/sagas'

import reducers from './reducers'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

export const configureStore = (initialState) => {
  const middlewares = [sagaMiddleware, routerMiddleware(history)]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const store = createStore(
    reducers(history),
    initialState,
    applyMiddleware(...middlewares)
  )
  sagaMiddleware.run(sagas)
  return store
}

export default configureStore
