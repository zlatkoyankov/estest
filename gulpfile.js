var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
	return gulp.src('js/*.js')
	  .pipe(jshint())
		.pipe(jshing.reported('default'));
});


gulp.task('sass',function() {
	return gulp.src('sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'));
});


gulp.task('default', function() {
	console.log('hello from gulp')
});

//add some text but git ignore to update this file
//https://travismaynard.com/writing/getting-started-with-gulp
