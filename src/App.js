import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import AuthenticatedRoute from './components/helpers/AuthenticatedRoute'
import auth from './lib/auth'
import NavBar from './components/NavBar';
import SearchField from './components/SearchField';
import Login from './components/Login';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  componentDidMount = async () => {
    const isLoggedIn = await auth.verify()
    this.setState({isLoggedIn})
  }

  updateLoggedInStatus = (isLoggedIn) => {
    this.setState({isLoggedIn})
  }

  logout = () => {
    auth.logout()
    this.updateLoggedInStatus(false)
  }

  render() {
    return (<main>
      <NavBar isLoggedIn={this.state.isLoggedIn} logout={this.logout}/>
      <section className="container">
        <Switch>
          <AuthenticatedRoute exact="exact" path="/records" { ...this.state } component={SearchField}/>
          <Route exact="exact" path="/login" render={() => {
              if (this.state.isLoggedIn)
                return <Redirect to="/records"/>
              return <Login updateLoggedInStatus={this.updateLoggedInStatus}/>
            }}/>
          <Redirect to="/login"/>
        </Switch>

      </section>
    </main>)
  }

}

export default App;
