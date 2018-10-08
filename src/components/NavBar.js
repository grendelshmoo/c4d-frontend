import React from 'react'
import AuthenticatedButtons from './AuthenticatedButtons'
import {Link} from 'react-router-dom'
// import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// import { logIn } from '../actions/auth'


const NavBar = ({ isLoggedIn }) => {
  return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/dashboard">
      <img id="navbarlogo" alt="TitleBase" src="/images/titlebase_logo.png"></img>
    </Link>
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
