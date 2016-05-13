var ServerConfig = require('../config/server.config');

module.exports =  {
    CONTENTFUL_CLIENT: {
        space: ServerConfig.CONTENTFUL_SPACE_ID, 
        accessToken: ServerConfig.CONTENTFUL_API_TOKEN
    },
    CONTENTFUL_SCAN_DEPTH: 3
};