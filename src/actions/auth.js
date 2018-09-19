import auth from '../lib/auth'

export const LOG_IN = 'LOG_IN'
export const logIn = (email, password) => {
    return async (dispatch) => {
      await auth.login(email, password)
      return dispatch({type: LOG_IN, payload: email})
    }
}
export const LOG_OUT = 'LOG_OUT'
export const logOut = () => {
  auth.logout()
  return {type: LOG_OUT}
}

export const VERIFY_LOGIN = 'VERIFY_LOGIN'
export const verifyLogin = () => {
  return async (dispatch) => {
    const loggedIn = await auth.verify()
    if (loggedIn) {return dispatch({type: VERIFY_LOGIN})}

  }
}

export const SET_IS_EDITABLE = 'SET_IS_EDITABLE'
export const setIsEditable = () => {
  return {type: SET_IS_EDITABLE}
}

export const SET_IS_NOT_EDITABLE = 'SET_IS_NOT_EDITABLE'
export const setIsNotEditable = () => {
  return {type: SET_IS_NOT_EDITABLE}
}




    // // this.props.updateLoggedInStatus(response)
