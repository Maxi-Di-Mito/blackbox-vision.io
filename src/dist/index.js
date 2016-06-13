'use strict';

var _ServerConfig = require('./config/ServerConfig.js');

var _ServerConfig2 = _interopRequireDefault(_ServerConfig);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_ServerConfig2.default.MONGO_URI).then(function () {
    _winston2.default.log("info", "Connected at MongoDB -> " + _ServerConfig2.default.MONGO_URI);
    require('./core/Server');
}).catch(function (err) {
    _winston2.default.log("error", "An error happen when connecting to MongoDB -> " + err);
});