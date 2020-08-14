import { combineReducers } from 'redux'
import socialLogin from './createDiscounts'

const reducers = combineReducers({
  socialLogin,
})

export const getUser = (state) => state.user
