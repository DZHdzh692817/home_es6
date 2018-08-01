import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';//启动服务器的包，即启动一个脚本作为服务器的功能
import args from './util/args';

gulp.task('serve',(cb)=>{ //传一个回调，
    if(!args.watch) return cb();//如果不是处于监听状态下，就返回回调函数

    var server = liveserver.new(['--harmony','server/bin/www']);//如果是处于监听状态下，创建服务器，
    //--harmony指 要在当前命令行下执行后面的这段脚本server/bin/www是一个脚本，默认启动的就是这个脚本
    server.start();//启动服务器

    //因为项目是es6与css无关，所以不处理css，只需要监听js和ejs。gulp.watch是文件的监听，第一个参数告诉监听的目录，
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
        server.notify.apply(server,[file]);//将改动告诉服务器，做相应的处理
    })

    //服务器中的路由和接口发生改变，要server重启才能生效，所以监听需要服务器重启的文件
    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)()
    });
})
