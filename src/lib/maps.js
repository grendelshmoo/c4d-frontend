import axios from 'axios'

async function getLocationData(address) {
  try {
    return axios('https://maps.googleapis.com/maps/api/geocode/json', {
      method: 'GET',
      params: {
        key: 'AIzaSyCdLNbMd-tZnicdWqdOKpOFiUHvR1XhM_8',
        address: address
      }
    })
  } catch (e) {
    console.error(e.response)
    return false
  }
}

export default { getLocationData }
