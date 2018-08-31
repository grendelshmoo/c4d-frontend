import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import SearchField from './components/SearchField';
import Login from './components/Login';

class App extends Component {
  render() {
   return (
     <div>
     <NavBar/>
     {/* <SearchField/> */}
     <Login/>

     </div>
   )
  }
}

export default App;
