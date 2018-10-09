import axios from 'axios'
// const BASE_URL = process.env.REACT_APP_BASE_URL
// const BASE_URL = `http://localhost:5000`
const BASE_URL = `http://titlebase-api.herokuapp.com`

async function addProperty(property) {
  try {
    return axios(`${BASE_URL}/api/properties/`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('c4d')}`
      },
      data: property,
      method: 'POST'
    })
  } catch (e) {
    console.error(e.response)
    return false
  }
}

async function updateProperty(propertyId, property) {
  try {
    return axios(`${BASE_URL}/api/properties/${propertyId}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('c4d')}`
      },
      data: property,
      method: 'PATCH'
    })
  } catch (e) {
    console.error(e.response)
    return false
  }
}

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

async function getChainOfTitle(propertyId) {
  try {
    return axios(`${BASE_URL}/api/properties/${propertyId}/chain`, {
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

async function getRiskAnalysisResults(propertyId) {
  try {
    return axios(`${BASE_URL}/api/properties/${propertyId}/analyze`, {
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

export default { getAllProperties, getOneProperty, getPropertyRecords, getChainOfTitle, getRiskAnalysisResults, updateProperty, addProperty }
