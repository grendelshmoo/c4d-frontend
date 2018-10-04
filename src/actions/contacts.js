import model from '../lib/contacts'

export const ADD_CONTACT = 'ADD_CONTACT'
export const addContact = (contact) => {
  return async (dispatch) => {
    await model.addContact(contact)
    dispatch({type: ADD_CONTACT})
  }
}

export const GET_ONE_CONTACT = 'GET_ONE_CONTACT'
export const getOneContact = (id) => {
  return async (dispatch) => {
    const response = await model.getOneContact(id)
    dispatch({type: GET_ONE_CONTACT, payload: response})
  }
}

export const EDIT_LOCAL_CONTACT = 'EDIT_LOCAL_CONTACT'
export const editLocalContact = (key, value) => {
  return {type: EDIT_LOCAL_CONTACT, payload: {key, value}}
}

export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const updateContact = (id, contact) => {
  return async (dispatch) => {
    console.log("IN ACTION");
    const response = await model.updateContact(id, contact)
    dispatch({type: UPDATE_CONTACT, payload: response})
    dispatch({type: 'SET_IS_NOT_EDITABLE'})
  }
}

export const DELETE_CONTACT = 'DELETE_CONTACT'
export const deleteContact = (id, contact) => {

}
