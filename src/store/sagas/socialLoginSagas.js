import { call, take, put } from 'redux-saga/effects'
import * as actions from '../actions/socialLoginActions'
import { forwardTo } from './sagas'

export const loadScript = (src) =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })

export const loadGoogleAuth2 = () =>
  new Promise((resolve) => {
    window.gapi.load('auth2', resolve)
  })

export function* authServiceLoadGoogle({ clientId, ...options }) {
  yield call(loadScript, '//apis.google.com/js/platform.js')
  yield call(loadGoogleAuth2)
  yield call(window.gapi.auth2.init, { clientId, ...options })
}

export function* googleLogin({ scope = 'profile', ...options }) {
  const auth2 = yield call(window.gapi.auth2.getAuthInstance)
  const user = yield call([auth2, auth2.signIn], { scope, ...options })
  const profile = yield call([user, user.getBasicProfile])
  const name = yield call([profile, profile.getName])
  const picture = yield call([profile, profile.getImageUrl])
  sessionStorage.setItem(
    'userEntity',
    JSON.stringify({
      id: profile.getId(),
      name,
      picture,
    })
  )
  yield put(actions.socialLoginSuccess({ name, picture }))
  yield call(forwardTo, '/users')
}

export function* watchAuthServiceLoadGoogle() {
  const { options } = yield take('AUTH_SERVICE_LOAD', 'google')
  yield call(authServiceLoadGoogle, options)
}

export function* watchGoogleLogin() {
  const { options } = yield take('SOCIAL_LOGIN_REQUEST', 'google')
  yield call(googleLogin, options)
}
