import model from '../lib/properties'

export const GET_ALL_PROPERTIES = 'GET_ALL_PROPERTIES'
export const getAllProperties = () => {
  return async (dispatch) => {
    const response = await model.getAllProperties()
    return dispatch({type: GET_ALL_PROPERTIES, payload: response})
  }
}
