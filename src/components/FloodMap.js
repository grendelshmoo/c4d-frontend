import React from "react"
import {connect} from 'react-redux'
const {REACT_APP_FLOODMAPS_API_KEY} = process.env

const FloodMap = ({locationData}) => {

  let latitude = locationData.results[0].geometry.location.lat
  let longitude = locationData.results[0].geometry.location.lng

  return (<div className="d-flex justify-content-center">

    <iframe src={`https://floodmap.nationalflooddata.com/static.html?key= qt0qFlK8RFahpw2IDZ5355xUneJ2aBUj8A19ZffN&zoom=10&lng=${longitude}&lat=${latitude}&width=172&height=160`}
      height="350"
      width="350"
      frameBorder="0"
      >
      </iframe>

  </div>)

}

const mapStateToProps = ({maps}) => ({locationData: maps.locationData})
export default connect(mapStateToProps, null)(FloodMap)
