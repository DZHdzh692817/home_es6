# home_es6
使用gulp+babel+webpack，es6开发

## 项目构建

基础框架、任务自动化(gulp)、编译工具(babel、webpack)、代码实现

## gulp
 gulp是前端开发过程中对代码进行构建的工具，是自动化项目的构建利器。它能自动化的完成javascript、coffee、sass、less、html、images、css等文件的测试、检查、合并、压缩、格式、
 浏览器自动刷新、部署文件生成，并监听文件在改动后的重复指定的这些步骤。
 
 - 全局安装
 npm install gulp -g
 
    前提是要安装node.js
 - 依赖安装
 npm install gulp --save-dev(在您当前的项目目录下)
 
 - 熟悉gulp的API
 
    gulp.task:定义一个需要自动执行的任务
    
    gulp.src:匹配工作目录下指定规则的文件并返回提供给下一个插件管道使用
    
    gulp.dest:最终文件要输出的路径
    
    gulp.watch:自动监视文件变化并执行指定的任务
    
 ## Babel
 
 
    Babel是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。
    
    1、配置文件.babelrc
    在项目根目录下
    
        {
            "presets":["es2015"]
        }
    
 
## webpack
   
   webpack可以看做是模块打包机。


## 安装下载

- 下载地址:

## 快速使用

http://localhost:3000/

## 交流

## 关于作者

deng_zhihao 在编程路上，永远是菜鸟~

- 个人主页