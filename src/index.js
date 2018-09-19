import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from './App';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {verifyLogin} from './actions/auth'
// import {dispatch} from 'redux'
const initialStore = store()
initialStore.dispatch(verifyLogin())

ReactDOM.render(<Provider store={initialStore}>
  <Router>
    <Switch>
      <Route path="/" component={App}/>
    </Switch>
  </Router>
</Provider>, document.getElementById('root'))

// ReactDOM.render(<Router>
//   <Switch>
//     <Route path="/" component={App}/>
//   </Switch>
// </Router>, document.getElementById('root'));

registerServiceWorker();
