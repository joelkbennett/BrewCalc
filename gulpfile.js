var gulp = require('gulp');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var imageMin = require('gulp-imagemin');
var imageminJpegtran = require('imagemin-jpegtran');

gulp.task('js', function () {
	return gulp.src([])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('css', function () {
	return gulp.src([
			  'app/css/normalize.css'
			, 'app/css/styles.css'
			])
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/css'))
		.pipe(prefix())
		.pipe(minifyCSS())
		.pipe(rename('all.min.css'))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('image', function () {
	return gulp.src('app/images/*.jpg')
		.pipe(imageMin({
			progressive: true,
			use: [imageminJpegtran()]
		}))
		.pipe(gulp.dest('dist/images'));
});

gulp.task('move', function () {
	return gulp.src(['app/index.html', 'app/favicon.ico'])
		.pipe(gulp.dest('dist'));
});

gulp.task('server', function () {
	connect.server({
		root: 'app',
		livereload: true
	});
});

gulp.task('default', ['js', 'css', 'image', 'move']);