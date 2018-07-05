'use strict';

const
	gulp = require('gulp'),
	requireDir = require('require-dir'),
	browserSync = require('browser-sync').create();

global.gulp = gulp;
global.browserSync = browserSync;

requireDir('./tasks/', {
	recurse: true
});