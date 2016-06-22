import { minify } from 'html-minifier';

const options = {
    caseSensitive: true,
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true
};

class TemplateRenderer {
    toDefaultHtml(html, initialState = {}) {
        const mainHtml =
        `<!doctype html>
            <html>
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="keywords" content="blackbox, vision, blackboxvision, blackbox-vision, material design, web, mobile, design and development">
                    <meta name="author" content="Alan Vaudagna, Federico Catinello, Jonatan Salas">
                    <meta name="description" content="Blackbox Vision is a group of enthusiastic designers and developers with remarkable skills on different modern growing technologies. Our main focus is the interaction with the client and making solutions according to their needs.">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>BlackBox Vision | Mobile and Web Software Factory</title>

                    <link rel="shortcut icon" type="image/png" href="assets/images/blackbox-vision.png"/>
                    <link rel="stylesheet" href="dist/bundle.css"/>
                </head>
                <body>
                    <div id="app">${html}</div>
                    <script rel="script" type="text/javascript">window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
                    <script rel="script" type="text/javascript" src="dist/bundle.js"></script>
                    <script type="text/javascript">
                        WebFontConfig = {
                            google: { families: [ 'Roboto:400,300,500,700,100,900:latin,latin-ext' ] }
                        };
                        (function() {
                            var wf = document.createElement('script');
                            wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
                            wf.type = 'text/javascript';
                            wf.async = 'true';
                            var s = document.getElementsByTagName('script')[0];
                            s.parentNode.insertBefore(wf, s);
                        })();
                    </script>
                </body>
            </html>
        `;

        return (process.env.NODE_ENV === 'production') ? minify(mainHtml, options) : mainHtml;
    }

    toErrorHtml(html) {
        const mainHtml =
        `<!doctype html>
            <html>
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="keywords" content="blackbox, vision, blackboxvision, blackbox-vision, material design, web, mobile, design and development">
                    <meta name="author" content="Alan Vaudagna, Federico Catinello, Jonatan Salas">
                    <meta name="description" content="Blackbox Vision is a group of enthusiastic designers and developers with remarkable skills on different modern growing technologies. Our main focus is the interaction with the client and making solutions according to their needs.">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>BlackBox Vision | Mobile and Web Software Factory</title>

                    <link rel="shortcut icon" type="image/png" href="assets/images/blackbox-vision.png"/>
                    <link rel="stylesheet" href="dist/bundle.css"/>
                </head>
                <body>
                    <div id="app">${html}</div>
                    <script defer src="https://code.getmdl.io/1.1.3/material.min.js"></script>
                </body>
            </html>
        `;

        return (process.env.NODE_ENV === 'production')? minify(mainHtml, options): mainHtml;
    }
}

export default TemplateRenderer;