import 'material-design-lite/material';

import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux/lib/components/Provider';
import routes from '../shared/Router/Routes.jsx';
import Application from '../shared/Application.jsx';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory'
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