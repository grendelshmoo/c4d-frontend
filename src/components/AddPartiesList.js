import React from 'react'

const AddPartiesList = ({index, party, editLocalParty}) => {

  const rows = (
    <tr>
      <td><input onChange={(e) => {
          editLocalParty(index, "role", e.target.value)
        }}  type="text" className="form-control-sm record-card-element"/></td>
      <td><input onChange={(e) => {
          editLocalParty(index, "last_name", e.target.value)
        }}  type="text" className="form-control-sm record-card-element"/></td>
      <td><input onChange={(e) => {
          editLocalParty(index, "first_name", e.target.value)
        }}   type="text" className="form-control-sm record-card-element"/></td>
      <td><textarea onChange={(e) => {
          editLocalParty(index, "mailing_address", e.target.value)
        }} rows="2" cols="40"  type="text" className="record-card-element"/></td>
      <td></td>
    </tr>
  )
return rows
}

export default AddPartiesList
