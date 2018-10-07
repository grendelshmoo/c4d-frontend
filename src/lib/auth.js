import axios from 'axios'
const BASE_URL = `http://localhost:5000`
// const BASE_URL = `http://titlebase-api.herokuapp.com`
const TOKEN_NAME = 'c4d'

const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/users/login`, { email, password })
    const token = response.data.token
    localStorage.setItem(TOKEN_NAME, token)
    return true
  } catch (e) {
    console.error(e.message, e)
    return false
  }
}

const verify = async () => {
  const token = localStorage.getItem(TOKEN_NAME)
  if (!token) {return false} else {return true}

  //FIX THIS PLEASE BEFORE RELEASE

  // try {
  //   const response = await axios(`${BASE_URL}/api/users/login`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   })
  //
  //   return response.data
  // } catch (e) {
  //   console.error(e)
  //   return false
  // }
}

const logout = () => {
  localStorage.removeItem(TOKEN_NAME)
}

export default { login, verify, logout }
