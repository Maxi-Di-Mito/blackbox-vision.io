import control from 'strong-cluster-control';
import Winston from 'winston';
import cluster from 'cluster';
import os from 'os';

const numCPUs = os.cpus().length;
const controlOptions = {
    size: control.CPUS,
    shutdownTimeout: 5000,
    terminateTimeout: 5000,
    throttleDelay: 5000
};

class ClusterUtils {
    static runApp(callback) {
        if (process.env.NODE_ENV === 'production') {
            control.start(controlOptions).on('error', (error) => {
                if (error) {
                    Winston.log(`error`, `There is an error with control manager: ${error}`);
                }
            });

            if (cluster.isMaster) {
                for (let i = 0; i < numCPUs; i++) {
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