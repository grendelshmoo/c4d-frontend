import {KEYWORD_SEARCH, GET_ONE_RECORD, UPDATE_RECORD, DELETE_RECORD, EDIT_LOCAL_RECORD} from '../actions/records'

export default(state = {
  searchResults: {
    data: []
  },
  recordListing: {
    parties: []
  }
}, action) => {
  switch (action.type) {
    case KEYWORD_SEARCH:
      return {
        ...state,
        searchResults: action.payload
      }
    case GET_ONE_RECORD:
      return {
        ...state,
        recordListing: action.payload.data.data
      }
    case UPDATE_RECORD:
      return {
        ...state,
        recordListing: action.payload.data.data
      }
    case EDIT_LOCAL_RECORD:
      return {
        ...state,
        recordListing: { ...state.recordListing,
          [action.payload.key]: action.payload.value
        }
      }
    case DELETE_RECORD:
      return {
        ...state
      }
    default:
      return state
  }
}
