import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import concatCss from 'gulp-concat-css';
import liveReload from 'gulp-livereload';
import del from 'del';
import cssmin from 'gulp-cssmin';

gulp.task('minify-css', () => {
    return gulp.src('src/public/assets/css/blackbox-*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(cleanCSS({ advanced: true, compatibility: "ie8", aggressiveMerging: true, processImport: true }))
        .pipe(cssmin())
        .pipe(gulp.dest('src/public/dist'));
});

gulp.task('roboto-css', () => {
    return gulp.src('src/public/assets/css/roboto-*.css')
        .pipe(concatCss("roboto.css"))
        .pipe(cleanCSS({ advanced: true, compatibility: "ie8", aggressiveMerging: true, processImport: true }))
        .pipe(cssmin())
        .pipe(gulp.dest('src/public/dist'));
});

gulp.task('cleanDist', () => {
    return del(['src/dist/*.js']);
});

gulp.task('cleanCSS', () => {
    return del(['src/public/dist/bundle.css']);
});

gulp.task('fonts', () => {
    return gulp.src(['src/public/assets/css/fonts/**/*']).pipe(gulp.dest('src/public/dist/fonts'));
});

gulp.task('default', ['cleanCSS', 'roboto-css', 'cleanDist', 'fonts'], () => {
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