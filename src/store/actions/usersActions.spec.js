import * as actions from './usersActions'

test('usersActions', () => {
  expect(actions.getUsersByPage()).toEqual({
    type: actions.GET_USERS,
    pageNum: 1,
  })
  expect(actions.getUsersByPage(2)).toEqual({
    type: actions.GET_USERS,
    pageNum: 2,
  })
})
