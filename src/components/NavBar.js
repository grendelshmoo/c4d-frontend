import React from 'react'
// import { Link } from 'react-router-dom'
import AuthenticatedButtons from './AuthenticatedButtons'
// import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// import { logIn } from '../actions/auth'

const NavBar = ({ isLoggedIn }) => {
  return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">
      <img id="navbarlogo" alt="TitleBase" src="http://localhost:3000/images/titlebase_logo.png"></img>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  {
    isLoggedIn ?
    <AuthenticatedButtons />
    : ""
  }
  </nav>)
}

const mapStateToProps = ({auth}) => ({
    isLoggedIn: auth.isLoggedIn })
// const mapDispatchToProps = (dispatch) => (bindActionCreators({logIn, logOut, setIsEditable, setIsNotEditable, }), dispatch)
export default connect(mapStateToProps, null)(NavBar)
