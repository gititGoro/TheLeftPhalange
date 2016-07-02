var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var merge = require('merge2');
var sass = require('gulp-sass');

var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('scripts', function () {
    var tsResult = gulp.src(['./app/*.ts', 'typings/**.*', './app/domain/*.ts', './app/domain/*/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file
        .pipe(gulp.dest('release/js'));
});


gulp.task('sass', function () {
    gulp.src('./app/components/game/**.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./app/components/game/'));
});

gulp.task('watch', function () {
    gulp.watch('./app/components/game/**.scss', ['sass']);
    gulp.watch(['./app/*.ts', './app/domain/*.ts', './app/domain/*/*.ts'], ['scripts']);
});