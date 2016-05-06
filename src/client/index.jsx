import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../shared/reducers'
import CMSPoc from '../shared/containers/CMSPoc'

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
		<CMSPoc/>
    </Provider>,
    document.getElementById('app')
);