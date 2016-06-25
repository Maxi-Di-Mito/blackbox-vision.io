import ServerConfig from '../config/ServerConfig';
import control from 'strong-cluster-control';
import Winston from 'winston';
import cluster from 'cluster';

class ClusterUtils {
    static runApp(callback) {
        const isProduction = process.env.NODE_ENV === 'production';

        if (isProduction) {
            control.start(ServerConfig.CONTROL_OPTIONS).on('error', (error) => {
                if (error) {
                    Winston.log(`error`, `There is an error with control manager: ${error}`);
                }
            });

            if (cluster.isMaster) {
                for (let i = 0; i < ServerConfig.NUM_CPUS; i++) {
                    cluster.fork();
                }

                cluster.on('exit', (worker, code, signal) => {
                    if (signal) {
                        Winston.log(`error`, `worker ${worker.process.pid} was killed by signal: ${signal}`);
                    } else if (code !== 0) {
                        Winston.log(`error`, `worker ${worker.process.pid} exited with error code: ${code}`);
                    } else {
                        Winston.log(`info`, `worker ${worker.process.pid} success!`);
                    }
                });
            } else {
                callback();
            }
        } else {
            callback();
        }
    }
}

export default ClusterUtils;