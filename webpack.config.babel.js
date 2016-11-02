var webpack = require('webpack');

module.exports = {
    output: {
        publicPath: '/',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modules: [
          'client',
          'node_modules',
        ],
    },
    module: {
        loaders: [
           {
              test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
              loader: 'url-loader?limit=10000',
           },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
                BABEL_DISABLE_CACHE: JSON.stringify(1)
            }
        })
    ]
};
