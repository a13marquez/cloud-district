import { call } from 'redux-saga/effects'

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

export function* loadGoogle({ clientId, ...options }) {
  yield call(loadScript, '//apis.google.com/js/platform.js')
  yield call(loadGoogleAuth2)
  yield call(window.gapi.auth2.init, { clientId, ...options })
}

export default function* rootSaga() {
  yield all([loadGoogle()])
}
