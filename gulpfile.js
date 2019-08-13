const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const gulpStylelint = require('gulp-stylelint');

function style () {
    return src('./css/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(dest('./css'))
            .pipe(browserSync.stream());
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./css/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.lintCss = lintCss;
exports.watch = watch;


    

   



