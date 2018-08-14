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
