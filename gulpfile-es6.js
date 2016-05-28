import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import concatCss from 'gulp-concat-css';
import liveReload from 'gulp-livereload';
import del from 'del';

gulp.task('minify-css', () => {
    return gulp.src('src/public/assets/css/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(cleanCSS('bundle.css'))
        .pipe(gulp.dest('src/public/dist'));
});

gulp.task('clean', () => {
    return del(['src/public/dist/bundle.css']);
});

gulp.task('default', ['clean'], () => {
    gulp.start('minify-css');
});

gulp.task('watch', () => {
    // Watch .css files
    gulp.watch('src/public/assets/css/*.css', ['minify-css']);

    //// Watch .js files
    //gulp.watch('src/scripts/**/*.js', ['scripts']);
    //
    //// Watch image files
    //gulp.watch('src/images/**/*', ['images']);

    // Create LiveReload server
    liveReload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['src/public/dist/**']).on('change', liveReload.changed);
});