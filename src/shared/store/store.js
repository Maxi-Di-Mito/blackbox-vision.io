import rootReducer from '../reducers/combined.reducers'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'

const Logger = createLogger("log");
const store = createStore(rootReducer, applyMiddleware(thunk, Logger));

export default store;