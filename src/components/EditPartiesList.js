import React from 'react'

const EditPartiesList = ({index, party, recordId, isEditable, editLocalParty, removeParty}) => {

  const rows = (
    <tr>
      <td><input onChange={(e) => {
          editLocalParty(index, "role", e.target.value)
        }} disabled={!isEditable} type="text" className="form-control-sm record-card-element" defaultValue={party.role}/></td>
      <td><input onChange={(e) => {
          editLocalParty(index, "last_name", e.target.value)
        }} disabled={!isEditable} type="text" className="form-control-sm record-card-element" defaultValue={party.last_name}/></td>
      <td><input onChange={(e) => {
          editLocalParty(index, "first_name", e.target.value)
        }} disabled={!isEditable}  type="text" className="form-control-sm record-card-element" defaultValue={party.first_name}/></td>
      <td><textarea onChange={(e) => {
          editLocalParty(index, "mailing_address", e.target.value)
        }} rows="2" cols="40" disabled={!isEditable ? 'disabled' : null}  type="text" className="record-card-element" defaultValue={party.mailing_address}/></td>
      <td><a href={null} onClick={() => {removeParty(party);}} className={`badge badge-danger text-light ${!isEditable ? 'd-none' : ''}`}>remove</a></td>
    </tr>
  )
return rows
}

export default EditPartiesList
