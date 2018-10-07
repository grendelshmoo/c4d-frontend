import axios from 'axios'
// const BASE_URL = `http://localhost:5000`
const BASE_URL = `http://titlebase-api.herokuapp.com`

async function keyWord(fulltext) {
  // event.preventDefault()
  try {
    // console.log('IN LIB:', fulltext)
    return axios(`${BASE_URL}/api/records/search?grantor=${fulltext}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('c4d')}`
      },
      method: 'GET'
    })
  } catch (e) {
    console.error(e.response)
    return false
  }

}




export default { keyWord }
