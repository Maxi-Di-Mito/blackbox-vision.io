var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [path.join(__dirname, './src/client/index.js')],
    output: {
        path: path.join(__dirname, './src/public/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                'loader': 'babel-loader',
                'test': /\.js$/,
                'exclude': /node_modules/,
                'query': {
                    'plugins': ['lodash'],
                    'presets': ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
};
