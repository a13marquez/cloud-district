import {
  FETCH_USER_LIST_SUCCESS,
  FETCH_USER_LIST_FAILED,
  GET_USERS,
  UPDATE_USER_SUCCESS,
} from '../actions/usersActions'

export const initialState = {
  usersList: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_LIST_SUCCESS:
      return {
        ...state,
        usersList: action.data,
      }
    case FETCH_USER_LIST_FAILED:
      return {
        ...state,
        usersList: initialState.usersList,
      }
    case UPDATE_USER_SUCCESS:
      const user = action.user
      const data = state.usersList.data
      const index = data.findIndex((u) => u.id === user.id)
      const newData = [
        ...data.splice(0, index),
        user,
        ...data.splice(index + 1),
      ]
      state.usersList.data = newData
      return state

    case GET_USERS:
    default:
      return state
  }
}
