var gulp = gulp = require("gulp"),
    util = require("gulp-util"),
    sass = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    jshint = require('gulp-jshint'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    log = util.log;

gulp.task("sass", function () {
    log("Generate CSS files " + (new Date()).toString());
    gulp.src('public/stylesheets/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({style: 'expanded'}))
        .pipe(autoprefixer("last 3 version", "safari 5", "ie 8", "ie 9"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("public/stylesheets/css"))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('public/stylesheets/css'));
});

gulp.task("build-js", function () {
    log("Generate js files " + (new Date()).toString());
    gulp.src('public/js/es6/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/js/bundled'));
});

gulp.task('jshint', function () {
    return gulp.src('public/js/es5/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task("js-ify", function () {
    log("Generate js files " + (new Date()).toString());
    gulp.src('public/js/es6/*.js')
        .pipe(babel())
        .pipe(gulp.dest('public/js/es5'));
});

gulp.task("watch", function () {
    log("Watching js and scss files for modifications");
    gulp.watch('public/stylesheets/scss/*.scss', ["sass"]);
    gulp.watch('public/js/es6/*.js', ["js-ify"]);
    gulp.watch('public/js/es5/*.js', ["jshint"]);
});

gulp.task('build', ["sass", "js-ify", "jshint", "watch"]);