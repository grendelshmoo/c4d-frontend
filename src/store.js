import { applyMiddleware, createStore, combineReducers } from 'redux'
import auth from './reducers/auth'
import records from './reducers/records'
import properties from './reducers/properties'
import contacts from './reducers/contacts'
import maps from './reducers/maps'
import dashboard from './reducers/dashboard'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

const reducers = combineReducers({ auth, records, properties, contacts, maps, dashboard })

export default(initialState) => {
    return createStore(
      reducers,
      applyMiddleware(thunkMiddleware, logger)
    )
}
