var request = require('request');
var fs = require('fs');

// function to encode file data to base64 encoded string
module.exports = {

    encodeFromFile: (file) => {
        // read binary data
        var bitmap = fs.readFileSync(file);
        // convert binary data to base64 encoded string
        return new Buffer(bitmap).toString('base64');
    },
    encodeFromUrl: (url, callback) => {
        const data = { url: url, encoding: 'base64' };

        request(data, (err, res, body) => {
            if (!err && res.statusCode == 200) {
                console.log(JSON.stringify(body));
                callback(body);
            } else {
                throw new Error('Can not download image');
            }
        });
    },

    encode: (url) => {
        const requestData = {
            method: 'GET',
            url: url,
            encoding: 'base64'
        };

        return new (require('common-node').HttpClient)(requestData).finish().body;
    }
};
