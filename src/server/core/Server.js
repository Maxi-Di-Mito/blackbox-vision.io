import Middleware from '../middleware/Middleware';
import ServerConfig from '../config/ServerConfig';
import ClusterUtils from '../utils/ClusterUtils';
import compression from 'compression';
//import router from '../router/router';
import bodyParser from 'body-parser';
import minify from 'express-minify'
import Winston from 'winston';
import Express from 'express';
import helmet from 'helmet';
import Q from 'q';

class Server {
    static init() {
        ClusterUtils.runApp(() => {
            const app = Express();

            app.use(helmet());
            app.use(minify());
            app.use(bodyParser.json(ServerConfig.JSON_OPTIONS));
            app.use(Express.static(ServerConfig.STATIC_CONTENT));
            app.use(compression(ServerConfig.COMPRESSION_OPTIONS));
            app.use(bodyParser.urlencoded(ServerConfig.URL_ENCODED_OPTIONS));

            //Setting up custom middlewares..
            app.use(Q.async(Middleware.handleCaching));
            app.use(Q.async(Middleware.handleRender));
            app.use(Q.async(Middleware.handleErrors));
            //Add api to expose
            //app.use("/api/v1", router);

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