'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Server configuration */
var ROOT_DIR = _path2.default.resolve(__dirname, "../..");

// default to a 'localhost' configuration:
var connectionString = '127.0.0.1:27017/reactspa';

// if OPENSHIFT env variables are present, use the available connection info:
if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
	connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" + process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" + process.env.OPENSHIFT_MONGODB_DB_HOST + ':' + process.env.OPENSHIFT_MONGODB_DB_PORT + '/' + process.env.OPENSHIFT_APP_NAME;
}

var ServerConfig = {
	IP_ADDRESS: process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",
	PORT: process.env.OPENSHIFT_NODEJS_PORT || 8080,
	MONGO_IP_ADDRESS: process.env.OPENSHIFT_MONGODB_DB_HOST || "127.0.0.1",
	MONGO_PORT: process.env.OPENSHIFT_MONGODB_DB_PORT || 8080,
	PUBLIC_STATIC_CONTENT_DIR: ROOT_DIR + "/public",
	ROOT_DIR: ROOT_DIR,
	MONGO_URI: connectionString || "mongodb://localhost:27017",
	CMS_SPACE_ID: 'qfz80k5nhv3a',
	CMS_API_TOKEN: 'd493a22ac10fa4aeacdaf6de42f633c9a4d7ec44852464c14ee27d3518727b43',
	SMTPS_DATA: 'smtps://contact@blackbox-vision.io:blackbox123.0@mail.privateemail.com' //?pool=true'
};

exports.default = ServerConfig;