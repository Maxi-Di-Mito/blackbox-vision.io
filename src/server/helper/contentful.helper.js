const ContentFulConfig = require('../config/contentful.config');
const contentFul = require('contentful');

module.exports =  {
    findContent: (entryId = '4QsCx3HC1yycMQ0Yko8aQ4', depth = ContentFulConfig.CONTENTFUL_SCAN_DEPTH) => {
        const entryParams = {'sys.id': entryId, 'include': depth, 'locale': '*' };

        return contentFul
            .createClient(ContentFulConfig.CONTENTFUL_CLIENT)
            .getEntries(entryParams);
    },
    sanitizeContent: (entry) => {
        const defaultLocale = 'en-US';
        var formatted = [];

        entry.components[defaultLocale].forEach(component => {

            var content = {};

            component.fields.textContent[defaultLocale].forEach(text => {
                content[text.fields.fieldName[defaultLocale]] = text.fields.fieldText;
            });

            if(component.fields.images) {
                component.fields.images[defaultLocale].forEach(img => {
                    content[img.fields.title[defaultLocale]] = 'https:' + img.fields.file[defaultLocale].url;
                });
            }

            formatted.push({
                [component.fields.id[defaultLocale]]: content
            });

        });

        return formatted;
    }
};