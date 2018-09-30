import {GET_ALL_PROPERTIES, GET_ONE_PROPERTY, GET_PROPERTY_RECORDS, GET_CHAIN_OF_TITLE, GET_RISK_ANALYSIS_RESULTS} from '../actions/properties'

export default(state = {
  searchResults: {
    data: []
  },
  propertyListing: {},
  propertyRecords: {
    data: []
  },
  titleChain: {
    loading: false,
    data: []
  },
  riskAnalysisResults: {
    loading: false,
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
    case GET_CHAIN_OF_TITLE:
    return {
      ...state,
      titleChain: action.payload.data
    }
    case GET_RISK_ANALYSIS_RESULTS:
    return {
      ...state,
      riskAnalysisResults: {
        ...state.riskAnalysisResults,
        data: action.payload.data
      }
    }
    case 'GET_RISK_ANALYSIS_RESULTS_LOADING':
    return {
      ...state,
      riskAnalysisResults: {
        ...state.riskAnalysisResults,
        loading: action.payload
      }
    }
    default:
      return state
  }
}
