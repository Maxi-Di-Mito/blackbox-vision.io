import ServerConfig from './config/ServerConfig';
import mongoose from 'mongoose';
import Winston from 'winston';
import Server from './core/Server';

//Get default instance..
const server = Server.getInstance();

mongoose.connect(ServerConfig.MONGO_URI).then(() => {
    Winston.log(`info`, `Connected at MongoDB -> ${ServerConfig.MONGO_URI}`);
    server.init();
}).catch((error) => {
    Winston.log(`error`, `An error happen when connecting to MongoDB -> ${error}`);
});
