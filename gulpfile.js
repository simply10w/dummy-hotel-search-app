const gulp = require('gulp');
const rimraf = require('gulp-rimraf');
const webpack = require('webpack');
const config = require('./webpack.config');

gulp.task('clean', function() {
	return gulp
			.src(config.output.path)
			.pipe(rimraf({read: false}));
});
