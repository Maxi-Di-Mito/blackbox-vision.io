'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _configureStore = require('../../shared/Redux/store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _server = require('react-dom/server');

var _Application = require('../../shared/Application.jsx');

var _Application2 = _interopRequireDefault(_Application);

var _reactRedux = require('react-redux/dist/react-redux.min');

var _memoryCache = require('memory-cache');

var _memoryCache2 = _interopRequireDefault(_memoryCache);

var _reactWithAddons = require('react/dist/react-with-addons.min');

var _reactWithAddons2 = _interopRequireDefault(_reactWithAddons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderApp = function renderApp() {
    var store = (0, _configureStore2.default)();
    var html = _memoryCache2.default.get('html');
    var initialState = _memoryCache2.default.get('initialState');

    if (!html && !initialState) {
        html = (0, _server.renderToString)(_reactWithAddons2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _reactWithAddons2.default.createElement(_Application2.default, null)
        ));

        initialState = store.getState();

        _memoryCache2.default.put('html', html);
        _memoryCache2.default.put('initialState', initialState);
    }

    return '\n    <!doctype html>\n        <html>\n            <head>\n                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>\n                <meta http-equiv="X-UA-Compatible" content="IE=edge">\n                <meta name="keywords" content="blackbox, vision, blackboxvision, blackbox-vision, material design, web, mobile, design and development">\n                <meta name="author" content="Alan Vaudagna, Federico Catinello, Jonatan Salas">\n                <meta name="description" content="Blackbox Vision is a group of enthusiastic designers and developers with remarkable skills on different modern growing technologies. Our main focus is the interaction with the client and making solutions according to their needs.">\n                <meta name="viewport" content="width=device-width, initial-scale=1.0">\n                <link rel="shortcut icon" type="image/png" href="assets/images/blackbox_vision.ico"/>\n        \n                <title>BlackBox Vision | Mobile and Web Software Factory</title>\n            </head>\n            <body>\n                <div id="app">\n                    ' + html + '\n                </div>\n                <script rel="script" type="text/javascript">\n                    var cb = function() {\n                        var l = document.createElement(\'link\'); l.rel = \'stylesheet\';\n                        l.href = \'dist/bundle.css\';\n                        var h = document.getElementsByTagName(\'head\')[0]; h.parentNode.insertBefore(l, h);\n                    };\n\n                    var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;\n\n                    if (raf) {\n                        raf(cb);\n                    } else {\n                        window.addEventListener(\'load\', cb);\n                    }\n                </script>\n                <script>\n                    window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n                </script>\n                <script rel="script" type="text/javascript" src="vendor/material.min.js"></script>\n                <script rel="script" type="text/javascript" src="dist/bundle.js"></script>\n            </body>\n    </html>\n    ';
};

exports.default = renderApp;