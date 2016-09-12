var gulp = require('gulp'),
	jade = require('gulp-jade'),
	browserify = require('gulp-browserify');
	
gulp.task('jade',function(){
	return gulp.src('src/template/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('builds/development'));
});
gulp.task('js',function(){
	return gulp.src('src/js/main.js')
		.pipe(browserify({ debug: true}))
		.pipe(gulp.dest('builds/development/js'));
});
/*
var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	uglify = require('gulp-uglify'),
	streamify = require('gulp-streamify'); 
gulp.task('js',function(){
	return browserify('.js/main')
		.bundle({ debug: true})
		.pipe(source('bundle.js'))
		.pipe(streamify(uglify()))
		.pipe(gulp.dest('.'));
});
*/