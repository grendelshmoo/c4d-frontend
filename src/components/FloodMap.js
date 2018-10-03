import React from "react"
// import Spinner from 'react-spinkit'
import {connect} from 'react-redux'
const {REACT_APP_FLOODMAPS_API_KEY} = process.env

const FloodMap = ({locationData, loading}) => {

  let latitude = locationData.results[0].geometry.location.lat
  let longitude = locationData.results[0].geometry.location.lng

  // if (loading)
  // return <div className="container d-flex justify-content-center m-3 p-3"><Spinner name='line-scale' color='#D8212C' /></div>

  return (<div className="d-flex justify-content-center">

    <iframe src={`https://floodmap.nationalflooddata.com/static.html?key= ${REACT_APP_FLOODMAPS_API_KEY}&zoom=10&lng=${longitude}&lat=${latitude}&width=172&height=160`}
      height="350"
      width="350"
      frameBorder="0"
      title="FloodMap"
      >
      </iframe>

  </div>)

}

const mapStateToProps = ({maps}) => ({locationData: maps.locationData, loading: maps.loading})
export default connect(mapStateToProps, null)(FloodMap)
