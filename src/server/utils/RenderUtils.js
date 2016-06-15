import configureStore from '../../shared/Redux/store/configureStore';
import { renderToString } from 'react-dom/server';
import App from '../../shared/Application.jsx';
import { Provider } from 'react-redux';
import cache from 'memory-cache';
import React from 'react';

const renderApp = () => {
    let store = configureStore();
    let html = cache.get('html');
    let initialState = cache.get('initialState');

    if (!html && !initialState) {
        html = renderToString(
            <Provider store={store}>
                <App/>
            </Provider>
        );

        initialState = JSON.stringify(store.getState());

        cache.put('html', html);
        cache.put('initialState', initialState);
    }
    
    return (`
    <!doctype html>
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="keywords" content="blackbox, vision, blackboxvision, blackbox-vision, material design, web, mobile, design and development">
                <meta name="author" content="Alan Vaudagna, Federico Catinello, Jonatan Salas">
                <meta name="description" content="Blackbox Vision is a group of enthusiastic designers and developers with remarkable skills on different modern growing technologies. Our main focus is the interaction with the client and making solutions according to their needs.">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>BlackBox Vision | Mobile and Web Software Factory</title>

                <link rel="shortcut icon" type="image/png" href="assets/images/blackbox_vision.ico"/>
                <link rel="stylesheet" href="dist/bundle.css"/>
            </head>
            <body>
                <div id="app">${html}</div>
                <script rel="script" type="text/javascript">window.__INITIAL_STATE__ = ${initialState};</script>
                <script rel="script" type="text/javascript" src="dist/bundle.js"></script>
            </body>
    </html>
    `);
};

export default renderApp;