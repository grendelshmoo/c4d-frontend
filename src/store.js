import { applyMiddleware, createStore, combineReducers } from 'redux'
import auth from './reducers/auth'
import records from './reducers/records'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

const reducers = combineReducers({ auth, records })

export default(initialState) => {
    return createStore(
      reducers,
      applyMiddleware(thunkMiddleware, logger)
    )
}
