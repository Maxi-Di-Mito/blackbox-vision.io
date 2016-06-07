import ServerConfig from './config/ServerConfig.js';
import mongoose from 'mongoose';
import Winston from 'winston';

mongoose.connect(ServerConfig.MONGO_URI).then(() => {
    Winston.log("info", "Connected at MongoDB -> " + ServerConfig.MONGO_URI);
    require('./core/Server');
}).catch((err) => {
    Winston.log("error", "An error happen when connecting to MongoDB -> " + err);
});
