var path = require('path');
var webpack = require('webpack');

module.exports = {
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
            },
            {
                test   : /\.(jpg|png|gif)(\?[a-z0-9=&.]+)?$/,
                loader: 'url-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
                exclude: /node_modules/
            }
        ]
    }
};
