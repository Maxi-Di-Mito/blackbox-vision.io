import { minify } from 'html-minifier';
import ServerConfig from '../config/ServerConfig';

class RenderUtils {
    static toDefaultHtml(html, initialState = {}) {
        const mainHtml =
        `<!doctype html>
            <html>
                <head>
                    <meta http-equiv="Content-Type" content="text/html" charset="utf-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE">
                    <meta name="keywords" content="blackbox, vision, blackboxvision, blackbox-vision, material design, web, mobile, design and development">
                    <meta name="author" content="Alan Vaudagna, Federico Catinello, Jonatan Salas">
                    <meta name="description" content="Blackbox Vision is a group of enthusiastic designers and developers with remarkable skills on different modern growing technologies. Our main focus is the interaction with the client and making solutions according to their needs.">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>BlackBox Vision | Mobile and Web Software Factory</title>

                    <link rel="shortcut icon" type="image/png" href="assets/images/blackbox_vision.ico"/>
                    <link rel="stylesheet" type="text/css" href="dist/bundle.css"/>
                </head>
                <body>
                    <div id="app">${html}</div>
                    <script rel="script" type="text/javascript">window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
                    <script rel="script" type="text/javascript" src="dist/bundle.js"></script>
                </body>
            </html>
        `;

        return (ServerConfig.isInProduction()) ? minify(mainHtml, ServerConfig.MINIFY_HTML_OPTIONS) : mainHtml;
    }

    static toErrorHtml(html) {
        const mainHtml =
        `<!doctype html>
            <html>
                <head>
                    <meta http-equiv="Content-Type" content="text/html" charset="utf-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE">
                    <meta name="keywords" content="blackbox, vision, blackboxvision, blackbox-vision, material design, web, mobile, design and development">
                    <meta name="author" content="Alan Vaudagna, Federico Catinello, Jonatan Salas">
                    <meta name="description" content="Blackbox Vision is a group of enthusiastic designers and developers with remarkable skills on different modern growing technologies. Our main focus is the interaction with the client and making solutions according to their needs.">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>BlackBox Vision | Mobile and Web Software Factory</title>

                    <link rel="shortcut icon" type="image/png" href="assets/images/blackbox_vision.ico"/>
                    <link rel="stylesheet" type="text/css" href="dist/bundle.css"/>
                </head>
                <body>
                    <div id="app">${html}</div>
                    <script defer src="https://code.getmdl.io/1.1.3/material.min.js"></script>
                </body>
            </html>
        `;

        return (ServerConfig.isInProduction())? minify(mainHtml, ServerConfig.MINIFY_HTML_OPTIONS): mainHtml;
    }
}

export default RenderUtils;