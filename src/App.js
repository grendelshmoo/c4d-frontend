import React from 'react';
// import ReactDOM from 'react-dom'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import AuthenticatedRoute from './components/helpers/AuthenticatedRoute'
import NavBar from './components/NavBar';
import Login from './components/Login';
import HomeView from './components/HomeView'
import RecordView from './components/RecordView'
import ContactView from './components/ContactView'
import PropertySearch from './components/PropertySearch'
import PropertyView from './components/PropertyView'
import PropertyMapView from './components/PropertyMapView'
import {connect} from 'react-redux'


const App = ({isLoggedIn, verifyLogin}) => {
  return (<main>
    <NavBar/>
    <section className="container">
      <Switch>

        <AuthenticatedRoute exact={true} path="/dashboard" component={PropertyMapView}/>
        <AuthenticatedRoute exact={true} path="/records" component={HomeView}/>

        <AuthenticatedRoute exact={true} path="/records/:id" component={RecordView}/>
        <AuthenticatedRoute exact={true} path="/contacts" component={ContactView}/>
        <AuthenticatedRoute exact={true} path="/properties" component={PropertySearch}/>
        <AuthenticatedRoute exact={true} path="/properties/:id" component={PropertyView}/>

        <Route exact={true} path="/login" render={({location}) => {
            const previous = location.state && location.state.from.pathname
            if (isLoggedIn)
              return <Redirect to={previous || "/records"}/>
            return <Login/>
          }}/>
        <Redirect to="/login"/>
      </Switch>

    </section>
  </main>)
  // }

}

const mapStateToProps = ({auth}) => ({isLoggedIn: auth.isLoggedIn})
export default connect(mapStateToProps, null)(App)
