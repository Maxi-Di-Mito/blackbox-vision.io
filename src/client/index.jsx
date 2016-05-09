import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../shared/reducers/combined_reducers'
import LocaleLinks from '../shared/components/LocaleLinks.jsx'

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
		<LocaleLinks />
    </Provider>,
    document.getElementById('app')
);