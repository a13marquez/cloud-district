import * as actions from './socialLoginActions'

describe('socialLogin', () => {
  expect(actions.loadAuthService('facebook', 1)).toEqual({
    type: actions.AUTH_SERVICE_LOAD,
    service: 'facebook',
    options: 1,
  })

  expect(actions.socialLoginrequest('facebook', 1)).toEqual({
    type: actions.SOCIAL_LOGIN_REQUEST,
    service: 'facebook',
    options: 1,
  })

  expect(actions.socialLoginSuccess(1)).toEqual({
    type: actions.SOCIAL_LOGIN_SUCCESS,
    user: 1,
  })

  expect(actions.socialLoginFailure('test')).toEqual({
    type: actions.SOCIAL_LOGIN_FAILURE,
    error: 'test',
  })
})

test('socialLogout', () => {
  expect(actions.socialLogout()).toEqual({ type: actions.SOCIAL_LOGOUT })
})
