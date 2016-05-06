var server_config = require('../config/server_config');
var services = require('../service/services');
var bodyParser = require('body-parser');
var express = require('express');
var Winston = require('winston');
var morgan = require('morgan');
var Q = require('q');

//Get express and router instances.. 
var router = express.Router();
var app = express();

//Default route
router.get("/", services.getHtml);

//Custom routes
router.get("/translation", Q.async(services.getTranslations));
router.get("/content", Q.async(services.getContent));

//Set views..
app.set('views', './src/public/views');
app.set('view engine', 'jade');

//Define what the app will use..
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(express.static(server_config.PUBLIC_STATIC_CONTENT_DIR));
app.use(router);
app.listen(server_config.PORT, () => {
    Winston.log("info", "Node server listening @ " + server_config.PORT);
});

module.exports = app;		