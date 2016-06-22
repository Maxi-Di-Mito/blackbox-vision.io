const cacheMap = [
    {
        type: "image",
        pattern: /\.(jpg|jpeg|png)$/,
        cacheTime: "36288000"
    },
    {
        type: "video",
        pattern: /\.(mp4)$/,
        cacheTime: "36288000"
    },
    {
        type: "style",
        pattern: /\.(css)$/,
        cacheTime: "36288000"
    },
    {
        type: "font",
        pattern: /\.(woff|woff2|ttf|eot|svg)$/,
        cacheTime: "36288000"
    },
    {
        type: "script",
        pattern: /\.(js)$/,
        cacheTime: "36288000"
    }
];

const CacheHandler = (request, response, next) => {
    cacheMap.forEach((cacheData) => {
        if(request.url.match(cacheData.pattern)) {
            //console.log("Caching " + cacheData.type);
            response.header('Cache-Control', `public, max-age=${cacheData.cacheTime}`);
        }
    });

    return next();
};

export default CacheHandler;