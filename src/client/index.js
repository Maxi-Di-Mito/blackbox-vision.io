import 'babel-polyfill';
import 'react-mdl/extra/material.min'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from '../shared/module/main/Routes.js';
import Router from 'react-router/lib/Router';
import { applyRouterMiddleware, browserHistory } from 'react-router';
import configureStore from '../shared/module/main/store/configureStore';
import useScroll from 'react-router-scroll';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore(window.__INITIAL_STATE__);
const history = browserHistory;
const dest = document.getElementById('app');

injectTapEventPlugin();

const hashLinkScroll = () => {
    const { hash } = window.location;
    if (hash !== '') {
        // Push onto callback queue so it runs after the DOM is updated,
        // this is required when navigating from a different page so that
        // the element is rendered on the page before trying to getElementById.
        setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({block: "end", behavior: "smooth"});
        }, 0);
    }
};


ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} onUpdate={hashLinkScroll} render={applyRouterMiddleware(useScroll())}/>
    </Provider>,
    dest
);

//import { install } from 'offline-plugin/runtime';
//install();