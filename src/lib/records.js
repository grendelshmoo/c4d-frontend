import axios from 'axios'
// const BASE_URL = `http://localhost:5000`
const BASE_URL = `http://titlebase-api.herokuapp.com`

async function getOneRecord(recordId) {
  // event.preventDefault()
  try {
    return axios(`${BASE_URL}/api/records/${recordId}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('c4d')}`
      },
      method: 'GET'
    })
    // .then(response => this.setState({record: response.data.data}))
  } catch (e) {
    console.error(e.response)
    return false
  }
}

async function getAllRecords() {
  try {
    return axios(`${BASE_URL}/api/records/`, {
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

async function addRecord(record) {
  try {
    return axios(`${BASE_URL}/api/records/`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('c4d')}`
      },
      data: record,
      method: 'POST'
    })
  } catch (e) {
    console.error(e.response)
    return false
  }
}

async function updateRecord(recordId, record) {
  try {
    return axios(`${BASE_URL}/api/records/${recordId}`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('c4d')}`
      },
      data: {...record}
    })

  } catch (e) {
    console.error(e.response)
    return false
  }
}

async function addParties(parties) {
  try {
    return axios(`${BASE_URL}/api/records/parties`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('c4d')}`
      },
      data: parties,
      method: 'POST'
    })
  } catch (e) {
    console.error(e.response)
    return false
  }
}

async function removeParty(party) {
  try {
    return axios(`${BASE_URL}/api/records/parties`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('c4d')}`
      },
      data: party,
      method: 'DELETE'
    })
  } catch (e) {
    console.error(e.response)
    return false
  }
}

async function deleteRecord(recordId) {
  try {
    return axios(`${BASE_URL}/api/records/${recordId}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('c4d')}`
      },
      method: 'DELETE'
    })
  } catch (e) {
    console.error(e.response)
    return false
  }
}




export default { getOneRecord, getAllRecords, addRecord, addParties, updateRecord, deleteRecord, removeParty }
