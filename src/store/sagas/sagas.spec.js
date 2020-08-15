import { call } from 'redux-saga/effects'
import * as sagas from './sagas'

const profile = { getName: () => 'name', getImageUrl: () => 'imageUrl' }
const user = { getBasicProfile: () => profile }
const auth2 = { signIn: () => user }
window.gapi = {
  load: () => {},
  auth2: {
    init: () => auth2,
    getAuthInstance: () => auth2,
  },
}

test('loadGoogle', () => {
  const generator = sagas.authServiceLoadGoogle({
    client_id: 'test',
    foo: 'bar',
  })
  expect(generator.next().value).toEqual(
    call(sagas.loadScript, '//apis.google.com/js/platform.js')
  )
  expect(generator.next().value).toEqual(call(sagas.loadGoogleAuth2))
  expect(generator.next().value).toEqual(
    call(window.gapi.auth2.init, { client_id: 'test', foo: 'bar' })
  )
})

test('watchAuthServiceLoadGoogle', () => {
  const payload = { options: 1 }
  const generator = sagas.watchAuthServiceLoadGoogle()
  generator.next()
  expect(generator.next(payload).value).toEqual(
    call(sagas.authServiceLoadGoogle, 1)
  )
})
