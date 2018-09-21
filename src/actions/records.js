import search from '../lib/search'
import model from '../lib/records'

export const KEYWORD_SEARCH = 'KEYWORD_SEARCH'
export const keywordSearch = (fulltext) => {

  return async (dispatch) => {
    const response = await search.keyWord(fulltext)
    return dispatch({type: KEYWORD_SEARCH, payload: response })
  }
}

export const GET_ONE_RECORD = 'GET_ONE_RECORD'
export const getOneRecord = (id) => {
//recordID & recordListing
return async (dispatch) => {
  const response = await model.getOneRecord(id)
  return dispatch({type: GET_ONE_RECORD, payload: response })
}
}
