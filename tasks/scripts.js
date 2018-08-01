import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';//处理文件的拼接
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named'; //文件重命名的包
import livereload from 'gulp-livereload';//文件修改之后浏览器自动更新的包
import plumber from 'gulp-plumber';//处理文件信息流
import rename from 'gulp-rename';//文件重命名的包
import uglify from 'gulp-uglify';//处理js，css压缩
import {log,colors} from 'gulp-util';//命令行工具输出的包
import args from './util/args';//对命令行参数进行解析的包

gulp.task('scripts',()=>{ //创建一个gulp任务  task是gulp提供的创建任务的API，scripts任务名
    return gulp.src(['app/js/index.js'])//打开此文件
        .pipe(plumber({    //处理 常规的错误逻辑
            errorHandle:function(){

            }
        }))
        .pipe(named())//文件重命名
        .pipe(gulpWebpack({ //用webpack进行js编译
            module:{
                loaders:[{
                    test:/\.js$/,
                    loader:'babel-loader'
                }]
            }
        }),null,(err,stats)=>{//第三个参数是处理错误的函数
            log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
                chunks:false
            }))
        })
        .pipe(gulp.dest('server/public/js'))//将编译好的内容放进指定路径server拿到最新的编译好的js才能跑起来
        .pipe(rename({//生成的文件
            basename:'cp',
            extname:'.min.js'
        }))
        .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))//压缩及配置
        .pipe(gulp.dest('server/public/js'))//存储
        .pipe(gulpif(args.watch,livereload()))//自动刷新 命令行中有watch就更新，
})
