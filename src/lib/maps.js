async function getLocation() {
  try {
    console.log('IN MAPS MODEL')
  } catch (e) {
    console.error(e.response)
    return false
  }
}

export default { getLocation }
