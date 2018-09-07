import React from 'react'


const EditButtons = (changeEditStatus) => {
  return (
    <div>
    <button onClick={changeEditStatus} type="button" className="btn btn-warning m-2">Save</button>
    <button onClick={changeEditStatus} type="button" className="btn btn-secondary m-2">Cancel</button>
    <button type="button" className="btn btn-danger m-2">Delete</button>
  </div>
  )

}

export default EditButtons
