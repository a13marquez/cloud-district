import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions/usersActions'
import { forwardTo } from './sagas'
import UsersService from '../../services/UsersService'

export function* getUsers({ pageNum }) {
  try {
    const { data } = yield call(UsersService.getUsersByPage, pageNum)
    yield put({ type: 'FETCH_USER_LIST_SUCCESS', data })
  } catch (error) {
    yield put({ type: 'FETCH_USER_LIST_FAILED', error })
  }
  yield call(forwardTo, '/')
}

export function* updateUser(options) {
  try {
    const { data } = yield call(UsersService.updateUserByID, options.user)
    yield put({
      type: 'UPDATE_USER_SUCCESS',
      user: { id: options.user.id, ...data },
    })
  } catch (error) {
    yield put({ type: 'UPDATE_USER_FAILED', error })
  }
  yield call(forwardTo, '/')
}

export function* watchGetUsersRequest() {
  yield takeEvery(actions.GET_USERS, getUsers)
}

export function* watchUpdateUserRequest() {
  yield takeEvery(actions.UPDATE_USER, updateUser)
}
