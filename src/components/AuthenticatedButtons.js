import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {logOut} from '../actions/auth'
import {withRouter, Link} from 'react-router-dom'

const AuthenticatedButtons = ({logOut, location}) => {
let path = ""
  if (location.state && location.state.from.pathname) {

    const fullPath = location.state.from.pathname
    if (fullPath.includes('records')) {
      path = 'records'
    } else if (fullPath.includes('properties')) {
      path = 'properties'
    } else if (fullPath.includes('contacts')) {
      path = 'contacts'
    }

  }
  return (<div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className={`nav-item `}>
        <Link className="nav-link" to={'/records'}> Records </Link>
      </li>
      <li className={`nav-item `}>
        <Link className="nav-link" to={'/properties'}> Properties </Link>
      </li>
      {/* <li className="nav-item">
          <a className="nav-link" href="">Add</a>
        </li> */
      }
      <li className={`nav-item `}>
        <Link className="nav-link" to={'/contacts'}> Contacts </Link>
      </li>
    </ul>
    <div className="text-light m-2 p-3">Craig F.</div>
    <span className="navbar-text">
      <div className="dropdown show">
        <a className="btn btn-outline-danger dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-user-cog"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-right bg-dark m-2" aria-labelledby="dropdownMenuLink">
          <Link className="dropdown-item bg-dark" to="">Preferences...</Link>
          <div className="dropdown-divider"></div>
          <Link onClick={logOut} className="dropdown-item bg-dark" to="">Logout</Link>
        </div>
      </div>
    </span>
  </div>)
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logOut
}, dispatch)
export default withRouter(connect(null, mapDispatchToProps)(AuthenticatedButtons))
