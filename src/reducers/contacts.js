import { GET_ONE_CONTACT, EDIT_LOCAL_CONTACT, UPDATE_CONTACT, ADD_CONTACT } from '../actions/contacts'

export default(state = {
  contactListing: {}
}, action) => {
  switch (action.type) {
    case ADD_CONTACT:
    return {
      ...state
    }
    case GET_ONE_CONTACT:
    return {
      ...state,
      contactListing: action.payload.data.data[0]
    }
    case EDIT_LOCAL_CONTACT:
    return {
      ...state,
      contactListing: { ...state.contactListing,
      [action.payload.key]: action.payload.value}
    }
    case UPDATE_CONTACT:
    return {
      ...state
    }
    default:
    return state
  }
}
