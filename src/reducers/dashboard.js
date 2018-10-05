import {GET_STATS} from '../actions/dashboard'

export default (state = {
  statsResults:{

  }
}, action) => {
  switch(action.type) {
    case GET_STATS:
    return {
      ...state,
      statsResults: action.payload
    }
    default:
    return state
  }
}
