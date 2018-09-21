import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {keywordSearch} from '../actions/records'
// import SearchResults from './SearchResults'
// import axios from 'axios'
// const BASE_URL = `http://localhost:5000`


// async function grantorSearch(event, cb) {
//   event.preventDefault()
//   try {
//     // console.log(event.target['grantor-search'].value)
//     axios(`${BASE_URL}/api/records/search?grantor=${event.target['grantor-search'].value}`, {
//       headers: {
//         authorization: `Bearer ${localStorage.getItem('c4d')}`
//       },
//       method: 'GET'
//     }).then(response => cb(response))
//   } catch (e) {
//     console.error(e.response)
//     return false
//   }
//
// }

const SearchField = ({keywordSearch}) => {
  return (
    <div className="row p-2 m-2">
    <div className="col-5 bg-dark text-light p-3">
    <span>
      Keyword / Fulltext Search
    </span>
    <form onSubmit={ (e) => {
      e.preventDefault()
      keywordSearch(e.target.searchfield.value)
      }} className="form-inline md-form form-sm m-2 p-2">
      <i className="fa fa-search" aria-hidden="true"></i>
      <input id="searchfield" className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" name="keyword-search"></input>
    </form>

  </div>
  <div className="col-7 bg-dark text-light p-3">

    <span>
      Advanced Search
    </span>
    <form className="form-inline md-form form-sm m-2 p-2">

      <input onSubmit={null} id="searchfield" className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Grantor" aria-label="Search"></input>
      <input id="searchfield" className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Grantee" aria-label="Search"></input>

      {/* <div className="form-group">
            <label >Start Date </label>
            <input type="date" name="bday" max="3000-12-31" min="1000-01-01" className="form-control p-2 m-2"></input>
          </div>

          <div className="form-group">
            <label >End Date </label>
            <input type="date" name="bday" min="1000-01-01" max="3000-12-31" className="form-control p-2 m-2"></input>
          </div> */
      }

    </form>

  </div>
</div>
)
}

const mapDispatchToProps = (dispatch) => bindActionCreators({keywordSearch}, dispatch)
export default connect(null, mapDispatchToProps)(SearchField)
