export const handleCaching = (request, response, next) => {
    if (request.url.match(/^\/(css|img|js|font)\/.+/)) {
        response.header('Cache-Control', 'public, max-age=3600');
    }

    next();
};