import axios from 'axios'
const BASE_URL = `http://localhost:5000`

const grantorSearch = async(grantor) => {
  try {
    return axios.get(`${BASE_URL}/api/records/search?grantor=${grantor}`)
      .then(
        response => {
          if (response.data.data.length === 0) {

            // Need a no response error document.getElementById('noresults-alert').classList.remove('d-none')

          }
          if (response.data.data.length >= 1) {
            //  document.getElementById('noresults-alert').classList.add('d-none')
          }
          const listings = response.data.data
          //
        }
      )
  } catch (e) {
    console.error(e.response)
    return false
  }
}



export default { grantorSearch }
