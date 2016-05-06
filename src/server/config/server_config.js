var path = require("path");

/* Server configuration */
var ROOT_DIR = path.resolve(__dirname, "../..");

var server_config = {
	PORT: process.env.SERVER_PORT || 9003,
	PUBLIC_STATIC_CONTENT_DIR: ROOT_DIR + "/public",
	ROOT_DIR: ROOT_DIR,
	SESSION_SIGNATURE: "ProdigyNetwork",
	SESSION_COOKIE_NAME: "_sid",
	MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017"
};

module.exports = server_config;