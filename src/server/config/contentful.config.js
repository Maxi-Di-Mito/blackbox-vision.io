var ServerConfig = require('../config/server.config');

module.exports =  {
    CONTENTFUL_CLIENT: {
        space: ServerConfig.CMS_SPACE_ID,
        accessToken: ServerConfig.CMS_API_TOKEN
    },
    CONTENTFUL_SCAN_DEPTH: 3
};