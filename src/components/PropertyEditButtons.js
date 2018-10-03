import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setIsNotEditable} from '../actions/auth'
import {updateProperty, deleteProperty} from '../actions/properties'

const PropertyEditButtons = ({propertyListing, setIsNotEditable, updateRecord, deleteRecord}) => {
  return (
    <div>
    <button onClick={(e) => {updateProperty(propertyListing.id, propertyListing)}} className="btn btn-sm btn-warning m-2">Save</button>
    <button onClick={setIsNotEditable} type="button" className="btn btn-sm btn-secondary m-2">Cancel</button>
    {/* <button onClick={deleteProperty(propertyListing.id)} type="button" className="btn btn-sm btn-danger m-2">Delete</button> */}
  </div>
  )

}

const mapDispatchToProps = (dispatch) => bindActionCreators({setIsNotEditable, updateProperty, deleteProperty}, dispatch)
const mapStateToProps = ({properties}) => ({ propertyListing: properties.propertyListing })
export default connect(mapStateToProps, mapDispatchToProps)(PropertyEditButtons)
