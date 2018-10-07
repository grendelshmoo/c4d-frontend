import {GET_STATS, GET_GRAPH1, GET_GRAPH2} from '../actions/dashboard'

export default (state = {
  statsResults:{},
  recordsByDate: [[{x: '', y: ''}]],
  recordsByMuni: [{x: '', y: ''}]
}, action) => {
  switch(action.type) {
    case GET_STATS:
    return {
      ...state,
      statsResults: action.payload
    }
    case GET_GRAPH1:
    return {
      ...state,
      recordsByDate: action.payload.data
    }
    case GET_GRAPH2:
    return {
      ...state,
      recordsByMuni: action.payload.data
    }
    default:
    return state
  }
}
