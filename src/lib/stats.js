import axios from 'axios'
const BASE_URL = `http://localhost:5000`

async function getStats() {
  try {
    return axios(`${BASE_URL}/api/stats/breakdown`, {
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

export default {getStats}
