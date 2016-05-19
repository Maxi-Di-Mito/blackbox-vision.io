var server_config = require('../config/server.config');
var bodyParser = require('body-parser');
var express = require('express');
var Winston = require('winston');
var morgan = require('morgan');

//Get express and router instances.. 
var router = express.Router();
var app = express();

//Default route
router.get("/", (request, response) => {
    response.sendFile("index.html", {root: server_config.PUBLIC_STATIC_CONTENT_DIR});
});

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