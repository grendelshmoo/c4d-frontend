import axios from 'axios'
const BASE_URL = `http://localhost:5000`

async function keyWord(event, cb) {
  event.preventDefault()
  try {
    // console.log(event.target['grantor-search'].value)
    axios(`${BASE_URL}/api/records/search?grantor=${event.target['grantor-search'].value}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('c4d')}`
      },
      method: 'GET'
    }).then(response => cb(response))
  } catch (e) {
    console.error(e.response)
    return false
  }

}


export default { keyWord }
