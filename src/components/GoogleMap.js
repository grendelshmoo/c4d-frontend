import React from 'react'
import {connect} from 'react-redux'
import GoogleMaps from "simple-react-google-maps"
const {REACT_APP_GMAPS_API_KEY} = process.env

const GoogleMap = ({locationData}) => {

  let latitude = locationData.results[0].geometry.location.lat
  let longitude = locationData.results[0].geometry.location.lng

return (<div className="d-flex justify-content-center">
  <GoogleMaps apiKey={`${REACT_APP_GMAPS_API_KEY}`} style={{
      height: "350px",
      width: "350px"
    }} zoom={14} center={{
      lat: latitude,
      lng: longitude
    }} markers={{
      lat: latitude,
      lng: longitude
    }}/>
</div>)

}

const mapStateToProps = ({maps}) => ({locationData: maps.locationData})
export default connect(mapStateToProps, null)(GoogleMap)
