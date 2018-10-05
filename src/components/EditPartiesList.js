import React from 'react'

const EditPartiesList = ({party, isEditable}) => {

  const rows = (
    <tr>
      <td><input disabled={!isEditable} type="text" className="form-control-sm record-card-element" defaultValue={party.role}/></td>
      <td><input disabled={!isEditable} type="text" className="form-control-sm record-card-element" defaultValue={party.last_name}/></td>
      <td><input disabled={!isEditable}  type="text" className="form-control-sm record-card-element" defaultValue={party.first_name}/></td>
      <td><textarea rows="2" cols="40" disabled={!isEditable ? 'disabled' : null}  type="text" className="record-card-element" defaultValue={party.mailing_address}/></td>
      <td><a href={null} onClick={() => {console.log(party.contact_id);}} className={`badge badge-danger text-light ${!isEditable ? 'd-none' : ''}`}>remove</a></td>
    </tr>
  )
return rows
}

export default EditPartiesList
