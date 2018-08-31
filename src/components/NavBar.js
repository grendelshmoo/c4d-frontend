import React from 'react'

const NavBar = () => {
  return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="">
      <img id="c4dlogo" alt="C4D" src="./images/c4d_logo.png"></img>
    </a>

    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Records
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Add</a>
        </li>
      </ul>

      <span className="navbar-text">
      <div className="dropdown show">
          <a className="btn btn-outline-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-user-cog"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right bg-dark m-2" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item bg-dark" href="#">Preferences...</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item bg-dark" href="#">Logout</a>
          </div>
        </div>
      </span>
    </div> */}

  </nav>)
}

export default NavBar
