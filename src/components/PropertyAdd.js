import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {editLocalProperty, addProperty} from '../actions/properties'

const PropertyAdd = ({editLocalProperty, addProperty, propertyListing}) => {

  return (<div className="container-fluid">
    <div className="row p-3">
      <div className="col record-card card-blue-outline">
        <div className="row record-card-header header-blue-bg p-1">
          <h5 className="record-card-header-text">
            Add Property
          </h5>
        </div>
        <small>
          <form className="form record-card-form p-2 property-details">
            <div className="form-group">
              <label>Legal Description:</label>
              <textarea className="record-card-element" rows="1" cols="40" onChange={(e) => {
                  editLocalProperty("legal_description", e.target.value)
                }}></textarea>
              {/* <input type="text" className="form-control-sm record-card-element" defaultValue="EA 117 1 3 R1 (3777m2)"/> */}
              {/* <p>{property.legal_description}</p> */}
            </div>
            <div className="form-group">
              <label>Street Address:</label>
              <textarea className="record-card-element" rows="1" cols="40" onChange={(e) => {
                  editLocalProperty("street_address", e.target.value)
                }}></textarea>
              {/* <input type="text" className="form-control-sm record-card-element" defaultValue="356 S. Marine Corps Dr., Tamuning, GU, 96913"/> */}
              {/* <p>
                {property.street_address}</p> */
              }
            </div>

            <div className="form-group">
              <label>Lot:</label>
              <input onChange={(e) => {
                  editLocalProperty("lot", e.target.value)
                }} type="text" className="form-control-sm record-card-element"/>
            </div>
            <div className="form-group">
              <label>Block:</label>
              <input onChange={(e) => {
                  editLocalProperty("block", e.target.value)
                }} type="text" className="form-control-sm record-card-element" />
            </div>
            <div className="form-group">
              <label>Unit:</label>
              <input onChange={(e) => {
                  editLocalProperty("unit", e.target.value)
                }} type="text" className="form-control-sm record-card-element" />
            </div>
            <div className="form-group">
              <label>Area:</label>
              <input onChange={(e) => {
                  editLocalProperty("area", e.target.value)
                }} type="text" className="form-control-sm record-card-element" />
            </div>
            <div className="form-group">
              <label>Phase:</label>
              <input onChange={(e) => {
                  editLocalProperty("phase", e.target.value)
                }} type="text" className="form-control-sm record-card-element" />
            </div>
            <div className="form-group">
              <label>Tract:</label>
              <input onChange={(e) => {
                  editLocalProperty("tract", e.target.value)
                }} type="text" className="form-control-sm record-card-element" />
            </div>
            <div className="form-group">
              <label>Increment:</label>
              <input onChange={(e) => {
                  editLocalProperty("increment", e.target.value)
                }} type="text" className="form-control-sm record-card-element" />
            </div>
            <div className="form-group">
              <label>Square Footage:</label>
              <input onChange={(e) => {
                  editLocalProperty("square_footage", e.target.value)
                }} type="text" className="form-control-sm record-card-element" />
            </div>
            <div className="form-group">
              <label>Building Square Footage:</label>
              <input onChange={(e) => {
                  editLocalProperty("building_square_footage", e.target.value)
                }} type="text" className="form-control-sm record-card-element" />
            </div>
            <div className="form-group">
              <label>Map Document:</label>
              <input onChange={(e) => {
                  editLocalProperty("map_document", e.target.value)
                }} type="text" className="form-control-sm record-card-element" />
            </div>
            <div className="form-group">
              <label>Building Type:</label>
              <input onChange={(e) => {
                  editLocalProperty("building_type", e.target.value)
                }} type="text" className="form-control-sm record-card-element" />
            </div>
            <div className="form-group">
              <label>Year Built:</label>
              <input onChange={(e) => {
                  editLocalProperty("year_built", e.target.value)
                }} type="text" className="form-control-sm record-card-element" />
            </div>
            <div className="form-group">
              <label>Type of Construction:</label>
              <input onChange={(e) => {
                  editLocalProperty("type_of_construction", e.target.value)
                }} type="text" className="form-control-sm record-card-element" />
            </div>
            <div className="form-group">
              <label>Building Condition:</label>
              <input onChange={(e) => {
                  editLocalProperty("building_condition", e.target.value)
                }} type="text" className="form-control-sm record-card-element" />
            </div>
            <div className="form-group">
              <label>Municipality/Village:</label>
              <input onChange={(e) => {
                  editLocalProperty("municipality", e.target.value)
                }} type="text" className="form-control-sm record-card-element" />
            </div>
            <div className="form-group">
              <label>Condominium:</label>
              <input onChange={(e) => {
                  editLocalProperty("condominium", e.target.value)
                }} type="text" className="form-control-sm record-card-element" />
            </div>
            <div className="form-group">
              <label>Island:</label>
              <input onChange={(e) => {
                  editLocalProperty("island", e.target.value)
                }} type="text" className="form-control-sm record-card-element" />
            </div>
            <button onClick={() => {addProperty(propertyListing)}} className="btn btn-sm btn-block btn-warning m-2">Save</button>
          </form>
          {/* {
            this.props.isEditable
              ? <PropertyEditButtons/>
              : <button onClick={this.props.setIsEditable} type="button" className="btn btn-sm btn-outline-warning m-2">Edit</button>
          } */}
        </small>

      </div>

    </div>
  </div>)
}
const mapStateToProps = ({properties}) => ({propertyListing: properties.propertyListing})
const mapDispatchToProps = (dispatch) => bindActionCreators({editLocalProperty, addProperty}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PropertyAdd)
