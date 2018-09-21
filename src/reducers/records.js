import { KEYWORD_SEARCH, GET_ONE_RECORD } from '../actions/records'

export default(state = {
  searchResults: { data: []},
  recordListing: { parties: [] }
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
    default:
    return state
  }
}
