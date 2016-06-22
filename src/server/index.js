import ServerConfig from './config/ServerConfig';
import mongoose from 'mongoose';
import Winston from 'winston';
import Server from './core/Server';

mongoose.connect(ServerConfig.MONGO_URI).then(() => {
    Winston.log(`info`, `Connected at MongoDB -> ${ServerConfig.MONGO_URI}`);
    Server.init();
}).catch((error) => {
    Winston.log(`error`, `An error happen when connecting to MongoDB -> ${error}`);
});
