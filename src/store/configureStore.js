import { createStore, applyMiddleware, Middleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

export const configureStore = () => {
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  return createStore(reducers, applyMiddleware(...middlewares));
};
