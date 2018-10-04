import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setIsNotEditable} from '../actions/auth'
import {updateContact, deleteContact} from '../actions/contacts'

const ContactEditButtons = ({contactListing, setIsNotEditable, updateContact}) => {
  return (
    <div>
    <button onClick={() => {updateContact(contactListing.id, contactListing)}} className="btn btn-sm btn-warning m-2">Save</button>
    <button onClick={setIsNotEditable} type="button" className="btn btn-sm btn-secondary m-2">Cancel</button>
    <button onClick={deleteContact(contactListing.id)} type="button" className="btn btn-sm btn-danger m-2">Delete</button>
  </div>
  )

}

const mapDispatchToProps = (dispatch) => bindActionCreators({setIsNotEditable, updateContact, deleteContact}, dispatch)
const mapStateToProps = ({contacts}) => ({ contactListing: contacts.contactListing })
export default connect(mapStateToProps, mapDispatchToProps)(ContactEditButtons)
