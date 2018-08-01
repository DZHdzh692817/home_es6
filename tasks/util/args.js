import yargs from 'yargs';//引入yargs包处理命令行参数

const args = yargs

    .option('production',{ //区分开发环境还是线上环境
        boolean:true,
        default:false,
        describe:'min all scripts'
    })

    .option('watch',{ //控制是否监听
        boolean:true,
        default:false,
        describe:'watch all files'
    })

    .option('verbose',{ //详细输出命令行日志
        boolean:true,
        default:false,
        describe:'log'
    })

    .option('sourcemaps',{
        describe:'force the creation of sroucemaps'
    })

    .option('port',{ //设置服务器端口
        string:true, //设置是string格式
        default:8080,
        describe:'server port'
    })

    .argv //对输入的命令行文件内容以字符串格式解析

export default args;
