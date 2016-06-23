import Middleware from '../middleware/Middleware';
import ServerConfig from '../config/ServerConfig';
import compression from 'compression';
import bodyParser from 'body-parser';
import Winston from 'winston';
import Express from 'express';
import cluster from 'cluster';
import os from 'os';

const numCPUs = os.cpus().length;
const urlEncodedOptions = { limit: '20mb', extended: false };
const compressionOptions = { level: 9, memLevel: 9 };
const jsonOptions = { limit: '20mb'};

class Server {
    static init() {
        if (cluster.isMaster) {
            for (let i = 0; i < numCPUs; i++) {
                cluster.fork();
            }

            cluster.on('exit', (worker, code, signal) => {
                if (signal) {
                    Winston.log(`info`, `worker ${worker.process.pid} was killed by signal: ${signal}`);
                } else if (code !== 0) {
                    Winston.log(`info`, `worker ${worker.process.pid} exited with error code: ${code}`);
                } else {
                    Winston.log(`info`, `worker ${worker.process.pid} success!`);
                }
            });
        } else {
            const app = Express();

            //Setting up some data..
            app.use(bodyParser.json(jsonOptions));
            app.use(compression(compressionOptions));
            app.use(bodyParser.urlencoded(urlEncodedOptions));
            app.use(Express.static(ServerConfig.PUBLIC_STATIC_CONTENT_DIR));

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
        }
    }
}

export default Server;