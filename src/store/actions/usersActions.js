export const GET_USERS = 'GET_USERS'

export const getUsersByPage = (pageNum = 1) => ({ type: GET_USERS, pageNum })
