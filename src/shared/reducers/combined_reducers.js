import translationReducer from '../reducers/translation_reducer';
import contentReducer from '../reducers/content_reducer';
import { combineReducers } from 'redux';

//Here we will import and combine all the reducers we define 
export default combineReducers({ translationReducer, contentReducer });