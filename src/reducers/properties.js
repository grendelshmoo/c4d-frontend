import {GET_ALL_PROPERTIES, GET_ONE_PROPERTY, GET_PROPERTY_RECORDS} from '../actions/properties'

export default(state = {
  searchResults: {
    data: []
  },
  propertyListing: {},
  propertyRecords: {
    data: []
  }
}, action) => {
  switch (action.type) {
    case GET_ALL_PROPERTIES:
      return {
        ...state,
        searchResults: action.payload.data
      }
    case GET_ONE_PROPERTY:
      return {
        ...state,
        propertyListing: action.payload.data.data[0]
      }
    case GET_PROPERTY_RECORDS:
      return {
        ...state,
        propertyRecords: action.payload.data
      }
    default:
      return state
  }
}
