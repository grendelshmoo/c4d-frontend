import model from '../lib/maps'

export const GET_LOCATION_DATA = 'GET_LOCATION_DATA'
export const getLocationData = () => {
  // return async (dispatch) => {
  //   const response = await model.getLocationData(address)
  //   return dispatch({type: GET_LOCATION_DATA, payload: response})
  // }
}

export const SET_CURRENT_MAPVIEW_PLAT = 'SET_CURRENT_MAPVIEW_PLAT'
export const setCurrentMapviewPlat = () => {
  return {type: SET_CURRENT_MAPVIEW_PLAT}
}

export const SET_CURRENT_MAPVIEW_GOOGLE = 'SET_CURRENT_MAPVIEW_GOOGLE'
export const setCurrentMapviewGoogle = () => {
  return {type: SET_CURRENT_MAPVIEW_GOOGLE}
}

export const SET_CURRENT_MAPVIEW_FLOOD = 'SET_CURRENT_MAPVIEW_FLOOD'
export const setCurrentMapviewFlood = () => {
  return {type: SET_CURRENT_MAPVIEW_FLOOD}
}
