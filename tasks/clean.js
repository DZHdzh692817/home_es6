import gulp from 'gulp';
import del from 'del';//做删除的包
import args from './util/args';

gulp.task('clean',()=>{
    return del(['server/public','server/views'])
})