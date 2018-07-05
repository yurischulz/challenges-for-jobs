'use strict';

global.gulp.task('default', ['server'], function() {
	gulp.start('build-img', 'usemin');
});