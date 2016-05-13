var config = require('../../../webpack.config.hot-reload');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var server = require('./server');
var Winston = require('winston');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    proxy: {
        "*": "http://localhost:9001"
    }
}).listen(9002, 'localhost', (err, result) => {
    if (err) {
        return Winston.log("error", err);
    }

    Winston.log("info", 'Webpack Dev Server listening at @9002');
});
