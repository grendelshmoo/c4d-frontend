import React, {Component} from 'react';
// import ReactDOM from 'react-dom'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import AuthenticatedRoute from './components/helpers/AuthenticatedRoute'
import auth from './lib/auth'
import NavBar from './components/NavBar';
// import SearchField from './components/SearchField';
import Login from './components/Login';
import HomeView from './components/HomeView'
// import SearchResults from './components/SearchResults';


class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      searchResults: { data: { data: [] } }
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

  updateResults = (response) => {
    this.setState({searchResults: response})
  }

  render() {
    return (<main>
      <NavBar isLoggedIn={this.state.isLoggedIn} logout={this.logout}/>
      <section className="container">
        <Switch>
          <AuthenticatedRoute exact path="/records" { ...this.state } searchResults={this.state.searchResults.data} updateResults={this.updateResults} component={HomeView}/>
          <Route exact path="/login" render={() => {
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
