import { initialState } from './createSocialLogin'
import * as actions from '../actions/socialLoginActions'
import reducer from './createSocialLogin'

const modifiedState = {
  ...initialState,
  user: 5,
}
it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles SOCIAL_LOGIN_SUCCESS', () => {
  const action = { type: actions.SOCIAL_LOGIN_SUCCESS, user: 1 }
  expect(reducer(initialState, action)).toEqual({ ...initialState, user: 1 })
  expect(reducer(modifiedState, action)).toEqual({ ...modifiedState, user: 1 })
})

it('handles SOCIAL_LOGOUT', () => {
  const action = { type: actions.SOCIAL_LOGOUT }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(modifiedState, action)).toEqual({
    ...modifiedState,
    user: initialState.user,
  })
})
