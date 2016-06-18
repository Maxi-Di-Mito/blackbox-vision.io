import configureStore from '../../shared/Redux/store/configureStore';
import Error500 from '../../shared/View/Errors/500/Error500.jsx';
import { match, RouterContext } from 'react-router';
import routes from '../../shared/Router/Routes.jsx';
import ReactDOMServer from 'react-dom/server';
import App from '../../shared/Application.jsx';
import { renderTemplate } from './Templating';
import { Provider } from 'react-redux';
import React from 'react';

export const handleRender = (request, response, next) => {
    let context = { routes, location: request.url };

    match(context, (error, redirectLocation, renderProps) => {
        if (error) {
            let html = ReactDOMServer.renderToStaticMarkup(<Error500 />);
            response.status(500).header("Content-Type", "text/html; charset=utf-8").end(renderTemplate(html));
        } else if (redirectLocation) {
            response.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            let store = configureStore();
            let initialHtml = ReactDOMServer.renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps}/>
                </Provider>
            );

            let finalState = store.getState();
            let finalHtml = renderTemplate(initialHtml, finalState);
            response.status(200).header("Content-Type", "text/html; charset=utf-8").end(finalHtml);
        } else if (!renderProps) {
            next();
        }
    })
};