import React from 'react'
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
// import {keywordSearch} from '../actions/records'

const PropertySearch = () => {
  return (
  <div className="row p-2 m-2">
    <div className="col bg-dark text-light text-center p-3">
    <span>
      Property Search
    </span>
    <form onSubmit={null} className="form-inline md-form form-sm m-2 p-2">
      <i className="fa fa-search" aria-hidden="true"></i>
      <input id="searchfield" className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" name="keyword-search"></input>
    </form>
  </div>
</div>
)
}

// const mapDispatchToProps = (dispatch) => bindActionCreators({records}, dispatch)
// export default connect(null, mapDispatchToProps)(PropertySearch)
export default PropertySearch
