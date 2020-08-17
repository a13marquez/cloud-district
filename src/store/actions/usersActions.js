export const GET_USERS = 'GET_USERS'
export const FETCH_USER_LIST_SUCCESS = 'FETCH_USER_LIST_SUCCESS'
export const FETCH_USER_LIST_FAILED = 'FETCH_USER_LIST_FAILED'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'

export const getUsersByPage = (pageNum = 1) => ({ type: GET_USERS, pageNum })
