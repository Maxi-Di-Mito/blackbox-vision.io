import ServerConfig from './config/server.config';
import server from './core/server';
import mongoose from 'mongoose';
import Winston from 'winston';

mongoose.connect(ServerConfig.MONGO_URI).then(() => {
    Winston.log("info", "Connected at MongoDB -> " + ServerConfig.MONGO_URI);
    server;
}).catch((err) => {
    Winston.log("error", "An error happen when connecting to MongoDB -> " + err);
});
