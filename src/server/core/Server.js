import Middleware from '../middleware/Middleware';
import ServerConfig from '../config/ServerConfig';
import compression from 'compression';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import Winston from 'winston';
import Express from 'express';

const urlEncodedOptions = { limit: '20mb', extended: false };
const compressionOptions = { level: 9, memLevel: 9 };
const jsonOptions = { limit: '20mb'};

class Server {
    constructor() {
        this.server = undefined;
    }

    static getInstance() {
        if (!this.server) {
            this.server = new Server();
        }
        return this.server;
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