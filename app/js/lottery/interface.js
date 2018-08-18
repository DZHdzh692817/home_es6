import $ from 'jquery';

//Promise 对象用于一个异步操作的最终完成（或失败）及其结果值的表示。
// 简单点说，它就是用于处理异步操作的，异步处理成功了就执行成功的操作，
// 异步处理失败了就捕获错误或者停止后续操作
class Interface{
    /*
    * [getOmit 获取遗漏数据]
    * @param  {string} issue [当前期号]
    * @return {[type]}       [description]
    */
    getOmit(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/omit',
                data:{
                    issue:issue
                }
                dataType:'json',
                success:function (res) {
                    self.setOmit(res.data);
                    resolve.call(self,res);
                    //call()和apply()就是改变函数的执行上下文，也就是this值
                    //他们的第一个参数就是你要指定的执行上下文，第二个用来传递参数
                    //bind()是es5中的方法，他也是用来实现上下文绑定
                },
                error:function (err) {
                    reject.call(err);
                }
            })
        });
    }

    /**
     * [getOpenCode 获取开奖号码]
     * @param  {string} issue [期号]
     * @return {[type]}       [description]
     */
    getOpenCode(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/opencode',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function (res) {
                    self.setOpenCode(res.data);
                    resolve.call(self,res);
                },
                error:function (err) {
                    reject.call(err);
                }
            })
        });
    }

    /**
     * [getState 获取当前状态]
     * @param  {string} issue [当前期号]
     * @return {[type]}       [description]
     */
    getState(issue){
        let self = this;
        return new Promise((reslove,reject)=>{
            $.ajax({
                url:'/get/state',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function (res) {
                    resolve.call(self,res);
                },
                error:function (err) {
                    reject.call(err);
                }
            })
        });
    }
}

export default Interface