var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('copy', function() {
  gulp.src('src/index.html')
  .pipe(gulp.dest('dist/')) //复制到此处
});

gulp.task('dist',function(){
	gulp.watch('src/index.html',['copy']);
});

gulp.task('less',function(){
	gulp.src('src/style/*.less')
	.pipe(less())
	.pipe(gulp.dest('dist/css/'));
});

gulp.task('lesswatch',function(){
	gulp.watch('src/style/*.less',['less']);
});

