import React from "react"
import {connect} from 'react-redux'
const {REACT_APP_FLOODMAPS_API_KEY} = process.env

const FloodMap = ({locationData}) => {

  let latitude = locationData.results[0].geometry.location.lat
  let longitude = locationData.results[0].geometry.location.lng

return (<div className="d-flex justify-content-center">

</div>)

}

const mapStateToProps = ({maps}) => ({locationData: maps.locationData})
export default connect(mapStateToProps, null)(FloodMap)
