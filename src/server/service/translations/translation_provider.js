const FileHelper = require('../../helper/file_helper');
const FileConst = require('../../config/file_config');

module.exports.getTranslations = (request, response) => {
    FileHelper.getFile(FileConst.TRANSLATION_DIRECTORY, FileConst.TRANSLATION_FILENAME, (error, data) => {
        if (error) {
            response.status(404);
            return;
        }

        response.status(200);
        response.send(JSON.parse(data));
    });
};