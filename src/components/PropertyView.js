import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getOneProperty, getPropertyRecords} from '../actions/properties'
import {setIsEditable} from '../actions/auth'
import {withRouter} from 'react-router-dom'
import PropertyRecordsList from './PropertyRecordsList'
// import {ListPropertyDocuments} from './ListPropertyDocuments'

// hook up to redux for property.*
// class component
// create component for list all docs. (ListPropertyDocuments)
// create component for chain of title

class PropertyView extends Component {

  componentDidMount = () => {
    const propertyId = this.props.match.params.id
    this.props.getOneProperty(propertyId)
    this.props.getPropertyRecords(propertyId)

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
            <form className="form record-card-form p-2 property-details">
              <div className="form-group">
                <label>Legal Description:</label>
                {/* <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="EA 117 1 3 R1 (3777m2)"/> */}
                <p>{property.legal_description}</p>
              </div>
              <div className="form-group">
                <label>Street Address:</label>
                {/* <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="356 S. Marine Corps Dr., Tamuning, GU, 96913"/> */}
                <p>
                  {property.street_address}</p>
              </div>

              <div className="form-group">
                <label>Lot:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.lot}/>
              </div>
              <div className="form-group">
                <label>Block:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.block}/>
              </div>
              <div className="form-group">
                <label>Unit:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.unit}/>
              </div>
              <div className="form-group">
                <label>Area:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.area}/>
              </div>
              <div className="form-group">
                <label>Phase:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.phase}/>
              </div>
              <div className="form-group">
                <label>Tract:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.tract}/>
              </div>
              <div className="form-group">
                <label>Increment:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.increment}/>
              </div>
              <div className="form-group">
                <label>Square Footage:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.square_footage}/>
              </div>
              <div className="form-group">
                <label>Building Square Footage:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.building_square_footage}/>
              </div>
              <div className="form-group">
                <label>Map Document:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.map_document}/>
              </div>
              <div className="form-group">
                <label>Building Type:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.building_type}/>
              </div>
              <div className="form-group">
                <label>Year Built:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.year_built}/>
              </div>
              <div className="form-group">
                <label>Type of Construction:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.type_of_construction}/>
              </div>
              <div className="form-group">
                <label>Building Condition:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.building_condition}/>
              </div>
              <div className="form-group">
                <label>Municipality/Village:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.municipality}/>
              </div>
              <div className="form-group">
                <label>Condominium:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.condominium}/>
              </div>
              <div className="form-group">
                <label>Island:</label>
                <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue={property.island}/>
              </div>

            </form>
          </small>

        </div>
        {/* Right Top Column - Map & Image */}
        <div className="col-5 p-1 text-center">
          <img className="plat-map-image" alt={property.map_document} src={`http://localhost:3000/images/${property.map_document}.jpg`}></img>

          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-secondary active">
              <input type="radio" name="options" id="option1" autoComplete="off"/>
              Plat
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option2" autoComplete="off"/>
              Street
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option3" autoComplete="off"/>
              Flood
            </label>
          </div>
        </div>
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
              <table className="table table-sm">
                <tbody>
                  <tr>
                    <td>
                      <span className="badge badge-pill badge-danger">High</span>
                    </td>
                    <td>Property has Easement.</td>
                    <td>666666</td>

                  </tr>
                  <tr>
                    <td>
                      <span className="badge badge-pill badge-warning">Med</span>
                    </td>
                    <td>Notice of unpaid Taxes.</td>
                    <td>111111</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="badge badge-pill badge-info">Low</span>
                    </td>
                    <td>Current owner(s) have no mailing address on file.</td>
                    <td>999999</td>
                  </tr>
                </tbody>
              </table>
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
                <tbody>
                  <tr>
                    <td>11/6/2017</td>
                    <td>Kim Anderson</td>
                    <td>xxxxxxx</td>

                  </tr>
                  <tr>
                    <td>1/16/2014</td>
                    <td>Ron Young</td>
                    <td>xxxxxxx</td>

                  </tr>
                  <tr>
                    <td>3/24/1998</td>
                    <td>Scott Jamison</td>
                    <td>xxxxxxx</td>

                  </tr>
                  <tr>
                    <td>5/6/1975</td>
                    <td>Ellen Jones</td>
                    <td>xxxxxxx</td>

                  </tr>
                  <tr>
                    <td>7/16/1962</td>
                    <td>John Doe, Jane Doe</td>
                    <td>xxxxxxx</td>

                  </tr>
                </tbody>
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
            <table className="table">
              <thead className="thead bg-dark text-light">
                <tr>
                  <th scope="col">Record</th>
                  <th scope="col">Doc. Date</th>
                  <th scope="col">Doc. Type</th>
                  <th scope="col">Parties</th>
                  <th scope="col">Legal Description</th>
                </tr>
              </thead>
              <PropertyRecordsList />
              {/* <tbody>

                <tr>
                  <th scope="row">111111</th>
                  <td>6/24/99</td>
                  <td>Deed</td>
                  <td>names, names</td>
                  <td>EA 117 1 3 R1 (3777m2)</td>
                </tr>
                <tr>
                  <th scope="row">111111</th>
                  <td>6/24/99</td>
                  <td>Deed</td>
                  <td>names, names</td>
                  <td>EA 117 1 3 R1 (3777m2)</td>
                </tr>
                <tr>
                  <th scope="row">111111</th>
                  <td>6/24/99</td>
                  <td>Deed</td>
                  <td>names, names</td>
                  <td>EA 117 1 3 R1 (3777m2)</td>
                </tr>
                <tr>
                  <th scope="row">111111</th>
                  <td>6/24/99</td>
                  <td>Deed</td>
                  <td>names, names</td>
                  <td>EA 117 1 3 R1 (3777m2)</td>
                </tr>

              </tbody> */}
            </table>
          </small>
        </div>
      </div>
    </div>)
  }
}

const mapStateToProps = ({properties, auth}) => ({
  propertyListing: properties.propertyListing,
  isEditable: auth.isEditable
})
const mapDispatchToProps = (dispatch) => bindActionCreators({getOneProperty, getPropertyRecords, setIsEditable}, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PropertyView))
