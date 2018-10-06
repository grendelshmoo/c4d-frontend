import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getOneProperty, getPropertyRecords, getChainOfTitle, getRiskAnalysisResults, editLocalProperty} from '../actions/properties'
import {getLocationData} from '../actions/maps'
import {setIsEditable} from '../actions/auth'
import {withRouter} from 'react-router-dom'
import PropertyRecordsList from './PropertyRecordsList'
import ChainOfTitleList from './ChainOfTitleList'
import RiskAnalyis from './RiskAnalyis'
import PropertyMapView from './PropertyMapView'
import PropertyEditButtons from './PropertyEditButtons'
// import {ListPropertyDocuments} from './ListPropertyDocuments'

class PropertyView extends Component {


  componentDidMount = () => {
    const propertyId = this.props.match.params.id

    this.props.getOneProperty(propertyId)
    this.props.getChainOfTitle(propertyId)
    this.props.getPropertyRecords(propertyId)
    this.props.getRiskAnalysisResults(propertyId)
  }



  render() {
    const property = this.props.propertyListing

    return (<div className="container-fluid">
      <div className="row p-3">
        {/* Left Top Column - Property Details */}
        <div className="col-7 record-card card-blue-outline">
          <div className="row record-card-header header-blue-bg p-1">
            <h5 className="record-card-header-text">
              Property Details
            </h5>
          </div>
          <small>
            <form onSubmit={(e) => {
                e.preventDefault()
                // console.log(e.target)
              }} className="form record-card-form p-2 property-details">
              <div className="form-group">
                <label>Legal Description:</label>
                <textarea disabled={!this.props.isEditable ? 'disabled' : null}  className="record-card-element" rows="1" cols="40" value={property.legal_description} onChange={(e) => {
                    this.props.editLocalProperty("legal_description", e.target.value)
                  }}></textarea>
                {/* <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue="EA 117 1 3 R1 (3777m2)"/> */}
                {/* <p>{property.legal_description}</p> */}
              </div>
              <div className="form-group">
                <label>Street Address:</label>
                <textarea disabled={!this.props.isEditable ? 'disabled' : null} className="record-card-element" rows="1" cols="40" value={property.street_address} onChange={(e) => {
                    this.props.editLocalProperty("street_address", e.target.value)
                  }}></textarea>
                {/* <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue="356 S. Marine Corps Dr., Tamuning, GU, 96913"/> */}
                {/* <p>
                  {property.street_address}</p> */}
              </div>

              <div className="form-group">
                <label>Lot:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("lot", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.lot}/>
              </div>
              <div className="form-group">
                <label>Block:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("block", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.block}/>
              </div>
              <div className="form-group">
                <label>Unit:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("unit", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.unit}/>
              </div>
              <div className="form-group">
                <label>Area:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("area", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.area}/>
              </div>
              <div className="form-group">
                <label>Phase:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("phase", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.phase}/>
              </div>
              <div className="form-group">
                <label>Tract:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("tract", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.tract}/>
              </div>
              <div className="form-group">
                <label>Increment:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("increment", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.increment}/>
              </div>
              <div className="form-group">
                <label>Square Footage:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("square_footage", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.square_footage}/>
              </div>
              <div className="form-group">
                <label>Building Square Footage:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("building_square_footage", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.building_square_footage}/>
              </div>
              <div className="form-group">
                <label>Map Document:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("map_document", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.map_document}/>
              </div>
              <div className="form-group">
                <label>Building Type:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("building_type", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.building_type}/>
              </div>
              <div className="form-group">
                <label>Year Built:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("year_built", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.year_built}/>
              </div>
              <div className="form-group">
                <label>Type of Construction:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("type_of_construction", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.type_of_construction}/>
              </div>
              <div className="form-group">
                <label>Building Condition:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("building_condition", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.building_condition}/>
              </div>
              <div className="form-group">
                <label>Municipality/Village:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("municipality", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.municipality}/>
              </div>
              <div className="form-group">
                <label>Condominium:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("condominium", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.condominium}/>
              </div>
              <div className="form-group">
                <label>Island:</label>
                <input onChange={(e) => {
                    this.props.editLocalProperty("island", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={property.island}/>
              </div>

            </form>
            {
              this.props.isEditable
                ? <PropertyEditButtons/>
                : <button onClick={this.props.setIsEditable} type="button" className="btn btn-sm btn-outline-warning m-2">Edit</button>
            }
          </small>

        </div>
        {/* Right Top Column - Map & Image */}
        <PropertyMapView/>
      </div>
      <div className="row">
        {/* Left mid Column - Risk Analyis */}
        <div className="col-7">
          <div className="col record-card card-red-outline">
            <div className="row record-card-header header-red-bg p-1">
              <h5 className="record-card-header-text">
                Risk Analysis
              </h5>
            </div>
            <small>

              <RiskAnalyis/>

            </small>
          </div>

        </div>

        {/* Right mid Column - Chain of Title */}
        <div className="col-5 container-fluid">

          <div className="col record-card card-yellow-outline">
            <div className="row record-card-header header-yellow-bg p-1">
              <h5 className="record-card-header-text">
                Chain of Title
              </h5>
            </div>
            <small>
              <table className="table table-sm">
                <ChainOfTitleList/>
              </table>
            </small>
          </div>

        </div>
      </div>
      {/* Center Lower Column - Documents */}
      <hr className=""/> {/* <h5>Documents</h5> */}
      <div className="row p-4">
        <div className="col container-fluid text-center">
          <small>
            <table className="table table-striped">
              <thead className="thead bg-dark text-light">
                <tr>
                  <th scope="col">Record</th>
                  <th scope="col">Doc. Date</th>
                  <th scope="col">Doc. Type</th>
                  <th scope="col">Parties</th>
                  <th scope="col">Legal Description</th>
                </tr>
              </thead>
              <PropertyRecordsList/>
            </table>
          </small>
        </div>
      </div>
    </div>)
  }
}

const mapStateToProps = ({properties, auth}) => ({propertyListing: properties.propertyListing, isEditable: auth.isEditable})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getOneProperty,
  getPropertyRecords,
  getChainOfTitle,
  getRiskAnalysisResults,
  setIsEditable,
  getLocationData,
  editLocalProperty
}, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PropertyView))
