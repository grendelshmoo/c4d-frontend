import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
// import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import {getLocationData, setCurrentMapviewPlat, setCurrentMapviewGoogle, setCurrentMapviewFlood} from '../actions/maps'
import GoogleMap from "./GoogleMap"
import FloodMap from "./FloodMap"
import Spinner from 'react-spinkit'
// const {REACT_APP_GMAPS_API_KEY} = process.env

class PropertyMapView extends Component {

  // componentDidMount = () => {
  //   const property = this.props.propertyListing
  //
  //
  //     let streetAddress = property.street_address.split(' ').join('+')
  //     console.log("ADDRESS TO SUBMIT TO API:", streetAddress);
  //     this.props.getLocationData(streetAddress)
  //
  //
  // }

  // if (property.street_address) {
  //   let streetAddress = property.street_address.split(' ').join('+')
  //   console.log("ADDRESS TO SUBMIT TO API:", streetAddress);
  //   this.props.getLocationData(streetAddress)
  // }

  render() {
    const property = this.props.propertyListing
    // const locationData = this.props.locationData

    // if (locationData.results.length === 0 && property.street_address) {
    //   const address = property.street_address
    //     let searchAddress = address.split(' ').join('+')
    //     this.props.getLocationData(searchAddress)
    // }



    let currentMap

    // if (this.props.currentMapView === "loading") { currentMap = <div>yo</div> }

    if (this.props.currentMapView === "plat") {
      if (this.props.loading) return <div className="container d-flex justify-content-center m-3 p-3"><Spinner name='line-scale' color='#D8212C' /></div>

      currentMap = <img className="plat-map-image" alt={property.map_document} src={`http://localhost:3000/images/${property.map_document}.jpg`}></img>
    }

    if (this.props.currentMapView === "google") {
      currentMap = (<GoogleMap />)
    }

    if (this.props.currentMapView === "flood") {
      currentMap = <FloodMap />
    }

    return (<div className="col-5 p-1 text-center">
      {currentMap}
      <div className="btn-group m-2" role="group" aria-label="map-view-selector">
        <button onClick={() => {
            this.props.setCurrentMapviewPlat()
          }} type="button" className={`btn btn-sm btn-secondary ${this.props.currentMapView === "plat"
            ? "active"
            : ""}`}>Plat</button>
        <button onClick={() => {
            this.props.setCurrentMapviewGoogle()
          }} type="button" className={`btn btn-sm btn-secondary ${this.props.currentMapView === "google"
            ? "active"
            : ""}`}>Street</button>
        <button onClick={() => {
            this.props.setCurrentMapviewFlood()
          }} type="button" className={`btn btn-sm btn-secondary ${this.props.currentMapView === "flood"
            ? "active"
            : ""}`}>Flood</button>
      </div>
    </div>)
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getLocationData,
  setCurrentMapviewPlat,
  setCurrentMapviewGoogle,
  setCurrentMapviewFlood
}, dispatch)
const mapStateToProps = ({maps, properties}) => ({propertyListing: properties.propertyListing, locationData: maps.locationData, currentMapView: maps.currentMapView, loading: maps.loading})
export default connect(mapStateToProps, mapDispatchToProps)(PropertyMapView)
