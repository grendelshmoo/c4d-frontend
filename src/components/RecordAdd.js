import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getOneRecord, editLocalRecord, addEmptyParty, editLocalParty, addRecord} from '../actions/records'
import {withRouter, Link} from 'react-router-dom'
import AddPartiesList from './AddPartiesList'

class RecordAdd extends Component {

  componentDidMount = () => {
    // const recordId = this.props.match.params.id
    // this.props.getOneRecord(recordId)
  }

  render() {
    const record = this.props.recordListing

    return (<div className="container">
      <div className="container-fluid">

        {/* RECORD DETAILS */}
        <div className="row p-3">
          <div className="col record-card card-blue-outline">
            <div className="row record-card-header header-blue-bg p-1">
              <h5 className="record-card-header-text">
                Record Details
              </h5>
            </div>

            <small>
              <form onSubmit={(e) => {
                  e.preventDefault()
                  // console.log(e.target)
                }} className="form record-card-form p-2 property-details">
                <div className="form-group">
                  <label>Document Date:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("document_date", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Recording Date:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("recording_date", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                {/* <div className="form-group">
                <label>Document Type:</label>
                <input type="text" className="form-control-sm record-card-element" defaultValue={record.document_type}/>
              </div> */
                }
                <div className="form-group">
                  <label>Document Type:</label>
                  <textarea onChange={(e) => {
                      this.props.editLocalRecord("document_type", e.target.value)
                    }} rows="1" cols="80" type="text" className="record-card-element"></textarea>

                </div>
                <div className="form-group">
                  <label>Title Company:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("title_company", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>

              </form>

            </small>
          </div>
        </div>
        {/* PARTIES */}
        <div className="row p-3">
          <div className="col record-card card-blue-outline">
            <div className="row record-card-header header-blue-bg p-1">
              <h5 className="record-card-header-text">
                Parties
              </h5>
            </div>

            <small>
              <div className="row">
                <div className="col m-1 p-1">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Role</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Mailing Address</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {record.parties.map((party, i) => <AddPartiesList editLocalParty={this.props.editLocalParty} key={i} index={i} party={party}/>)}
                    </tbody>
                  </table>
                  <a onClick={this.props.addEmptyParty} className="btn btn-sm btn-outline-success">add</a>
                </div>
              </div>
            </small>

          </div>
        </div>

        {/* PROPERTY INFO */}

        <div className="row p-3">
          <div className="col record-card card-blue-outline">
            <div className="row record-card-header header-blue-bg p-1">
              <h5 className="record-card-header-text">
                Property Details
              </h5>
            </div>
            <small>
              <form className="form record-card-form p-2 property-details">
                <div className="form-group">
                  <label>Legal Description:</label>
                  {/* <input type="text" className="form-control-sm record-card-element" defaultValue="EA 117 1 3 R1 (3777m2)"/> */}

                  {/* FIX LINK highlighting. */}

                  <textarea onChange={(e) => {
                      this.props.editLocalRecord("legal_description", e.target.value)
                    }} id="property-link" rows="2" cols="70" type="text" className="record-card-element"></textarea>
                </div>
                <div className="form-group">
                  <label>Street Address:</label>
                  {/* <input type="text" className="form-control-sm record-card-element" defaultValue="356 S. Marine Corps Dr., Tamuning, GU, 96913"/> */}

                  <textarea onChange={(e) => {
                      this.props.editLocalRecord("street_address", e.target.value)
                    }} rows="2" cols="70" type="text" className="record-card-element"/>
                </div>

                <div className="form-group">
                  <label>Lot:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("lot", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Block:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("block", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Unit:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("unit", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Area:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("area", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Phase:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("phase", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Tract:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("tract", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Increment:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("increment", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Square Footage:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("square_footage", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Building Square Footage:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("building_square_footage", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Map Document:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("map_document", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Building Type:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("building_type", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Year Built:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("year_built", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Type of Construction:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("type_of_construction", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Building Condition:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("building_condition", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Municipality/Village:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("municipality", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Condominium:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("condominium", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Island:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("island", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>

              </form>

            </small>
          </div>
        </div>

        {/* TRANSACTION DETAILS */}
        <div className="row p-3">
          <div className="col record-card card-blue-outline">
            <div className="row record-card-header header-blue-bg p-1">
              <h5 className="record-card-header-text">
                Transaction Details
              </h5>
            </div>

            <small>
              <form className="form record-card-form p-2 property-details">
                <div className="form-group">
                  <label>Amount $:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("amount", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Recording Fees$:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("recording_fees", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Land Tax $:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("land_tax", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>
                <div className="form-group">
                  <label>Land Appraised Value $:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("land_appraised_value", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>

                <div className="form-group">
                  <label>Building Appraised Value $:</label>
                  <input onChange={(e) => {
                      this.props.editLocalRecord("building_appraised_value", e.target.value)
                    }} type="text" className="form-control-sm record-card-element"/>
                </div>

              </form>
            </small>
          </div>
        </div>

        {/* REMARKS/COMMENTS */}

        <div className="row p-3">
          <div className="col record-card card-blue-outline">
            <div className="row record-card-header header-blue-bg p-1">
              <h5 className="record-card-header-text">
                Remarks/Comments
              </h5>
            </div>

            <small>
              <form className="form record-card-form p-2 property-details">
                <div className="form-group">
                  <label>Remarks / Comments:</label>
                  <textarea onChange={(e) => {
                      this.props.editLocalRecord("remarks", e.target.value)
                    }} rows="16" cols="120" type="text" className="record-card-element"></textarea>
                </div>

              </form>
            </small>
          </div>
        </div>

        {/* need seperate buttons */}
        <div>
          <Link role="button" to="/records/" onClick={(e) => {
              this.props.addRecord(record)
            }} className="btn btn-sm btn-warning m-2">Save</Link>
            <Link role="button" className="btn btn-sm btn-secondary" to="/records/" role="button">Cancel</Link>
        </div>

      </div>

    </div>)
  }
}

const mapStateToProps = ({records}) => ({recordListing: records.recordListing})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getOneRecord,
  editLocalRecord,
  addEmptyParty,
  editLocalParty,
  addRecord
}, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecordAdd))
