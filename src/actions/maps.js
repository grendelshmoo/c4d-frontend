import model from '../lib/maps'

export const GET_LOCATION_DATA = 'GET_LOCATION_DATA'
export const getLocationData = (address) => {

  return async (dispatch, getState) => {
    // dispatch({type: 'GET_LOCATION_DATA_LOADING', payload: true})
    const address = getState().properties.propertyListing.street_address.split(' ').join('+')
    const response = await model.getLocationData(address)
    dispatch({type: GET_LOCATION_DATA, payload: response})

    // dispatch({type: 'GET_LOCATION_DATA_LOADING', payload: false})
  }
}

export const SET_CURRENT_MAPVIEW_PLAT = 'SET_CURRENT_MAPVIEW_PLAT'
export const setCurrentMapviewPlat = (dispatch) => {
  // return {type: GET_LOCATION_DATA}
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
