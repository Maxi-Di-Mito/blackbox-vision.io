import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from  '../shared/MainApp/store/store'
import Application from '../shared/MainApp/containers/Application.jsx'

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('app')
);