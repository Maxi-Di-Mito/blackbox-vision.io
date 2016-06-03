import ReactApp from '../../shared/containers/Application.jsx';
import ServerConfig from '../config/server.config';
import ReactDOMServer from 'react-dom/server';
import Express, { Router } from 'express';
import bodyParser from 'body-parser';
import { install } from 'node-jsx';
import Winston from 'winston';
import morgan from 'morgan';
import React from 'react';

const App = React.createFactory(ReactApp);
//Install jsx transpiler in server
install({extension: '.jsx', harmony: true});

//Get express and router instances.. 
const router = Router();
const app = Express();

//Default route
router.get("/", (request, response) => {
    response.render(
        ServerConfig.PUBLIC_STATIC_CONTENT_DIR + "/index.ejs",
        { reactApp: ReactDOMServer.renderToString(App({})) }
    );
});

//Set views..
app.set('views', './src/public/views');
app.set('view engine', 'ejs');

//Define what the app will use..
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(Express.static(ServerConfig.PUBLIC_STATIC_CONTENT_DIR));
app.use(router);
app.listen(ServerConfig.PORT, ServerConfig.IP_ADDRESS, () => {
    Winston.log("info", "Node server listening @ " + ServerConfig.PORT);
});

export default app;