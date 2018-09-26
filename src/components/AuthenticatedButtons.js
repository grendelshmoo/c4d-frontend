import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {logOut} from '../actions/auth'

const AuthenticatedButtons = ({ logOut }) => {
  return (
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/records">Records

          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/properties">Properties</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="">Add</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="/contacts">Contacts</a>
        </li>
      </ul>
      <span className="navbar-text">
      <div className="dropdown show">
          <a className="btn btn-outline-danger dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-user-cog"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right bg-dark m-2" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item bg-dark" href="">Preferences...</a>
            <div className="dropdown-divider"></div>
            <a onClick={ logOut } className="dropdown-item bg-dark" href="">Logout</a>
          </div>
        </div>
      </span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({logOut}, dispatch)
export default connect(null, mapDispatchToProps)(AuthenticatedButtons)
