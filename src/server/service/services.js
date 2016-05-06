const TranslationsProvider = require('../service/translations/translation_provider');
const ContentProvider = require('../service/content/content_provider');
const ServerConfig = require('../config/server_config');

module.exports = {
    getHtml: (request, response) => {
        response.sendFile("index.html", {root: ServerConfig.PUBLIC_STATIC_CONTENT_DIR});
    },
    getTranslations: (request, response) => {
        TranslationsProvider.getTranslations(request, response);
    },
    getContent: (request, response) => {
        ContentProvider.getContent(request, response);
    }
};