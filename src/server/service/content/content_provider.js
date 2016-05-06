const FileHelper = require('../../helper/file_helper');
const FileConst = require('../../config/file_config');

module.exports.getContent = (request, response) => {
    FileHelper.getFile(FileConst.CONTENT_DIRECTORY, FileConst.CONTENT_FILENAME, (error, data) => {
        if (error) {
            response.status(404);
            return;
        }

        response.status(200);
        response.send(JSON.parse(data));
    });
};