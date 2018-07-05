'use strict';

const
	autoprefixer = require('gulp-autoprefixer')
,	usemin = require('gulp-usemin')
,	cssmin = require('gulp-cssmin')
,	uglify = require('gulp-uglify');

global.gulp.task('usemin', function() {

	return gulp.src('./app/src/**/*.html')
	.pipe(usemin({
		js: [uglify],
		css : [autoprefixer, cssmin]
	}))
	.pipe(gulp.dest('./app/dist'));

});