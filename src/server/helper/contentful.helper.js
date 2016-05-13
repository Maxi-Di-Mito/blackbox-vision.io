const ContentFulConfig = require('../config/contentful.config');
const contentFul = require('contentful');

module.exports =  {
    findContent: (entryId = '26cpea0IS06MkMAYMQ2w4Y', depth = 10) => {
        const entryParams = {'sys.id': entryId, 'include': depth };

        return contentFul
            .createClient(ContentFulConfig.CONTENTFUL_CLIENT)
            .getEntries(entryParams);
    },
    sanitizeContent: (entry) => {
        const formatted = [];

        //Iterate entries from components
        entry.components.forEach((component) => {
            const content = {};

            //Iterate text component array..
            component.fields.textContent.forEach((text) => {
                const fieldName = text.fields.fieldName;
                content[fieldName] = text.fields.fieldText;
            });

            //Iterate images component array
            component.fields.images.forEach((img) => {
                const imgTitle = img.fields.title;
                content[imgTitle] = img.fields.file.url;
            });

            const componentInfo = {
                id: component.fields.id,
                content: content
            };

            formatted.push(componentInfo);
        });

        return formatted;
    }
};