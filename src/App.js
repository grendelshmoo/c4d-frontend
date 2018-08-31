import React, { Component } from 'react';
import './App.css';
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
