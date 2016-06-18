import Error500 from '../../shared/View/Errors/500/Error500.jsx';
import Error404 from '../../shared/View/Errors/404/Error404.jsx';
import { renderToStaticMarkup } from 'react-dom/server';
import { renderErrorTemplate } from './Templating';
import React from 'react';

export const handleError = (error, request, response, next) => {
    let html;

    switch (error.status) {
        case 404:
            html = renderErrorTemplate(renderToStaticMarkup(<Error404 />));
            response.status(error.status).header("Content-Type", "text/html; charset=utf-8").end(html);
            break;
        case 500:
            html = renderErrorTemplate(renderToStaticMarkup(<Error500 />));
            response.status(error.status).header("Content-Type", "text/html; charset=utf-8").end(html);
            break;
    }

    return next();
};