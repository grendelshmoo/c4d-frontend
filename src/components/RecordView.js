import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getOneRecord} from '../actions/records'
import {setIsEditable} from '../actions/auth'
import {withRouter} from 'react-router-dom'
// import axios from 'axios'
import moment from 'moment'
import RecordPartiesList from './RecordPartiesList'
import EditButtons from './EditButtons'
// const BASE_URL = `http://localhost:5000`

// {match, ...state, editStatus, changeEditStatus}
class RecordView extends Component {
  // constructor(props) {
  //   super(props)
  //   // this.state = {
  //   //   record: {
  //   //     parties: []
  //   //   }
  //   // }
  // }

  componentDidMount = async (props) => {
    //call the getOneRecord Action here.
    const recordId = this.props.match.params.id
    // this.props.getOneRecord(this.props.recordId)
    this.props.getOneRecord(recordId)



    //this.props.match.params.id passed in from withRouter

    // console.log('RECORD ID:', this.props.match.params.id)
    // try {
    //   axios(`${BASE_URL}/api/records/${this.props.match.params.id}`, {
    //     headers: {
    //       authorization: `Bearer ${localStorage.getItem('c4d')}`
    //     },
    //     method: 'GET'
    //   }).then(response => this.setState({record: response.data.data}))
    // } catch (e) {
    //   console.error(e.response)
    //   return false
    // }
  }

  render() {
    const record = this.props.recordListing
    console.log(this.props.isEditable);
    return (<div className="container-fluid ">
      <div className="row p-3">
        <label>
          <h5>Record Details:</h5>
        </label>
      </div>
      {/* General Group */}
      <div className="row">
        <div id="general-record" className="col m-1 p-1">
          <form className="form">

            <div className="form-group form-row m-2 p-2">
              <label>Record #:</label>
              <input disabled="disabled" id="" className="form-control form-control-sm testfield" type="text" aria-label="Search" defaultValue={record.record_number}></input>
            </div>
            <div className="form-group form-row m-2 p-2">
              <label>Document Date:</label>
              <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={moment(record.document_date).format("MM/DD/YY")}></input>
            </div>
            <div className="form-group form-row m-2 p-2">
              <label>Recording Date:</label>
              <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={moment(record.recording_date).format("MM/DD/YY")}></input>
            </div>
            <div className="form-group form-row m-2 p-2">
              <label>Document Type:</label>
              <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.document_type}></input>
            </div>
            <div className="form-group form-row m-2 p-2">
              <label>Title Company:</label>
              <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.title_company}></input>
            </div>
          </form>

        </div>
      </div>
      {/* Parties Group */}
      <div className="row">
        <div id="parties-record" className="col m-1 p-1">
          {record.parties.map((party, i) => <RecordPartiesList key={i} party={party}/>)}

        </div>
      </div>
      {/* Property Group  */}
      <div className="row">
        <div id="property-record" className="col m-1 p-1">
          <div className="form-group form-row m-2 p-2">
            <label>Legal Description:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.legal_description}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Lot:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.lot}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Block:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.block}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Unit:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.unit}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Area:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.area}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Phase:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.phase}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Tract:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.tract}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Increment:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.increment}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Square Footage:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.square_footage}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Building Square Footage:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.building_square_footage}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Map Document:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.map_document}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Building type:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.building_type}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Year Built:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.year_built}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Type of Construction:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.type_of_construction}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Building Condition:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.building_condition}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Municipality/Village:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.municipality}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Condominium:</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.condominium}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Island</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.island}></input>
          </div>

        </div>
      </div>
      {/* Transaction Group  */}
      <div className="row">
        <div id="transaction-record" className="col m-1 p-1">
          <div className="form-group form-row m-2 p-2">
            <label>Amount $</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.amount}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Recording Fees $</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.recording_fees}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Land Tax $</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.land_tax}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Land Appraised Value $</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.land_appraised_value}></input>
          </div>
          <div className="form-group form-row m-2 p-2">
            <label>Building Appraised Value $</label>
            <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.building_appraised_value}></input>
          </div>

        </div>
      </div>
      {/* Remarks Group  */}
      <div className="row">
        <div id="parties-record" className="col m-1 p-1">
          <div className="form-group form-row m-2 p-2">
            <label>Remarks / Comments:</label>
            {/* <input disabled={!this.props.isEditable} id="" className="form-control form-control-sm testfield" type="text" aria-label="" defaultValue={record.remarks}></input> */}
            <textarea disabled={!this.props.isEditable} className="form-control form-control-sm testfield" rows="4" placeholder={record.remarks}></textarea>
          </div>

        </div>
      </div>


      {
        this.props.isEditable
          ? <EditButtons />
          : <button onClick={this.props.setIsEditable} type="button" className="btn btn-success m-2">Edit</button>
      }

    </div>)
  }
}
//withRouter in order to get this.props.match.params.id
const mapStateToProps = ({records, auth}) => ({
  recordListing: records.recordListing,
  isEditable: auth.isEditable
})
const mapDispatchToProps = (dispatch) => bindActionCreators({getOneRecord, setIsEditable}, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecordView))
