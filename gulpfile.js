
const gulp = require('gulp');
const rename = require("gulp-rename");
const sass = require('gulp-sass')(require('sass'));
const browsersync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cssclean = require('gulp-clean-css');
const concatjs = require('gulp-concat');
const uglify = require('gulp-terser');
const jsminify = require('gulp-js-minify');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');




function html() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('./dist'))
}

function css() {
    return gulp.src('src/styles/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cssclean())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./dist'))
}

function js() {
    return gulp.src('src/scripts/*.js')
        .pipe(uglify())
        .pipe(jsminify())
        .pipe(concatjs('scripts.min.js'))
        .pipe(gulp.dest('./dist'))
}

function img() {
    return gulp.src('src/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
}


function browserServe(stop) {
    browsersync.init({
        server: {
            baseDir: './dist'
        }
    })
    stop()
}


function watch() {
    gulp.watch('./src/**/*.*', gulp.parallel(html, css, js, img)).on('all', browsersync.reload)
}

function clearDist() {
    return gulp.src('./dist', { allowEmpty: true }).pipe(clean())
}



exports.build = gulp.parallel(html, css, js, img);
exports.watch = gulp.series(clearDist, this.build, browserServe, watch);
