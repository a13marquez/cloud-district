import { all } from 'redux-saga/effects'
import {
  watchAuthServiceLoadGoogle,
  watchGoogleLogin,
} from './socialLoginSagas'
import { watchGetUsersRequest } from './usersSagas'
import { history } from '../configureStore'

export function forwardTo(location) {
  history.replace(location)
}

export default function* sagas() {
  yield all([
    watchAuthServiceLoadGoogle(),
    watchGoogleLogin(),
    watchGetUsersRequest(),
  ])
}
