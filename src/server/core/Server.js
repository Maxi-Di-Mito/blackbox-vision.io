import ReactApp from '../../shared/containers/Application.jsx';
import ServerConfig from '../config/ServerConfig.js';
import { renderToString } from 'react-dom/server';
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

//Define what the app will use..
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(morgan('dev'));
app.use(Express.static(ServerConfig.PUBLIC_STATIC_CONTENT_DIR));
app.use(router);


router.get("/", (request, response) => {
    let html = renderToString(App({}));
    response
        .status(200)
        .header("Content-Type", "text/html; charset=utf-8")
        .end(
        `<!doctype html>
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="keywords" content="blackbox, vision, blackboxvision, blackbox-vision, material design, web, mobile, design and development">
                <meta name="author" content="Alan Vaudagna, Federico Catinello, Jonatan Salas">
                <meta name="description" content="Blackbox Vision is a group of enthusiastic designers and developers with remarkable skills on different modern growing technologies. Our main focus is the interaction with the client and making solutions according to their needs.">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="shortcut icon" type="image/png" href="assets/images/blackbox-vision.ico"/>
        
                <title>BlackBox Vision | Mobile and Web Software Factory</title>
        
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <link rel="stylesheet" href="dist/bundle.css">
            </head>
            <body>
                <div id="app">${html}</div>
                <script rel="script" type="text/javascript" src="https://use.fontawesome.com/798d3a2434.js"></script>
                <script rel="script" type="text/javascript" src="vendor/material.min.js"></script>
                <script rel="script" type="text/javascript" src="dist/bundle.js"></script>
            </body>
        </html>`
    );
});

app.listen(ServerConfig.PORT, ServerConfig.IP_ADDRESS, () => {
    Winston.log("info", "Node server listening @ " + ServerConfig.PORT);
});

export default app;