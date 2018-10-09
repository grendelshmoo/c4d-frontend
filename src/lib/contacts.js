import axios from 'axios'
// const BASE_URL = process.env.REACT_APP_BASE_URL
// const BASE_URL = `http://localhost:5000`
const BASE_URL = `https://titlebase-api.herokuapp.com`

async function addContact(contact) {
  try {
    return axios(`${BASE_URL}/api/contacts/`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('c4d')}`
      },
      data: contact,
      method: 'POST'
    })
  } catch (e) {
    console.error(e.response)
    return false
  }
}

async function getOneContact(contactId) {
  try {
    return axios(`${BASE_URL}/api/contacts/${contactId}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('c4d')}`
      },
      method: 'GET'
    })
  } catch(e) {
    console.error(e.response)
    return false
  }
}

async function updateContact(contactId, contact) {
  try {
    console.log('OUTGOING PAYLOAD:', contact);
    return axios(`${BASE_URL}/api/contacts/${contactId}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('c4d')}`
      },
      data: contact,
      method: 'PATCH'
    })
  } catch (e) {
    console.error(e.response)
    return false
  }
}

export default { getOneContact, updateContact, addContact }
