import { KEYWORD_SEARCH, GET_ONE_RECORD } from '../actions/records'

export default(state = {
  searchResults: { data: {data: []}},
  activeRecord: 0
}, action) => {
  switch (action.type) {
    case KEYWORD_SEARCH:
    return {
      ...state,
      searchResults: action.payload
    }
    case GET_ONE_RECORD:
    return {
      ...state
    }
    default:
    return state
  }
}
