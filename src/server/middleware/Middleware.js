import handleServerRender from './ssr/ServerRenderHandler';
import handleCaching from './cache/CacheHandler';
import handleError from './errors/ErrorHandler';

class Middleware {
    static handleRender(request, response, next) {
        handleServerRender(request, response, next);
    }

    static handleCaching(request, response, next) {
        handleCaching(request, response, next);
    }

    static handleErrors(error, request, response, next) {
        handleError(error, request, response, next);
    }
}

export default Middleware;