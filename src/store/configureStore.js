import { createStore, applyMiddleware, Middleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas/sagas'

import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()
export const configureStore = () => {
  middlewares = sagaMiddleware[]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }
  sagaMiddleware.run(sagas)
  return createStore(reducers, applyMiddleware(...middlewares))
}
