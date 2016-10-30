var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: [
      './src/client/index.js',
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
    path: __dirname + '/dist/',
    filename: 'app.js',
    publicPath: 'http://0.0.0.0:8000/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      'client',
      'node_modules',
    ],
    alias: {
      "react": __dirname + '/node_modules/react',
    }
  },

  module: {
    loaders: [
      {
        test: /\.jsx*$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loader: 'babel',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
      path: __dirname + '/dist/'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
  ]
};
