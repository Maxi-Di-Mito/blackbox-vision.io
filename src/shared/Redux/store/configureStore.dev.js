import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import rootReducer from '../reducers/reducer';

//TODO JS: Add dev dependencies
export default function configureStore(initialState = {}) {
    const enhancer = applyMiddleware(thunk);

    return createStore(() => {}, initialState, enhancer);
}