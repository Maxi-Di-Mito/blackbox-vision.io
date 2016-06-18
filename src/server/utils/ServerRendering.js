import configureStore from '../../shared/Redux/store/configureStore';
import { match, RouterContext } from 'react-router';
import routes from '../../shared/Router/Routes.jsx';
import { renderToString } from 'react-dom/server';
import { renderTemplate } from './Templating';
import { Provider } from 'react-redux';
import React from 'react';

export const handleRender = (request, response, next) => {
    let context = { routes, location: request.url };

    match(context, (error, redirectLocation, renderProps) => {
        if (error) return next(error);
        if (!renderProps) return next();
        if (redirectLocation) return response.redirect(302, redirectLocation.pathname + redirectLocation.search);

        let store = configureStore();
        let initialHtml = renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps}/>
            </Provider>
        );

        let finalState = store.getState();
        let finalHtml = renderTemplate(initialHtml, finalState);

        return response.status(200).header("Content-Type", "text/html; charset=utf-8").end(finalHtml);
    })
};