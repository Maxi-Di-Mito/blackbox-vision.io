import configureStore from '../../../shared/Redux/store/configureStore';
import match from 'react-router/lib/match';
import RouterContext from 'react-router/lib/RouterContext';
import routes from '../../../shared/Router/Routes.jsx';
import { renderToString } from 'react-dom/server';
import TemplateRenderer from './../../utils/TemplateRenderer';
import Provider from 'react-redux/lib/components/Provider';
import React from 'react';

const ServerRenderHandler = (request, response, next) => {
    const renderer = new TemplateRenderer();

    match({ routes, location: request.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            return next(error);
        }

        if (redirectLocation) {
            return response.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        if (!renderProps) {
            return next();
        }

        let store = configureStore();
        let initialHtml = renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps}/>
            </Provider>
        );

        let finalState = store.getState();
        let finalHtml = renderer.toDefaultHtml(initialHtml, finalState);

        return response.status(200).header("Content-Type", "text/html; charset=utf-8").end(finalHtml);
    })
};

export default ServerRenderHandler;