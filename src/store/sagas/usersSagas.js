import { call, take, put } from 'redux-saga/effects'
import * as actions from '../actions/usersActions'
import { forwardTo } from './sagas'
import UsersService from '../../services/UsersService'

export function* getUsers(pageNum) {
  try {
    const { data } = yield call(UsersService.getUsersByPage, pageNum)
    yield put({ type: 'FETCH_USER_LIST_SUCCESS', data })
  } catch (error) {
    yield put({ type: 'FETCH_USER_LIST_FAILED', error })
  }
  yield call(forwardTo, '/')
}

export function* watchGetUsersRequest() {
  const { pageNum } = yield take(actions.GET_USERS)
  yield call(getUsers, pageNum)
}
