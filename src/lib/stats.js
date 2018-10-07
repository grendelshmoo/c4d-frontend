import axios from 'axios'
// const BASE_URL = `http://localhost:5000`
const BASE_URL = `http://titlebase-api.herokuapp.com`

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

async function getGraph1() {
  try {
    return axios(`${BASE_URL}/api/stats/graph1`, {
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

async function getGraph2() {
  try {
    return axios(`${BASE_URL}/api/stats/graph2`, {
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

export default {getStats, getGraph1, getGraph2}
