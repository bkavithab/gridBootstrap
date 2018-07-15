
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync =  require('browser-sync');
//compile sass to css and auto inject to browsers to src “node-modules” folder 
gulp.task('sass',function(){
gulp.src(['./node_modules/bootstrap/scss/bootstrap.scss' ,  './node_modules/bootstrap/scss/*.scss' , 
	        './scss/styles.scss' , './scss/*.scss' ])
.pipe(sass({includePaths: ['scss']}))
.pipe(gulp.dest('./css'))
});


gulp.task('browser-sync', function() {  
    browserSync.init(['./css/*.css', './js/*.js'], {
        server: {
            baseDir: './'
        }
    });
});


gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch('./scss/*.scss', ['sass']);
});
