import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import {setIsEditable} from '../actions/auth'
import {getOneContact, editLocalContact} from '../actions/contacts'
import ContactEditButtons from './ContactEditButtons'

class ContactView extends Component {

  componentDidMount = () => {
    const contactId = this.props.match.params.id
    this.props.getOneContact(contactId)
  }

  render() {
    const contact = this.props.contactListing

    return (<div className="container">
      <div className="row p-3">
        <div className="col record-card card-yellow-outline">
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
                    this.props.editLocalContact("last_name", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={contact.last_name}/>
              </div>
              <div className="form-group">
                <label>First Name:</label>
                <input onChange={(e) => {
                    this.props.editLocalContact("first_name", e.target.value)
                  }} disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={contact.first_name}/>
              </div>
              <div className="form-group">
                <label>Mailing Address:</label>
                <textarea disabled={!this.props.isEditable
                    ? 'disabled'
                    : null} className="record-card-element" rows="2" cols="80" value={contact.mailing_address} onChange={(e) => {
                    this.props.editLocalContact("mailing_address", e.target.value)
                  }}></textarea>
                {/* <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue="EA 117 1 3 R1 (3777m2)"/> */}
                {/* <p>{property.legal_description}</p> */}
              </div>
            </form>
            {
              this.props.isEditable
                ? <ContactEditButtons/>
                : <button onClick={this.props.setIsEditable} type="button" className="btn btn-sm btn-outline-warning m-2">Edit</button>
            }
          </small>

        </div>
      </div>
    </div>)
  }
}
const mapStateToProps = ({contacts, auth}) => ({contactListing: contacts.contactListing, isEditable: auth.isEditable})
const mapDispatchToProps = (dispatch) => bindActionCreators({getOneContact,editLocalContact,setIsEditable}, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactView))
