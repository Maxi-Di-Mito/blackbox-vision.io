import configureStore from '../../../shared/Redux/store/configureStore';
import match from 'react-router/lib/match';
import RouterContext from 'react-router/lib/RouterContext';
import routes from '../../../shared/Common/Router/Routes.jsx';
import { renderToString } from 'react-dom/server';
import RenderUtils from './../../utils/RenderUtils';
import Provider from 'react-redux/lib/components/Provider';
import React from 'react';

const ServerRenderHandler = (request, response, next) => {
    let store = configureStore();

    match({ routes, location: request.url }, (error, redirectLocation, renderProps) => {
        //Uncomment this lines when testing error 500 reactjs component
        //error = {};
        //error.status = 500;

        if (error) {
            return next(error);
        }

        if (!renderProps) {
            return next();
        }

        if (redirectLocation) {
            return response.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        let initialHtml = renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps}/>
            </Provider>
        );

        let finalState = store.getState();
        let finalHtml = RenderUtils.toDefaultHtml(initialHtml, finalState);

        return response.status(200).header("Content-Type", "text/html; charset=utf-8").end(finalHtml);
    })
};

export default ServerRenderHandler;