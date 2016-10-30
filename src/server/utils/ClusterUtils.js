import ServerConfig from '../config/ServerConfig';
import control from 'strong-cluster-control';
import Winston from 'winston';
import cluster from 'cluster';

class ClusterUtils {
    static runApp() {
        return new Promise((resolve, reject) => {
            if (ServerConfig.isInProduction()) {
                control.start(ServerConfig.CONTROL_OPTIONS).on('error', error => reject(error));

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
                    resolve();
                }
            } else {
                resolve();
            }
        });
    }
}

export default ClusterUtils;