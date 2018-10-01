import model from '../lib/properties'
import {getLocationData} from '../actions/maps'

export const GET_ALL_PROPERTIES = 'GET_ALL_PROPERTIES'
export const getAllProperties = () => {
  return async (dispatch) => {
    const response = await model.getAllProperties()
    return dispatch({type: GET_ALL_PROPERTIES, payload: response})
  }
}

export const GET_ONE_PROPERTY = 'GET_ONE_PROPERTY'
export const getOneProperty = (id) => {
  return async (dispatch) => {
    const response = await model.getOneProperty(id)
    dispatch({type: GET_ONE_PROPERTY, payload: response})
    dispatch(getLocationData())
  }
}

export const GET_PROPERTY_RECORDS = 'GET_PROPERTY_RECORDS'
export const getPropertyRecords = (id) => {
  return async (dispatch) => {
    const response = await model.getPropertyRecords(id)
    return dispatch({type: GET_PROPERTY_RECORDS, payload: response})
  }
}

export const GET_CHAIN_OF_TITLE = 'GET_CHAIN_OF_TITLE'
export const getChainOfTitle = (id) => {
  return async (dispatch) => {
    const response = await model.getChainOfTitle(id)
    return dispatch({type: GET_CHAIN_OF_TITLE, payload: response})
  }
}

export const GET_RISK_ANALYSIS_RESULTS = 'GET_RISK_ANALYSIS_RESULTS'
export const getRiskAnalysisResults = (id) => {
  return async (dispatch) => {
    dispatch({
      type: 'GET_RISK_ANALYSIS_RESULTS_LOADING',
      payload: true
    })

    const response = await model.getRiskAnalysisResults(id)
    dispatch({
      type: GET_RISK_ANALYSIS_RESULTS,
      payload: response.data
    })

    dispatch({
      type: 'GET_RISK_ANALYSIS_RESULTS_LOADING',
      payload: false
    })
  }
}
