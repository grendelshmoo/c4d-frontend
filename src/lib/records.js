import axios from 'axios'
const BASE_URL = `http://localhost:5000`

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




export default { getOneRecord }
