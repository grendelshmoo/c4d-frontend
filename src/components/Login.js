import React from 'react'

const Login = () => {
  return (<div className="container p-4 m-2 mx-auto">
    <div className="row">
      <div className="col">
        <div className="card border-dark mb-3 mx-auto">
          <div className="card-body text-dark">
            <h2 className="card-title text-center">Login</h2>
            <form id='login-form'>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" name='email' id="login-email" aria-describedby="emailHelp" placeholder="Enter Email*"></input>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name='password' id="login-password" placeholder="Password*"></input>
              </div>
              <button type="submit" className="btn btn-danger">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default Login
