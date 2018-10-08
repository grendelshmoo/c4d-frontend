import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {editLocalContact, addContact} from '../actions/contacts'

const ContactAdd = ({editLocalContact, addContact, contactListing}) => {
  return (
    <div className="container-fluid">
      <div className="row p-3">
        <div className="col-9 record-card card-yellow-outline">
          <div className="row record-card-header header-yellow-bg p-1">
            <h5 className="record-card-header-text">
              Contact Details
            </h5>
          </div>
          <small>
            <form className="form record-card-form p-2 property-details">
              <div className="form-group">
                <label>Last Name:</label>
                <input onChange={(e) => {
                    editLocalContact("last_name", e.target.value)
                  }}  type="text" className="form-control-sm record-card-element" />
              </div>
              <div className="form-group">
                <label>First Name:</label>
                <input onChange={(e) => {
                    editLocalContact("first_name", e.target.value)
                  }}  type="text" className="form-control-sm record-card-element" />
              </div>
              <div className="form-group">
                <label>Mailing Address:</label>
                <textarea className="record-card-element" rows="2" cols="80" onChange={(e) => {
                    editLocalContact("mailing_address", e.target.value)
                  }}></textarea>
              </div>
              <Link onClick={() => {addContact(contactListing)}} role="button" to="/contacts" className="btn btn-sm btn-block btn-warning m-2">Save</Link>
            </form>
          </small>

        </div>
      </div>
    </div>)
}

const mapStateToProps =({contacts}) => ({contactListing: contacts.contactListing})
const mapDispatchToProps = (dispatch) => bindActionCreators({editLocalContact, addContact}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContactAdd)
