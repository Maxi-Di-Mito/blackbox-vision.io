import Error500 from '../../../shared/module/main/components/Error500.js';
import Error404 from '../../../shared/module/main/components/Error404.js';
import { renderToStaticMarkup } from '../../../../node_modules/react-dom/server';
import RenderUtils from './../../utils/RenderUtils';
import React from 'react';

const ErrorHandler = (error, request, response, next) => {
    let html;

    switch (error.status) {
        case 500:
            html = RenderUtils.toErrorHtml(renderToStaticMarkup(<Error500 />));
            response.status(error.status).header("Content-Type", "text/html; charset=utf-8").end(html);
            break;
    }

    return next();
};

export default ErrorHandler;