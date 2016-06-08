import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Application from '../shared/Application.jsx'
import { configureStore } from '../shared/Redux/store/configureStore';

const store = configureStore(window.__INITIAL_STATE__);

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('app')
);