import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';//引入命令行参数包

gulp.task('pages',()=>{//创建任务
    return gulp.src('app/**/*.ejs') //gulp所有任务的创建都要使用.src打开文件。*表示各个嵌套的.ejs
        .pipe(gulp.dest('server'))//模板文件拷贝到server下
        .pipe(gulpif(args.watch,livereload()))//监听
})
