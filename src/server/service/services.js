const ContentProvider = require('../service/content/content.provider');

module.exports = {
    getContent: (request, response) => {
        ContentProvider.getContent(request, response);
    }
};