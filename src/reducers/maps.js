import {GET_LOCATION_DATA, SET_CURRENT_MAPVIEW_PLAT, SET_CURRENT_MAPVIEW_GOOGLE, SET_CURRENT_MAPVIEW_FLOOD } from '../actions/maps'

export default(state = {
  locationData: {results: [{geometry: {lat: 37.4224764,lng: -122.0842499}}]},
  currentMapView: "plat",
  loading: false
}, action) => {
  switch(action.type) {
    case GET_LOCATION_DATA:
    return {
      ...state,
      locationData: action.payload.data
    }
    case 'GET_LOCATION_DATA_LOADING':
    return {
      ...state,
      ...state.locationData,
      currentMapView: action.payload
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
