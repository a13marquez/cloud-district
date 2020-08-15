import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas/sagas'

import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()
export const configureStore = () => {
  const middlewares = [sagaMiddleware]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }
  const store = createStore(reducers, applyMiddleware(...middlewares))
  sagaMiddleware.run(sagas)
  return store
}

export default configureStore
