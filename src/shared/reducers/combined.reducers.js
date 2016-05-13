
import contentReducer from '../reducers/content.reducer';
import { combineReducers } from 'redux';

//Here we will import and combine all the reducers we define 
export default combineReducers({ contentReducer });