const fs = require('fs');

module.exports.getFile = (path, filename, callback) => {
    fs.exists(path, (exists) => {
        if (exists) {
            const filePath = path + filename;
            fs.readFile(filePath, (error, data) => {
                if (error) {
                    callback(new Error("Specified filename doesn't exist " + filename));
                } else {
                    callback(null, data);
                }
            });
        } else {
            callback(new Error("Specified path doesn't exist " + path));
        }
    });

};