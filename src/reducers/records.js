import {KEYWORD_SEARCH, GET_ALL_RECORDS, GET_ONE_RECORD, UPDATE_RECORD, DELETE_RECORD, EDIT_LOCAL_RECORD, ADD_EMPTY_PARTY} from '../actions/records'

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
    case GET_ALL_RECORDS:
      return {
        ...state,
        searchResults: action.payload.data
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
    case ADD_EMPTY_PARTY:
      return {
        ...state,
        recordListing: {
          ...state.recordListing,
          parties: [...state.recordListing.parties, { first_name: '',
                      last_name: '',
                      mailing_address: ''}]
        }
      }
    default:
      return state
  }
}
