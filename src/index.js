import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router>
  <Switch>
    <Route path="/" component={App}/>
  </Switch>
</Router>, document.getElementById('root'));
registerServiceWorker();