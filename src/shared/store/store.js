import rootReducer from '../../shared/reducers/combined_reducers'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'

import fetchTranslations from '../actions/translate_actions'
import fetchContent from '../actions/content_actions'

const Logger = createLogger("log");
const store = createStore(rootReducer, applyMiddleware(thunk, Logger));

store.dispatch(fetchContent());
store.dispatch(fetchTranslations());

export default store;