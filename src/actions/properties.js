import model from '../lib/properties'
import {getLocationData} from '../actions/maps'
import search from '../lib/search'
// import {setIsNotEditable} from '../actions/auth'

export const PROPERTY_SEARCH = 'PROPERTY_SEARCH'
export const propertySearch = (property) => {
  return async (dispatch) => {
    const response = await search.propertySearch(property)
    console.log("SEARCH RESPONSE: ", response );
    return dispatch({type: PROPERTY_SEARCH, payload: response})
  }
}

export const ADD_PROPERTY = 'ADD_PROPERTY'
export const addProperty = (property) => {
  return async (dispatch) => {
    await model.addProperty(property)
    dispatch({type: ADD_PROPERTY})
  }
}

export const EDIT_LOCAL_PROPERTY = 'EDIT_LOCAL_PROPERTY'
export const editLocalProperty = (key, value) => {
  return {type: EDIT_LOCAL_PROPERTY, payload: {key, value}}
}

export const UPDATE_PROPERTY = 'UPDATE_PROPERTY'
export const updateProperty = (id, record) => {
  return async (dispatch) => {
    const response = await model.updateProperty(id, record)
    dispatch({type: UPDATE_PROPERTY, payload: response})
    dispatch({type: 'SET_IS_NOT_EDITABLE'})
  }
}

export const DELETE_PROPERTY = 'DELETE_PROPERTY'
export const deleteProperty = (id) => {
  return async () => {
    console.log(id);
  }
}

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
