import 'babel-polyfill';
import Base from './lottery/base.js';
import Timer from './lottery/timer.js';
import Calculate from './lottery/calculate.js';
import Interface from './lottery/interface.js';
import $ from 'jquery';

//深度拷贝
const copyProperties=function(target,source){
    for(let key of Reflect.ownKeys(source)){
        if(key!=='constructor'&&key!=='prototype'&&key!=='name'){
            let desc=Object.getOwnPropertyDescriptor(source,key);
            Object.defineProperty(target,key,desc);
        }
    }
}

//多重继承
const mix=function(...mixins){
    class Mix{}
    for(let mixin of mixins){
        copyProperties(Mix,mixin);
        copyProperties(Mix.prototype,mixin.prototype);
    }
    return Mix
}

class Lottery extends mix(Base,Calculate,Interface,Timer){
    //构造函数
    constructor(name='syy',cname='11选5',issue='**',state='**'){
        super();//放在最前面
        this.name=name;//
        this.cname=cname;//
        this.issue=issue;//
        this.state=state;//
        this.el='';//当前选择器
        this.omit=new Map();//遗漏
        this.open_code=new Set();//开奖号码
        this.open_code_list=new Set();//开奖记录
        this.play_list=new Map();//玩法列表
        this.number=new Set();//选号
        this.issue_el='#curr_issue';//当前选号 期号
        this.countdown_el='#countdown';//倒计时
        this.state_el='.state_el';//状态
        this.cart_el='.codelist';//购物车
        this.omit_el='';//遗漏
        this.cur_play='r5';//默认玩法
        this.initPlayList();//
        this.initNumber();//
        this.updateState();//更新状态
        this.initEvent();//事件初始化
    }

    /**
     * [updateState 状态更新]
     * @return {[type]} [description]
     */
    updateState(){
        let self=this;
        this.getState().then(function(res){
            self.issue=res.issue;//当前期号
            self.end_time=res.end_time;//更新时间
            self.state=res.state;//状态
            $(self.issue_el).text(res.issue);
            self.countdown(res.end_time,function(time){
                $(self.countdown_el).html(time)//倒计时
            },function(){
                setTimeout(function () {
                    self.updateState();
                    self.getOmit(self.issue).then(function(res){

                    });
                    self.getOpenCode(self.issue).then(function(res){

                    })
                }, 500);//500毫秒
            })
        })
    }

    /**
     * [initEvent 初始化事件]
     * @return {[type]} [description]
     */
    initEvent(){
        let self=this;
        $('#plays').on('click','li',self.changePlayNav.bind(self));
        $('.boll-list').on('click','.btn-boll',self.toggleCodeActive.bind(self));
        $('#confirm_sel_code').on('click',self.addCode.bind(self));
        $('.dxjo').on('click','li',self.assistHandle.bind(self));
        $('.qkmethod').on('click','.btn-middle',self.getRandomCode.bind(self));
    }
}

export default Lottery;
