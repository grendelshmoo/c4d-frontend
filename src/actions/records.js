import search from '../lib/search'
import model from '../lib/records'

export const KEYWORD_SEARCH = 'KEYWORD_SEARCH'
export const keywordSearch = (fulltext) => {

  return async (dispatch) => {
    const response = await search.keyWord(fulltext)
    return dispatch({type: KEYWORD_SEARCH, payload: response})
  }
}

export const GET_ALL_RECORDS = 'GET_ALL_RECORDS'
export const getAllRecords = () => {
  return async (dispatch) => {
    const response = await model.getAllRecords()
    return dispatch({type: GET_ALL_RECORDS, payload: response})
  }
}

export const GET_ONE_RECORD = 'GET_ONE_RECORD'
export const getOneRecord = (id) => {
  return async (dispatch) => {
    const response = await model.getOneRecord(id)
    return dispatch({type: GET_ONE_RECORD, payload: response})
  }
}

export const UPDATE_RECORD = 'UPDATE_RECORD'
export const updateRecord = (recordId, record) => {
  return async (dispatch) => {
    const response = await model.updateRecord(recordId, record)
    return dispatch({type: UPDATE_RECORD, payload: response})

  }
}
export const EDIT_LOCAL_RECORD = 'EDIT_LOCAL_RECORD'
export const editLocalRecord = (recordKey, recordValue) => {
  return ({type: EDIT_LOCAL_RECORD, payload: {key: recordKey, value: recordValue}})
}

export const DELETE_RECORD = 'DELETE_RECORD'
export const deleteRecord = (recordId) => {
  return async (dispatch) => {
    await model.deleteRecord(recordId)
    return dispatch({type: UPDATE_RECORD})
  }
}

export const ADD_EMPTY_PARTY = 'ADD_EMPTY_PARTY'
export const addEmptyParty = () => {
  return {type: ADD_EMPTY_PARTY}
}
