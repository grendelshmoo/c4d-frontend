import model from '../lib/properties'

export const GET_ALL_PROPERTIES = 'GET_ALL_PROPERTIES'
export const getAllProperties = () => {
  return async (dispatch) => {
    const response = await model.getAllProperties()
    return dispatch({type: GET_ALL_PROPERTIES, payload: response})
  }
}

export const GET_ONE_PROPERTY = 'GET_ONE_PROPERTY'
export const getOneProperty = (id) => {
  return async (dispatch) => {
    const response = await model.getOneProperty(id)
    return dispatch({type: GET_ONE_PROPERTY, payload: response})
  }
}

export const GET_PROPERTY_RECORDS = 'GET_PROPERTY_RECORDS'
export const getPropertyRecords = (id) => {
  return async (dispatch) => {
    const response = await model.getPropertyRecords(id)
    return dispatch({type: GET_PROPERTY_RECORDS, payload: response})
  }
}
