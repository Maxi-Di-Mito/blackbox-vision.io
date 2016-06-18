var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [path.join(__dirname, './src/client/index.jsx')],
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
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader?name=fonts/[name]/[name].[ext]',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            minimize: true,
            sourceMap: false,
            mangle: false
        })
    ]
};
