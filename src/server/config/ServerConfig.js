import control from 'strong-cluster-control';
import path from 'path';
import os from 'os';

const { OPENSHIFT_NODEJS_IP, OPENSHIFT_NODEJS_PORT } = process.env;
const isInProduction = () => {
  return (process.env.NODE_ENV === 'production');
};

const URL_ENCODED_OPTIONS = { limit: '20mb', extended: false };
const COMPRESSION_OPTIONS = { level: 9, memLevel: 9 };
const JSON_OPTIONS = { limit: '20mb'};
const ROOT_DIR = path.resolve(__dirname, "../..");
const IP_ADDRESS = OPENSHIFT_NODEJS_IP || "127.0.0.1";
const PORT = OPENSHIFT_NODEJS_PORT || 8080;
const STATIC_CONTENT = ROOT_DIR + "/public";
const CMS_SPACE_ID = 'qfz80k5nhv3a';
const CMS_API_TOKEN = 'd493a22ac10fa4aeacdaf6de42f633c9a4d7ec44852464c14ee27d3518727b43';
const NUM_CPUS = os.cpus().length;
const CONTROL_OPTIONS = { size: control.CPUS, shutdownTimeout: 5000, terminateTimeout: 5000, throttleDelay: 5000 };
const MINIFY_HTML_OPTIONS = {
    caseSensitive: true,
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true
};

export default {
    URL_ENCODED_OPTIONS,
    COMPRESSION_OPTIONS,
    JSON_OPTIONS,
	ROOT_DIR,
	IP_ADDRESS,
	PORT,
	STATIC_CONTENT,
	CMS_SPACE_ID,
	CMS_API_TOKEN,
    NUM_CPUS,
    CONTROL_OPTIONS,
    MINIFY_HTML_OPTIONS,
    isInProduction
};