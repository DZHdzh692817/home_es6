/*
function one_lesson(){
    //变量生命 let
    let ba = 'aaaa';
    console.log(ba);
}
one_lesson();
*/
export default function() {
    window.console.log("aaaa")
}

//es5中常量的写法
Object.defineProperty(window,"PI2",{
    value:3.1415926,
    writable:false,//不可写变成只读
})
console.log(window.PI2);

//es6的常量写法
const PI = 3.14
console.log(PI);

//作用域
//es5写法
var callbacks = [];
for(var i=0;i<=2;i++){
    callbacks[i]=function () {
        return i*2;//这是是闭包 i=3?
    }
}
console.table([
    callbacks[0](),
    callbacks[1](),
    callbacks[2](),
])

//es6写法 let生命的变量有"块作用域"
const callbacks2 = [];
for(let j=0;j<=2;j++){
    callbacks2[j]=function () {
        return j*2;
    }
}
console.table([
    callbacks2[0](),
    callbacks2[1](),
    callbacks2[2](),
])

{
    function foo() {
        return 1;
    }
    console.log("foo()===1",foo()===1);
}

//箭头函数
//es5
/*function aa() {}*/
//es6
/*()=>{}*/
{
    //es5
    var evens = [1,2,3,4,5];
    var odds = evens.map(function(v){//遍历
        return v + 1;
    })
    console.log(evens,odds);
}

{
    //es6
    let evens = [1,2,3,4,5];
    let odds = evens.map(v => v+1);
    console.log(evens,odds);
}

{//es3 es5写法
    var factory = function () {
        this.a = 'a';
        this.b = 'b';
        this.c={
            a:'a+',
            b:function () {
                return this.a;
            }
        }
    }
    console.log(new factory().c.b());//输出a+
}

{//es6写法
    let factory = function () {
        this.a = 'a';
        this.b = 'b';
        this.c={
            a:'a+',
            b:()=>{//箭头函数
                return this.a;
            }
        }
    }
    console.log(new factory().c.b());//输出a
}

//默认参数
{
    //es3/es5默认参数写法
    function f(x, y, z) {
        if(y === undefined){
            y = 7;
        }
        if(z === undefined){
            z = 42;
        }
        return x + y + z;
    }
    console.log(f(1,3));
}

{
    //es6默认参数写法
    function ffs(x, y = 7, z = 42) {
        return x + y + z;
    }
    console.log(ffs(1,3));
}

{
    //es3 es5可变参数
    function fx() {
        //console.log(x);
        //求和运算
        var a = Array.prototype.slice.call(arguments);
        var sum = 0;
        a.forEach(function (item) {
            sum += item * 1;
        })
        return sum;
    }
    console.log(fx(1,2,3));
}

{
    //es6可变参数
    function  fxo(...a) {
        let sum = 0;
        a.forEach(item=>{
            sum += item * 1;
        })
        return sum;
    }
    console.log(fxo(1,2,3,6));
}

{
    //es5合并数组
    var params = ['hello', true, 7];
    var other = [1,2].concat(params);
    console.log(other);
}

{
    //es6 利用扩展运算符合并数组
    var params = ['hello', true, 7];
    var other = [1,2,...params];
    console.log(other);
}

//对象代理
{
    //es3 es5数据保护
    var Person = function () {
        var data = {
            name:'es3',
            sex:'male',
            age:15
        }
        this.get = function (key) {
            return data[key];
        }
        this.set = function (key,value) {
            if(key !== 'sex'){
                data[key] = value;
            }
        }
    }
    //声明一个实例
    var person = new Person();
    //读取
    console.table({name:person.get('name'), sex:person.get('sex'), age:person.get('age')});
    //修改
    person.set('name','es3-cname');
    console.table({name:person.get('name'), sex:person.get('sex'), age:person.get('age')});

    person.set('sex','female');
    console.table({name:person.get('name'), sex:person.get('sex'), age:person.get('age')});
}

{
    //es5数据保护
    var Person = {
        name : 'es5',
        age : 15
    };
    Object.defineProperty(Person,'sex',{
       writable:false,
       value:'male'
    });
    console.table({name:Person.name,age:Person.age,sex:Person.sex});

    Person.name = 'es5-cname';
    console.table({name:Person.name,age:Person.age,sex:Person.sex});

    //报错了 Cannot assign to read only property 'sex' of object '#<Object>'
    //Person.sex = 'female';
    //console.table({name:Person.name,age:Person.age,sex:Person.sex});

}

{
    //es6数据保护
    let Person = {
        name : 'es6',
        sex  : 'male',
        age  : 15
    };
    //代理
    let person = new Proxy(Person,{
        get(target, key){
            return target[key];
        },
        set(target,key,value){
            if(key !== 'sex'){
                target[key] = value;
            }
        }
    });
    console.table({name:person.name,age:person.age,sex:person.sex});
    //报错了 person.sex不允许被修改
    /*try {
        person.sex='female';
    }catch (e) {
        console.log(e);
    }finally {

    }*/
}