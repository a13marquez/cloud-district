import {
  FETCH_USER_LIST_SUCCESS,
  FETCH_USER_LIST_FAILED,
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
    default:
      return state
  }
}
