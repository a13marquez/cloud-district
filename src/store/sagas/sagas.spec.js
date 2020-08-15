import { call, put } from 'redux-saga/effects'
import * as sagas from './sagas'
import * as actions from '../actions/socialLoginActions'

const profile = { getName: () => 'name', getImageUrl: () => 'imgUrl' }
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

test('googleLogin', () => {
  const generator = sagas.googleLogin({})
  expect(generator.next().value).toEqual(
    call(window.gapi.auth2.getAuthInstance)
  )
  expect(generator.next(auth2).value).toEqual(
    call([auth2, auth2.signIn], { scope: 'profile' })
  )
  expect(generator.next(user).value).toEqual(call([user, user.getBasicProfile]))
  expect(generator.next(profile).value).toEqual(
    call([profile, profile.getName])
  )
  expect(generator.next('name').value).toEqual(
    call([profile, profile.getImageUrl])
  )

  expect(generator.next('imgUrl').value).toEqual(
    put(actions.socialLoginSuccess({ name: 'name', picture: 'imgUrl' }))
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

test('watchGoogleLogin', () => {
  const payload = { options: 1 }
  const generator = sagas.watchGoogleLogin()
  generator.next()
  expect(generator.next(payload).value).toEqual(call(sagas.googleLogin, 1))
})
