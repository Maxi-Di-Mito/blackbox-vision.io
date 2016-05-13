var server_config = require('./config/server.config');
var mongoose = require('mongoose');
var Winston = require('winston');

mongoose.connect(server_config.MONGO_URI).then(() => {
    Winston.log("info", "Connected at MongoDB -> " + server_config.MONGO_URI);
    require('./core/server');
}).catch((err) => {
    Winston.log("error", "An error happen when connecting to MongoDB -> " + err);
});
