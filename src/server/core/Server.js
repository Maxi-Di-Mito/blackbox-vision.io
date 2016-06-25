import Middleware from '../middleware/Middleware';
import ServerConfig from '../config/ServerConfig';
import ClusterUtils from '../utils/ClusterUtils';
import compression from 'compression';
import bodyParser from 'body-parser';
import Winston from 'winston';
import Express from 'express';

const urlEncodedOptions = { limit: '20mb', extended: false };
const compressionOptions = { level: 9, memLevel: 9 };
const jsonOptions = { limit: '20mb'};

class Server {
    static init() {
        ClusterUtils.runApp(() => {
            const app = Express();

            app.use(bodyParser.json(jsonOptions));
            app.use(compression(compressionOptions));
            app.use(bodyParser.urlencoded(urlEncodedOptions));
            app.use(Express.static(ServerConfig.STATIC_CONTENT));

            //Setting up custom middlewares..
            app.use(Middleware.handleCaching);
            app.use(Middleware.handleRender);
            app.use(Middleware.handleErrors);
            //app.use(Middleware.handleRouting);

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