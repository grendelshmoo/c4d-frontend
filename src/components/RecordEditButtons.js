import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setIsNotEditable} from '../actions/auth'
import {updateRecord, deleteRecord} from '../actions/records'

const RecordEditButtons = ({recordListing, setIsNotEditable, updateRecord, deleteRecord}) => {
  return (
    <div>
    <button onClick={(e) => {updateRecord(recordListing.id, recordListing)}} className="btn btn-sm btn-warning m-2">Save</button>
    <button onClick={setIsNotEditable} type="button" className="btn btn-sm btn-secondary m-2">Cancel</button>
    <button onClick={deleteRecord} type="button" className="btn btn-sm btn-danger m-2">Delete</button>
  </div>
  )

}

const mapDispatchToProps = (dispatch) => bindActionCreators({setIsNotEditable, updateRecord, deleteRecord}, dispatch)
const mapStateToProps = ({records}) => ({ recordListing: records.recordListing })
export default connect(mapStateToProps, mapDispatchToProps)(RecordEditButtons)
