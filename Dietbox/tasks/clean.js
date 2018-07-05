'use strict';

const
	clean = require('gulp-clean');

global.gulp.task('clean', function() {
	return gulp.src('./app/dist')
	.pipe(clean());
});