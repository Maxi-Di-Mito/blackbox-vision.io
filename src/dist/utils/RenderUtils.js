'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _configureStore = require('../../shared/Redux/store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _server = require('react-dom/server');

var _Application = require('../../shared/Application.jsx');

var _Application2 = _interopRequireDefault(_Application);

var _reactRedux = require('react-redux');

var _memoryCache = require('memory-cache');

var _memoryCache2 = _interopRequireDefault(_memoryCache);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _htmlMinifier = require('html-minifier');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx(_Application2.default, {});

var renderApp = function renderApp() {
    var store = (0, _configureStore2.default)();
    var html = _memoryCache2.default.get('html');
    var initialState = _memoryCache2.default.get('initialState');

    if (!html && !initialState) {
        html = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
            store: store
        }, void 0, _ref));

        initialState = JSON.stringify(store.getState());

        _memoryCache2.default.put('html', html);
        _memoryCache2.default.put('initialState', initialState);
    }

    return renderHtml(html, initialState);
};

var renderHtml = function renderHtml(html, initialState) {
    var appHtml = '<!doctype html>\n        <html>\n            <head>\n                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>\n                <meta http-equiv="X-UA-Compatible" content="IE=edge">\n                <meta name="keywords" content="blackbox, vision, blackboxvision, blackbox-vision, material design, web, mobile, design and development">\n                <meta name="author" content="Alan Vaudagna, Federico Catinello, Jonatan Salas">\n                <meta name="description" content="Blackbox Vision is a group of enthusiastic designers and developers with remarkable skills on different modern growing technologies. Our main focus is the interaction with the client and making solutions according to their needs.">\n                <meta name="viewport" content="width=device-width, initial-scale=1.0">\n                <title>BlackBox Vision | Mobile and Web Software Factory</title>\n\n                <link rel="shortcut icon" type="image/png" href="assets/images/blackbox_vision.ico"/>\n                <link rel="stylesheet" href="dist/bundle.css"/>\n            </head>\n            <body>\n                <div id="app">' + html + '</div>\n                <script rel="script" type="text/javascript">window.__INITIAL_STATE__ = ' + initialState + ';</script>\n                <script rel="script" type="text/javascript" src="dist/bundle.js"></script>\n            </body>\n    </html>';

    var options = {
        caseSensitive: true,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true
    };

    console.log("El node_env es: " + process.env.NODE_ENV);
    return process.env.NODE_ENV === 'production' ? (0, _htmlMinifier.minify)(appHtml, options) : appHtml;
};

exports.default = renderApp;