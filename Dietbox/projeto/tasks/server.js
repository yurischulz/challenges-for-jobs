'use strict';

const
sass = require('gulp-sass')
,	jshint = require('gulp-jshint')
,	jshintStylish = require('jshint-stylish')
,	browserSync = require('browser-sync')
,	csslint = require('gulp-csslint');

global.gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	});

	gulp.watch('./src/js/*.js').on('change', function(event) {
		gulp.src(event.path)
		.pipe(jshint())
		.pipe(jshint.reporter(jshintStylish));
	});

	gulp.watch('./src/css/*.css').on('change', function(event) {
		gulp.src(event.path)
		.pipe(csslint())
		.pipe(csslint.reporter());
	});

	gulp.watch('./src/scss/*.scss').on('change', function(event) {
		var stream = gulp.src(event.path)
		.pipe(sass().on('error', function(erro) {
			console.log('SASS, erro compilação: ' + erro.filename);
			console.log('SASS, log: ' + erro.logError);
			console.log(erro.message);
		}))
		.pipe(gulp.dest('./src/css'));
	});

	gulp.watch('./src/**/*').on('change', browserSync.reload);
});