import React from 'react'

const AuthenticatedButtons = ({ logout }) => {
  return (
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="">Records
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Add</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Contacts</a>
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
            <a onClick={ logout } className="dropdown-item bg-dark" href="">Logout</a>
          </div>
        </div>
      </span>
    </div>
  )

}

export default AuthenticatedButtons
