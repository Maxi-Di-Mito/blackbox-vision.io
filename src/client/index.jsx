import 'material-design-lite/material';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from '../shared/Router/Routes.jsx';
import Application from '../shared/Application.jsx';
import { Router, browserHistory } from 'react-router';
import configureStore from '../shared/Redux/store/configureStore';

const store = configureStore(window.__INITIAL_STATE__);
const history = browserHistory;
const dest = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    dest
);