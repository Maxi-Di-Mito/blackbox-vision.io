import rootReducer from '../reducers/combined.reducers'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'

import fetchContent from '../actions/content.actions'

const Logger = createLogger("log");
const store = createStore(rootReducer, applyMiddleware(thunk, Logger));

//Not recommended way, only done this for poc purpose
store.dispatch(fetchContent());

export default store;