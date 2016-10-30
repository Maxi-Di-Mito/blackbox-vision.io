import configureStore from '../../../shared/redux/store/configureStore';
import match from 'react-router/lib/match';
import routes from '../../../shared/routes.js';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import App from '../../../shared/App';
import { renderToString } from 'react-dom/server';
import RenderUtils from './../../utils/RenderUtils';
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

        let theme = {
            ...lightBaseTheme,
            ...{
                userAgent: request.headers['user-agent']
            }
        };

        let initialHtml = renderToString(<App theme={theme} store={store} renderProps={renderProps} renderOnServer={true}/>);

        let finalState = store.getState();
        let finalHtml = RenderUtils.toDefaultHtml(initialHtml, finalState);

        return response.status(200).header("Content-Type", "text/html; charset=utf-8").end(finalHtml);
    })
};

export default ServerRenderHandler;