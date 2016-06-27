import Middleware from '../middleware/Middleware';
import ServerConfig from '../config/ServerConfig';
import ClusterUtils from '../utils/ClusterUtils';
import compression from 'compression';
import bodyParser from 'body-parser';
import Winston from 'winston';
import express from 'express';
import helmet from 'helmet';
import Q from 'q';

class Server {
    static init() {
        ClusterUtils.runApp(() => {
            const app = express();

            //TODO JS: add content security policy from helmet
            app.use(helmet());
            app.use(compression(ServerConfig.COMPRESSION_OPTIONS));
            app.use(bodyParser.json(ServerConfig.JSON_OPTIONS));
            app.use(bodyParser.urlencoded(ServerConfig.URL_ENCODED_OPTIONS));
            app.use(express.static(ServerConfig.STATIC_CONTENT, { maxAge: 604800000 }));

            //Setting up custom middlewares..
            app.use(Q.async(Middleware.handleCaching));
            app.use(Q.async(Middleware.handleRender));
            app.use(Q.async(Middleware.handleErrors));

            app.listen(ServerConfig.PORT, ServerConfig.IP_ADDRESS, (error) => {
                if (error) {
                    Winston.log(`error`, `An error happen when connecting to MongoDB -> ${error}`);
                }

                Winston.log(`info`, `Node server listening @ ${ServerConfig.PORT}`);
            });
        });
    }
}

export default Server;