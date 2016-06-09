import configureStore from '../../shared/Redux/store/configureStore';
import { renderToString } from 'react-dom/server';
import App from '../../shared/Application.jsx';
import { Provider } from 'react-redux';
import React from 'react';

const renderApp = () => {
    const store = configureStore({});

    let html = renderToString(
        <Provider store={store}>
            <App/>
        </Provider>
    );

    let initialState = store.getState();
    
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
                <link rel="shortcut icon" type="image/png" href="assets/images/blackbox-vision.ico"/>
        
                <title>BlackBox Vision | Mobile and Web Software Factory</title>
            </head>
            <body>
                <div id="app">${html}</div>
                <script rel="script" type="text/javascript">
                    var cb = function() {
                        var l = document.createElement('link'); l.rel = 'stylesheet';
                        l.href = 'dist/bundle.css';
                        var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
                    };

                    var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;

                    if (raf) {
                        raf(cb);
                    } else {
                        window.addEventListener('load', cb);
                    }
                </script>
                <script>
                    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                </script>
                <script rel="script" type="text/javascript" src="vendor/material.min.js"></script>
                <script rel="script" type="text/javascript" src="dist/bundle.js"></script>
            </body>
    </html>
    `);
};

export default renderApp;