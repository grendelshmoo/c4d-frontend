import { LOG_IN, LOG_OUT, VERIFY_LOGIN, SET_IS_EDITABLE, SET_IS_NOT_EDITABLE } from '../actions/auth'

export default(state = {
  isLoggedIn: false,
  isEditable: false,
  userName: null
}, action) => {
  switch (action.type) {
    case LOG_IN:
    return {
      ...state,
      isLoggedIn: true,
      userName: action.payload
    }
    case LOG_OUT:
    return {
      ...state,
      isLoggedIn: false,
      userName: null
    }
    case VERIFY_LOGIN:
    return {
      ...state,
      isLoggedIn: true
    }
    case SET_IS_EDITABLE:

      return {
        ...state,
        isEditable: true
      }
    case SET_IS_NOT_EDITABLE:
    return {
      ...state,
      isEditable: false
    }
    default:
      return state
  }
}
