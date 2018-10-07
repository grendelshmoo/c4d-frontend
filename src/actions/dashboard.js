import stats from '../lib/stats'

export const GET_STATS = 'GET_STATS'
export const getStats = () => {
  return async (dispatch) => {
    const response = await stats.getStats()
    dispatch({type: GET_STATS, payload: response.data})
  }
}

export const GET_GRAPH1 = 'GET_GRAPH1'
export const getGraph1 = () => {
  return async (dispatch) => {
    const response = await stats.getGraph1()
    console.log("RESPONSE:", response);
    dispatch({type: GET_GRAPH1, payload: response.data })
  }
}

export const GET_GRAPH2 = 'GET_GRAPH2'
export const getGraph2 = () => {
  return async (dispatch) => {
    const response = await stats.getGraph2()
    console.log("RESPONSE:", response);
    dispatch({type: GET_GRAPH2, payload: response.data })
  }
}
