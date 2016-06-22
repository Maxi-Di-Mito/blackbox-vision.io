import Error500 from '../../../shared/Common/Errors/Error500.jsx';
import Error404 from '../../../shared/Common/Errors/Error404.jsx';
import { renderToStaticMarkup } from '../../../../node_modules/react-dom/server';
import TemplateRenderer from './../../utils/TemplateRenderer';
import React from 'react';

const ErrorHandler = (error, request, response, next) => {
    const renderer = new TemplateRenderer();
    let html;

    switch (error.status) {
        case 500:
            html = renderer.toErrorHtml(renderToStaticMarkup(<Error500 />));
            response.status(error.status).header("Content-Type", "text/html; charset=utf-8").end(html);
            break;
    }

    return next();
};

export default ErrorHandler;