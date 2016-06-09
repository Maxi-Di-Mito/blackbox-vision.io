import ServerConfig from '../config/ServerConfig.js';
import Express, { Router } from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import Winston from 'winston';
import morgan from 'morgan';
import renderApp from '../utils/RenderUtils';

//Get express and router instances.. 
const router = Router();
const app = Express();

//Define what the app will use..
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(morgan('dev'));
app.use(Express.static(ServerConfig.PUBLIC_STATIC_CONTENT_DIR));
app.use(router);

//Setting up caching with express
app.use((request, response, next) => {
    if (request.url.match(/^\/(css|img|js|font)\/.+/)) {
        response.header('Cache-Control', 'public, max-age=3600');
    }

    next();
});

router.get("/", (request, response) => {
    response.status(200).header("Content-Type", "text/html; charset=utf-8").end(renderApp());
});

app.listen(ServerConfig.PORT, ServerConfig.IP_ADDRESS, () => {
    Winston.log("info", "Node server listening @ " + ServerConfig.PORT);
});

export default app;