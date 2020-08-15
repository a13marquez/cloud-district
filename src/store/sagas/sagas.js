import { call, all, take } from 'redux-saga/effects'

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

export function* watchAuthServiceLoadGoogle() {
  const { options } = yield take('AUTH_SERVICE_LOAD', 'google')
  yield call(authServiceLoadGoogle, options)
}

export default function* sagas() {
  yield all([watchAuthServiceLoadGoogle()])
}
