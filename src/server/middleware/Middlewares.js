import React from 'react';
import ReactDOMServer from 'react-dom/server';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { match } from 'react-router';
import RenderHelper from '../helper/RenderHelper';
import configureStore from '../../shared/redux/store/configureStore';
import routes from '../../shared/routes.js';
import App from '../../shared/App';

class Middlewares {
    static handleRender(request, response, next) {
        let store = configureStore();

        match({ routes, location: request.url }, (error, redirectLocation, renderProps) => {
            if (error) return next(error);
            if (!renderProps) return next();
            if (redirectLocation) return response.redirect(302, redirectLocation.pathname + redirectLocation.search);

            let initialHtml = ReactDOMServer.renderToString(
                <App
                    store={store}
                    renderProps={renderProps}
                    renderOnServer={true}
                    theme={{
                        ...lightBaseTheme,
                        ...{
                            userAgent: request.headers['user-agent']
                        }
                    }}
                />
            );

            return response
                .status(200)
                .header("Content-Type", "text/html; charset=utf-8")
                .end(RenderHelper.toDefaultHtml(initialHtml, store.getState()));
        })
    }

    static handleErrors(error, request, response, next) {
        return next();
    }
}

export default Middlewares;