import {
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGOUT,
} from '../actions/socialLoginActions'

export const initialState = {
  user: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SOCIAL_LOGIN_SUCCESS:
      console.log('1')
      return {
        ...state,
        user: action.user,
      }
    case SOCIAL_LOGOUT:
      return {
        ...state,
        user: initialState.user,
      }
    default:
      return state
      console.log(state)
  }
}
