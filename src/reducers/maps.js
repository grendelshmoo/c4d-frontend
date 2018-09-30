import {GET_LOCATION_DATA, SET_CURRENT_MAPVIEW_PLAT, SET_CURRENT_MAPVIEW_GOOGLE, SET_CURRENT_MAPVIEW_FLOOD } from '../actions/maps'

export default(state = {
  locationData: {},
  currentMapView: "plat"
}, action) => {
  switch(action.type) {
    case GET_LOCATION_DATA:
    return {
      ...state,
      locationData: action.payload
    }
    case SET_CURRENT_MAPVIEW_PLAT:
    return {
      ...state,
      currentMapView: "plat"
    }
    case SET_CURRENT_MAPVIEW_GOOGLE:
    return {
      ...state,
      currentMapView: "google"
    }
    case SET_CURRENT_MAPVIEW_FLOOD:
    return {
      ...state,
      currentMapView: "flood"
    }
    default:
    return state
  }
}
