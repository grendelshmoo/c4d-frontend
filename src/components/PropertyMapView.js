import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getLocationData, setCurrentMapviewPlat, setCurrentMapviewGoogle, setCurrentMapviewFlood} from '../actions/maps'
import GoogleMaps from "simple-react-google-maps"
const {REACT_APP_GMAPS_API_KEY} = process.env

class PropertyMapView extends Component {

  componentDidMount = () => {
    // this.props.getLocationData()
  }

  render() {
    console.log("CURRENT MAP SELECTION: ", this.props.currentMapView)

    // NEED TO GET PROPERTY FROM state

    const property = this.props.propertyListing
    return (<div className="col-5 p-1 text-center">

{/*  LOGIC HERE ON WHAT TO DISPLACE DEPENDING ON STATE.  */}
  {
    this.props.currentMapView==="plat" ? <img className="plat-map-image" alt={property.map_document} src={`http://localhost:3000/images/${property.map_document}.jpg`}></img> :
    <div className="d-flex justify-content-center">
      <GoogleMaps apiKey={`${REACT_APP_GMAPS_API_KEY}`} style={{
          height: "350px",
          width: "350px"
        }} zoom={16} center={{
          lat: 37.4224764,
          lng: -122.0842499
        }} markers={{
          lat: 37.4224764,
          lng: -122.0842499
        }}/>
    </div>

  }

      {/* <img className="plat-map-image" alt={property.map_document} src={`http://localhost:3000/images/${property.map_document}.jpg`}></img> */}


      {/* <div className="d-flex justify-content-center">
        <GoogleMaps apiKey={`${REACT_APP_GMAPS_API_KEY}`} style={{
            height: "400px",
            width: "400px"
          }} zoom={16} center={{
            lat: 37.4224764,
            lng: -122.0842499
          }} mapTypeId={"satellite"} markers={{
            lat: 37.4224764,
            lng: -122.0842499
          }}/>
      </div> */}

      <div className="btn-group m-2" role="group" aria-label="map-view-selector">
        <button onClick={() => {this.props.setCurrentMapviewPlat()}} type="button" className={`btn btn-sm btn-secondary ${this.props.currentMapView==="plat"? "active" : ""}`}>Plat</button>
        <button onClick={() => {this.props.setCurrentMapviewGoogle()}} type="button" className={`btn btn-sm btn-secondary ${this.props.currentMapView==="google"? "active" : ""}`}>Street</button>
        <button onClick={() => {this.props.setCurrentMapviewFlood()}} type="button" className={`btn btn-sm btn-secondary ${this.props.currentMapView==="flood"? "active" : ""}`}>Flood</button>
      </div>
    </div>)
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getLocationData, setCurrentMapviewPlat, setCurrentMapviewGoogle, setCurrentMapviewFlood
}, dispatch)
const mapStateToProps = ({maps, properties}) => ({propertyListing: properties.propertyListing, locationData: maps.locationData, currentMapView: maps.currentMapView})
export default connect(mapStateToProps, mapDispatchToProps)(PropertyMapView)
