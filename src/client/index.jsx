import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../shared/reducers/combined_reducers'
import Application from '../shared/containers/Application.jsx'

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
		<Application />
    </Provider>,
    document.getElementById('app')
);