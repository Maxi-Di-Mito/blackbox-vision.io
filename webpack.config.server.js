var fs = require('fs');
var path = require('path');
var ExternalsPlugin = require('webpack-externals-plugin');

module.exports = {

  entry: path.resolve(__dirname, 'src/server/index.js'),

  output: {
    path: __dirname + '/dist/',
    filename: 'server.bundle.js',
  },

  target: 'node',

  node: {
    __filename: true,
    __dirname: true,
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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-0',
          ]
        },
      },
    ],
  },
  plugins: [
    new ExternalsPlugin({
      type: 'commonjs',
      include: path.join(__dirname, './node_modules/'),
    }),
  ],
};
