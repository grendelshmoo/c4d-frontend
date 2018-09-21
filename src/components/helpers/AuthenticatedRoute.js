import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

const AuthenticatedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={ props => {
      // console.log('AUTHENTICATED ROUTE:', props)
      return isLoggedIn ? (
        <Component { ...props } />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }

    }
  />
);

const mapStateToProps = ({auth}) => ({ isLoggedIn: auth.isLoggedIn })
export default connect(mapStateToProps, null)(AuthenticatedRoute)
