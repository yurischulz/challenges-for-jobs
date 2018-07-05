'use strict';

const 
	sass = require('gulp-sass');

global.gulp.task('sass', function () {
	return gulp.src('./src/scss/app.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./dist/css'));
});

global.gulp.task('sass:watch', function () {
	gulp.watch('./src/scss/*.scss', ['sass']);
});