import {GET_ALL_PROPERTIES} from '../actions/properties'

export default(state = {
  searchResults: {
    data: []
  }
}, action) => {
  switch (action.type) {
    case GET_ALL_PROPERTIES:
    return {
      ...state,
      searchResults: action.payload.data
    }
    default:
      return state
  }
}
