import axios from 'axios'
const BASE_URL = `http://localhost:5000`

async function getAllProperties() {
  try {
    return axios(`${BASE_URL}/api/properties/`, {
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

async function getOneProperty(propertyId) {
  try {
    return axios(`${BASE_URL}/api/properties/${propertyId}`, {
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

async function getPropertyRecords(propertyId) {
  try {
    return axios(`${BASE_URL}/api/properties/${propertyId}/records`, {
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

export default { getAllProperties, getOneProperty, getPropertyRecords }
