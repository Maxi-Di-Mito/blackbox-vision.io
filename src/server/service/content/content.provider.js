const ContentFulHelper = require('../../helper/contentful.helper');
const Cache = require('memory-cache');
const Winston = require('winston');

module.exports = {
    getContent: (request, response) => {
        const components = Cache.get('container');

        if(!components) {
            ContentFulHelper
                .findContent()
                .then((data) => {
                    const json = data.items[0].fields;
                    const content = ContentFulHelper.sanitizeContent(json);
                    
                    //Put data in cache
                    Cache.put('container', content);

                    response.status(200);
                    response.json(content);
                })
                .catch((err) => {
                    Winston.log("error", err);

                    response.status(404);
                    response.json(JSON.parse(String(err)));
                });

        } else {
            Winston.log("info", "Got components from cache: " + components);

            response.status(200);
            response.json(components);
        }
    }
};