import React from 'react'

const PropertyView = () => {
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
              <p>EA 117 1 3 R1 (3777m2)</p>
            </div>
            <div className="form-group">
              <label>Street Address:</label>
              {/* <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="356 S. Marine Corps Dr., Tamuning, GU, 96913"/> */}
              <p> 356 S. Marine Corps Dr., Tamuning, GU, 96913</p>
            </div>

            <div className="form-group">
              <label>Lot:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="7032-3-5"/>
            </div>
            <div className="form-group">
              <label>Block:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="30"/>
            </div>
            <div className="form-group">
              <label>Unit:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="205B"/>
            </div>
            <div className="form-group">
              <label>Area:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="27197.52 sq/ft"/>
            </div>
            <div className="form-group">
              <label>Phase:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="1"/>
            </div>
            <div className="form-group">
              <label>Tract:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="24403"/>
            </div>
            <div className="form-group">
              <label>Increment:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="5"/>
            </div>
            <div className="form-group">
              <label>Square Footage:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="25000 sq/ft"/>
            </div>
            <div className="form-group">
              <label>Building Square Footage:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="2000 sq/ft"/>
            </div>
            <div className="form-group">
              <label>Map Document:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="1555234"/>
            </div>
            <div className="form-group">
              <label>Building Type:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="Residential"/>
            </div>
            <div className="form-group">
              <label>Year Built:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="1962"/>
            </div>
            <div className="form-group">
              <label>Type of Construction:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="DWELL/ICP"/>
            </div>
            <div className="form-group">
              <label>Building Condition:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="Fair"/>
            </div>
            <div className="form-group">
              <label>Municipality/Village:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="Tamuning"/>
            </div>
            <div className="form-group">
              <label>Condominium:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="None"/>
            </div>
            <div className="form-group">
              <label>Island:</label>
              <input disabled="disabled" type="text" className="form-control-sm record-card-element" defaultValue="Guam"/>
            </div>

          </form>
        </small>

      </div>
      {/* Right Top Column - Map & Image */}
      <div className="col-5 p-1 text-center">
        <img alt="plat-map" src="http://localhost:3000/images/plat-map.jpg"></img>

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
    <hr className=""/>
    {/* <h5>Documents</h5> */}
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
            <tbody>
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

            </tbody>
          </table>
        </small>
      </div>
    </div>
  </div>)
}

export default PropertyView
