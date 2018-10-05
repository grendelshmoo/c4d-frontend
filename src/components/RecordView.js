import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getOneRecord, editLocalRecord, addEmptyParty} from '../actions/records'
import {setIsEditable} from '../actions/auth'
import {withRouter} from 'react-router-dom'
import moment from 'moment'
// import RecordPartiesList from './RecordPartiesList'
import EditPartiesList from './EditPartiesList'
import RecordEditButtons from './RecordEditButtons'

class RecordView extends Component {

  componentDidMount = () => {
    const recordId = this.props.match.params.id
    this.props.getOneRecord(recordId)
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
                  <label>Record #:</label>
                  <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={record.record_number}/>
                </div>
                <div className="form-group">
                  <label>Document Date:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={moment(record.document_date).format("MM/DD/YY")}/>
                </div>
                <div className="form-group">
                  <label>Recording Date:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={moment(record.recording_date).format("MM/DD/YY")}/>
                </div>
                {/* <div className="form-group">
                <label>Document Type:</label>
                <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.document_type}/>
              </div> */
                }
                <div className="form-group">
                  <label>Document Type:</label>
                  <textarea rows="1" cols="80" disabled={!this.props.isEditable
                      ? 'disabled'
                      : null} type="text" className="record-card-element" value={record.document_type}></textarea>

                </div>
                <div className="form-group">
                  <label>Title Company:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.title_company}/>
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
                      {record.parties.map((party,i) => <EditPartiesList key={i} party={party} isEditable={this.props.isEditable}/>)}
                    </tbody>
                  </table>
                  <a onClick={this.props.addEmptyParty} className={`btn btn-sm btn-outline-success ${ !this.props.isEditable
                      ? 'd-none'
                      : ''}`}>add</a>
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
                  {/* <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue="EA 117 1 3 R1 (3777m2)"/> */}

                  <textarea rows="2" cols="70" disabled={!this.props.isEditable
                      ? 'disabled'
                      : null} type="text" className="record-card-element" value={record.legal_description}/>
                </div>
                <div className="form-group">
                  <label>Street Address:</label>
                  {/* <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue="356 S. Marine Corps Dr., Tamuning, GU, 96913"/> */}

                  <textarea rows="2" cols="70" disabled={!this.props.isEditable
                      ? 'disabled'
                      : null} type="text" className="record-card-element" value={record.street_address}/>
                </div>

                <div className="form-group">
                  <label>Lot:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.lot}/>
                </div>
                <div className="form-group">
                  <label>Block:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.block}/>
                </div>
                <div className="form-group">
                  <label>Unit:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.unit}/>
                </div>
                <div className="form-group">
                  <label>Area:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.area}/>
                </div>
                <div className="form-group">
                  <label>Phase:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.phase}/>
                </div>
                <div className="form-group">
                  <label>Tract:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.tract}/>
                </div>
                <div className="form-group">
                  <label>Increment:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.increment}/>
                </div>
                <div className="form-group">
                  <label>Square Footage:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.square_footage}/>
                </div>
                <div className="form-group">
                  <label>Building Square Footage:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.building_square_footage}/>
                </div>
                <div className="form-group">
                  <label>Map Document:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.map_document}/>
                </div>
                <div className="form-group">
                  <label>Building Type:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.building_type}/>
                </div>
                <div className="form-group">
                  <label>Year Built:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.year_built}/>
                </div>
                <div className="form-group">
                  <label>Type of Construction:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.type_of_construction}/>
                </div>
                <div className="form-group">
                  <label>Building Condition:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.building_condition}/>
                </div>
                <div className="form-group">
                  <label>Municipality/Village:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.municipality}/>
                </div>
                <div className="form-group">
                  <label>Condominium:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.condominium}/>
                </div>
                <div className="form-group">
                  <label>Island:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.island}/>
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
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.amount}/>
                </div>
                <div className="form-group">
                  <label>Recording Fees$:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.recording_fees}/>
                </div>
                <div className="form-group">
                  <label>Land Tax $:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.land_tax}/>
                </div>
                <div className="form-group">
                  <label>Land Appraised Value $:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.land_appraised_value}/>
                </div>

                <div className="form-group">
                  <label>Building Appraised Value $:</label>
                  <input disabled={!this.props.isEditable} type="text" className="form-control-sm record-card-element" defaultValue={record.building_appraised_value}/>
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
                  <textarea rows="16" cols="120" disabled={!this.props.isEditable
                      ? 'disabled'
                      : null} type="text" className="record-card-element" value={record.remarks}></textarea>
                </div>

              </form>
            </small>
          </div>
        </div>
        {
          this.props.isEditable
            ? <RecordEditButtons/>
            : <button onClick={this.props.setIsEditable} type="button" className="btn btn-sm btn-outline-warning m-2">Edit</button>
        }

      </div>

    </div>)
  }
}

const mapStateToProps = ({records, auth}) => ({recordListing: records.recordListing, isEditable: auth.isEditable})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getOneRecord,
  editLocalRecord,
  setIsEditable,
  addEmptyParty
}, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecordView))
