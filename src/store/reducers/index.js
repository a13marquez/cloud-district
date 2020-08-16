import { combineReducers } from 'redux'
import socialLogin from './createSocialLogin'
import { connectRouter } from 'connected-react-router'

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    socialLogin,
  })

export const getUser = (state) => state.socialLogin.user

export default reducers
