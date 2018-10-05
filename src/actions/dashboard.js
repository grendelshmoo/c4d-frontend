import stats from '../lib/stats'

export const GET_STATS = 'GET_STATS'
export const getStats = () => {
  return async (dispatch) => {
    const response = await stats.getStats()
    dispatch({type: GET_STATS, payload: response.data})
  }
}
