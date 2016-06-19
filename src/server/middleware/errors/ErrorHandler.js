import Error500 from '../../../shared/View/Errors/500/Error500.jsx';
import Error404 from '../../../shared/View/Errors/404/Error404.jsx';
import { renderToStaticMarkup } from '../../../../node_modules/react-dom/server';
import TemplateRenderer from './../../utils/TemplateRenderer';
import React from 'react';

const ErrorHandler = (error, request, response, next) => {
    const renderer = new TemplateRenderer();
    let html;

    switch (error.status) {
        case 404:
            html = renderer.toErrorHtml(renderToStaticMarkup(<Error404 />));
            response.status(error.status).header("Content-Type", "text/html; charset=utf-8").end(html);
            break;
        case 500:
            html = renderer.toErrorHtml(renderToStaticMarkup(<Error500 />));
            response.status(error.status).header("Content-Type", "text/html; charset=utf-8").end(html);
            break;
    }

    return next();
};

export default ErrorHandler;