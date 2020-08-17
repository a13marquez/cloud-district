import { combineReducers } from 'redux'
import socialLogin from './createSocialLogin'
import usersList from './createUsersList'
import { connectRouter } from 'connected-react-router'

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    socialLogin,
    usersList,
  })

export const getUser = (state) => state.socialLogin.user

export default reducers
