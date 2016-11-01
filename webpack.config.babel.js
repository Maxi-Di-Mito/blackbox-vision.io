module.exports = {
    output: {
        publicPath: '/',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
          'client',
          'node_modules',
        ],
    },
    module: {
        rules: [
           {
              test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
              loader: 'url-loader?limit=10000',
           },
        ],
    },
};
