import React from 'react'
// import { Link } from 'react-router-dom'
import AuthenticatedButtons from './AuthenticatedButtons'

const NavBar = ({ isLoggedIn, logout}) => {
  return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="">
      <img id="c4dlogo" alt="C4D" src="./images/c4d_logo.png"></img>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  {
    isLoggedIn ?
    <AuthenticatedButtons logout={ logout }/>
    : ""

  }
  </nav>)
}

export default NavBar
