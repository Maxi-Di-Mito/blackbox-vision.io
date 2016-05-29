'use strict';

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpCleanCss = require('gulp-clean-css');

var _gulpCleanCss2 = _interopRequireDefault(_gulpCleanCss);

var _gulpConcatCss = require('gulp-concat-css');

var _gulpConcatCss2 = _interopRequireDefault(_gulpConcatCss);

var _gulpLivereload = require('gulp-livereload');

var _gulpLivereload2 = _interopRequireDefault(_gulpLivereload);

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_gulp2.default.task('minify-css', function () {
    return _gulp2.default.src('src/public/assets/css/*.css').pipe((0, _gulpConcatCss2.default)("bundle.css")).pipe((0, _gulpCleanCss2.default)('bundle.css')).pipe(_gulp2.default.dest('src/public/dist'));
});

_gulp2.default.task('clean', function () {
    return (0, _del2.default)(['src/public/dist/bundle.css']);
});

_gulp2.default.task('default', ['clean'], function () {
    _gulp2.default.start('minify-css');
});

_gulp2.default.task('watch', function () {
    // Watch .css files
    _gulp2.default.watch('src/public/assets/css/*.css', ['minify-css']);

    //// Watch .js files
    //gulp.watch('src/scripts/**/*.js', ['scripts']);
    //
    //// Watch image files
    //gulp.watch('src/images/**/*', ['images']);

    // Create LiveReload server
    _gulpLivereload2.default.listen();

    // Watch any files in dist/, reload on change
    _gulp2.default.watch(['src/public/dist/**']).on('change', _gulpLivereload2.default.changed);
});