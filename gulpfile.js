var gulp = require('gulp')
var less = require('gulp-less')
var  livereload = require('gulp-livereload')

var paths = {
    less: ['./build/less/*.less']
}

gulp.task('less', function () {
    return gulp.src(paths.less)
        .pipe(less())
        .pipe(gulp.dest('./build/css'));
})

gulp.task('watch', function() {
    gulp.watch(paths.less, ['less'])
})