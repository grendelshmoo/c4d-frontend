import React, {Component} from 'react'
import PropertiesList from './PropertiesList'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllProperties, propertySearch} from '../actions/properties'

class PropertySearch extends Component {

  componentDidMount = () => {
    this.props.getAllProperties()
  }

  render() {
    return (<div className="container-fluid">
      <div className="row p-2 m-2">
        <div className="col bg-dark text-light text-center p-3">
          <span>
            Property Search
          </span>
          <form onSubmit={(e) => {
              e.preventDefault()
              this.props.propertySearch(e.target.searchfield.value)
            }} className="form-inline md-form form-sm m-2 p-2">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input id="searchfield" className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" name="keyword-search"></input>
            <Link className="btn btn-sm btn-outline-danger m-3" to="/properties/add" role="button">Add Property</Link>
          </form>

        </div>
      </div>

      <div className="row p-3">
        <div className="col container-fluid text-center">
          <small>
            <table className="table table-striped">
              <thead className="thead bg-dark text-light">
                <tr>
                  <th scope="col">Legal Description</th>
                  <th scope="col">Street Address</th>
                  <th scope="col">Building Type</th>
                  <th scope="col">Municipality/Village</th>
                  <th scope="col">Island</th>
                </tr>
              </thead>

              <PropertiesList/>

            </table>
          </small>
        </div>
      </div>
    </div>)
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllProperties, propertySearch
}, dispatch)
export default connect(null, mapDispatchToProps)(PropertySearch)
