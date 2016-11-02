if (process.env.NODE_ENV === 'production') {
    require('babel-polyfill');
    process.env.webpackAssets = JSON.stringify(require('./dist/manifest.json'));
    process.env.webpackChunkAssets = JSON.stringify(require('./dist/chunk-manifest.json'));

    console.info("I'm on production!!");

    // In production, serve the webpacked server file.
    require('./dist/server.bundle.js');
} else {
    console.info("I'm on development!!");

    // Babel polyfill to convert ES6 code in runtime
    require('babel-register')({
        "plugins": [
            [
                "babel-plugin-webpack-loaders",
                {
                    "config": __dirname + "/webpack.config.babel.js",
                    "verbose": false
                }
            ]
        ]
    });

    require('babel-polyfill');
    require('./src/server/server');
}