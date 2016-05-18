var path = require("path");

/* Server configuration */
var ROOT_DIR = path.resolve(__dirname, "../..");

var server_config = {
	PORT: process.env.SERVER_PORT || 9001,
	PUBLIC_STATIC_CONTENT_DIR: ROOT_DIR + "/public",
	ROOT_DIR: ROOT_DIR,
	SESSION_SIGNATURE: "ProdigyNetwork",
	SESSION_COOKIE_NAME: "_sid",
	MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017",
	//CMS_SPACE_ID: 'yv98ozite9o1',
	CMS_SPACE_ID: 'qfz80k5nhv3a',
	//CMS_API_TOKEN: '210aacb03a0c673ffc194673e71437e8b7600b592dd0f936c45849a69234dd96',
	CMS_API_TOKEN: 'd493a22ac10fa4aeacdaf6de42f633c9a4d7ec44852464c14ee27d3518727b43'
};

module.exports = server_config;