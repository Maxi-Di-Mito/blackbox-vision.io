const { OPENSHIFT_NODEJS_IP, OPENSHIFT_NODEJS_PORT, NODE_ENV } = process.env;
const IP_ADDRESS = OPENSHIFT_NODEJS_IP || "127.0.0.1";
const PORT = OPENSHIFT_NODEJS_PORT || 8080;

const isProd = () => NODE_ENV === 'production';

export default {
	IP_ADDRESS,
	PORT,
    isProd
};