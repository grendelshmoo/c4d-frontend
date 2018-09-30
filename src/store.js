import { applyMiddleware, createStore, combineReducers } from 'redux'
import auth from './reducers/auth'
import records from './reducers/records'
import properties from './reducers/properties'
import maps from './reducers/maps'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

const reducers = combineReducers({ auth, records, properties, maps })

export default(initialState) => {
    return createStore(
      reducers,
      applyMiddleware(thunkMiddleware, logger)
    )
}
