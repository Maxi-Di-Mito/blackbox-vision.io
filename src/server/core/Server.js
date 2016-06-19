import ServerConfig from '../config/ServerConfig';
import Express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import Winston from 'winston';
import morgan from 'morgan';
import Middleware from '../middleware/Middleware';

const urlEncodedOptions = { limit: '20mb', extended: false };
const compressionOptions = { level: 9, memLevel: 9 };
const jsonOptions = { limit: '20mb'};

class Server {
    static getInstance() {
        return new Server();
    }

    init() {
        const app = Express();

        //Setting up some data..
        app.use(bodyParser.json(jsonOptions));
        app.use(compression(compressionOptions));
        app.use(bodyParser.urlencoded(urlEncodedOptions));
        app.use(Express.static(ServerConfig.PUBLIC_STATIC_CONTENT_DIR));

        //Setting up custom middlewares..
        app.use(Middleware.handleCaching);
        app.use(Middleware.handleErrors);
        app.use(Middleware.handleRender);
        //app.use(Middleware.handleRouting);

        app.listen(ServerConfig.PORT, ServerConfig.IP_ADDRESS, (error) => {
            if (error) {
                Winston.log(`error`, `An error happen when connecting to MongoDB -> ${error}`);
            }

            Winston.log(`info`, `Node server listening @ ${ServerConfig.PORT}`);
        });
    }
}

export default Server;