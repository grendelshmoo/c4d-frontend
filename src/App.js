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
import RecordView from './components/RecordView'
import ContactView from './components/ContactView'
// import SearchResults from './components/SearchResults';


class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      searchResults: { data: { data: [] } },
      editStatus: false,
      activeRecord: 0
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

  changeEditStatus = () => {
    if (this.state.editStatus===false) { this.setState({editStatus: true }) } else {this.setState({editStatus: false })}

  }

  setActiveRecord = (input) => {
    this.setState({activeRecord: input})
  }

  render() {

    return (<main>
      <NavBar isLoggedIn={this.state.isLoggedIn} logout={this.logout}/>
      <section className="container">
        <Switch>
          <AuthenticatedRoute exact path="/records" { ...this.state } setActiveRecord={this.setActiveRecord} searchResults={this.state.searchResults.data} updateResults={this.updateResults} component={HomeView}/>
          <AuthenticatedRoute exact path="/records/:id" { ... this.state } changeEditStatus={this.changeEditStatus} isEditable={this.state.editStatus} component={RecordView} />
          <AuthenticatedRoute exact path="/contacts" { ...this.state }    component={ContactView}/>
          <Route exact path="/login" render={({ location }) => {
              const previous = location.state && location.state.from.pathname
              if (this.state.isLoggedIn)
                return <Redirect to={ previous || "/records" }/>
              return <Login updateLoggedInStatus={this.updateLoggedInStatus}/>
            }}/>

          <Redirect to="/login"/>
        </Switch>

      </section>
    </main>)
  }

}

export default App;
