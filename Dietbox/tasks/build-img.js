'use strict';

const
	imagemin = require('gulp-imagemin');

global.gulp.task('build-img', ['copy'], function() {

	return gulp.src('./app/dist/img/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./app/dist/img'));

});