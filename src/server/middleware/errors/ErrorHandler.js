import { renderToStaticMarkup } from '../../../../node_modules/react-dom/server';
import React from 'react';

const ErrorHandler = (error, request, response, next) => {
    let html;

    return next();
};

export default ErrorHandler;