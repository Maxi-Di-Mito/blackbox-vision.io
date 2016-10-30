import Middleware from '../middleware/Middleware';
import ServerConfig from '../config/ServerConfig';
import ClusterHelper from '../utils/ClusterUtils';
import compression from 'compression';
import bodyParser from 'body-parser';
import Winston from 'winston';
import express from 'express';
import helmet from 'helmet';

class Server {
    static init() {
        ClusterHelper
            .runApp()
            .then(() => {
                const app = express();

                //TODO JS: add content security policy from helmet
                app.use(helmet());
                app.use(compression(ServerConfig.COMPRESSION_OPTIONS));
                app.use(bodyParser.json(ServerConfig.JSON_OPTIONS));
                app.use(bodyParser.urlencoded(ServerConfig.URL_ENCODED_OPTIONS));
                app.use(express.static(ServerConfig.STATIC_CONTENT, { maxAge: 604800000 }));

                //Setting up custom middlewares..
                app.use(Middleware.handleRender);
                app.use(Middleware.handleErrors);

                app.listen(ServerConfig.PORT, ServerConfig.IP_ADDRESS, (error) => {
                    if (error) {
                        Winston.log(`error`, `An error happen when connecting to MongoDB -> ${error}`);
                    }

                    Winston.log(`info`, `Node server listening @ ${ServerConfig.PORT}`);
                });
            })
            .catch(err => {
                if (err) {
                    Winston.log(`error`, `There is an error with control manager: ${err}`);
                }
            });
    }
}

export default Server;