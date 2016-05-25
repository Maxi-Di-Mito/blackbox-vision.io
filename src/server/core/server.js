import ServerConfig from '../config/server.config';
import bodyParser from 'body-parser';
import express, { Router } from 'express';
import Winston from 'winston';
import morgan from 'morgan';

//Get express and router instances.. 
const router = Router();
const app = express();

//Default route
router.get("/", (request, response) => {
    response.sendFile("index.html", {root: ServerConfig.PUBLIC_STATIC_CONTENT_DIR});
});

//Set views..
app.set('views', './src/public/views');
app.set('view engine', 'jade');

//Define what the app will use..
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(express.static(ServerConfig.PUBLIC_STATIC_CONTENT_DIR));
app.use(router);
app.listen(ServerConfig.PORT, () => {
    Winston.log("info", "Node server listening @ " + ServerConfig.PORT);
});

export default app;