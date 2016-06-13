'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ServerConfig = require('../config/ServerConfig.js');

var _ServerConfig2 = _interopRequireDefault(_ServerConfig);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _RenderUtils = require('../utils/RenderUtils');

var _RenderUtils2 = _interopRequireDefault(_RenderUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Get express and router instances..
var router = (0, _express.Router)();
var app = (0, _express2.default)();

//Define what the app will use..
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json({ limit: '20mb' }));
app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.static(_ServerConfig2.default.PUBLIC_STATIC_CONTENT_DIR));
app.use(router);

//Setting up caching with express
app.use(function (request, response, next) {
    if (request.url.match(/^\/(css|img|js|font)\/.+/)) {
        response.header('Cache-Control', 'public, max-age=3600');
    }

    next();
});

router.get("/", function (request, response) {
    response.status(200).header("Content-Type", "text/html; charset=utf-8").end((0, _RenderUtils2.default)());
});

app.listen(_ServerConfig2.default.PORT, _ServerConfig2.default.IP_ADDRESS, function () {
    _winston2.default.log("info", "Node server listening @ " + _ServerConfig2.default.PORT);
});

//TODO JS: Fix contact data send with NodeMailer
//router.get("/contact", (request, response) => {
//    var mailOptions = {
//        from: '"Contact" <contact@blackbox-vision.io>', // sender address
//        to: 'contact@blackbox-vision.io', // list of receivers
//        subject: 'Pruebita', // Subject line
//        text: 'Esto es una prueba' // plaintext body
//    };
//
//    var smtpConfig = {
//        host: 'mail.privateemail.com',
//        port: 25,
//        secure: false, // use SSL
//        auth: {
//            user: 'contact@blackbox-vision.io',
//            pass: 'blackbox123.0'
//        }
//    };
//
//    //Create transporter with SMTPS current data taken from ServerConfig.
//    let transporter = nodemailer.createTransport(smtpConfig);
//
//    transporter.verify((error, success) => {
//        if (error) {
//            response.status(500).json({ message: "cannot send email " + error });
//            console.log(error);
//        }
//
//        if (success) {
//            transporter.sendMail(mailOptions, (error, info) => {
//                if(error) {
//                    response.status(550).send(error);
//                }
//
//                response.status(200).end(info.response);
//            });
//        }
//    });
//});

exports.default = app;