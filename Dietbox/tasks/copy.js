'use strict';

global.gulp.task('copy', ['clean'], function() {
	return gulp.src('./app/src/**/*')
	.pipe(gulp.dest('./app/dist'));
});