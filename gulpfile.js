'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var del = require('del');

var paths = {
    scripts: ['src/js/**/*.js'],
    images: 'src/img/**/*'
};

gulp.task('lint', function() {
	return gulp.src('js/*.js')
	  .pipe(jshint())
		.pipe(jshing.reported('default'));
});


gulp.task('sass',function() {
	gulp.src('src/sass/*.scss')
	   .pipe(sass().on('error', sass.logError))
	   .pipe(gulp.dest('build/css'));
});

gulp.task('clean', function() {
    return del(['build']);
});

gulp.task('default', function() {
	console.log('hello from gulp')
});

//add some text but git ignore to update this file
//https://travismaynard.com/writing/getting-started-with-gulp
