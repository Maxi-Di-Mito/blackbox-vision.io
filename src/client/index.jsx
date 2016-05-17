import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from  '../shared/store/store'
import Application from '../shared/containers/Application.jsx'

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('app')
);