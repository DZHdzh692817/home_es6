import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util'; //gulp常用的函数集合
import args from './util/args';

gulp.task('browser',(cb)=>{//gulp创建任务。
    if(!args.watch) return cb();
    gulp.watch('app/**/*.js',['scripts']);//监听原始文件下的所有js发生变化时，启动scripts脚本，scripts任务完成后就将es6转成es5或者es3，并写入server下面的public文件
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);
    //gulp.watch的用法，第一个参数是指定要监听的文件，第二个参数是要执行的任务。
});
