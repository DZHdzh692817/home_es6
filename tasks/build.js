import gulp from 'gulp';
import gulpSequence from 'gulp-sequence'; //处理包的顺序问题，server最后启动

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
//将server两个相关的目录清理掉，css拷过去，接下来编译模板，执行脚本，['browser','serve']注意一定是数组，说明这两个任务一定在他们之后，browser又在serve前面。总之server一定在最后面执行