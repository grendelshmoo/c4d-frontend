import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setIsNotEditable} from '../actions/auth'


const EditButtons = ({setIsNotEditable}) => {
  return (
    <div>
    <button onClick={null} type="button" className="btn btn-warning m-2">Save</button>
    <button onClick={setIsNotEditable} type="button" className="btn btn-secondary m-2">Cancel</button>
    <button onClick={null} type="button" className="btn btn-danger m-2">Delete</button>
  </div>
  )

}

const mapDispatchToProps = (dispatch) => bindActionCreators({setIsNotEditable}, dispatch)
export default connect(null, mapDispatchToProps)(EditButtons)
