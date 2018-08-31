import React from 'react'

const SearchField = () => {
  return (<div className="container-fluid">
    <div className="row p-2 m-2">
      <div className="col-5 bg-dark text-light p-3">

        <span>
          Keyword / Fulltext Search
        </span>
        <form className="form-inline md-form form-sm m-2 p-2">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input id="searchfield" className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"></input>
        </form>

      </div>
      <div className="col-7 bg-dark text-light p-3">

        <span>
          Advanced Search
        </span>
        <form className="form-inline md-form form-sm m-2 p-2">

          <input id="searchfield" className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Grantor" aria-label="Search"></input>
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
  </div>)
}

export default SearchField
