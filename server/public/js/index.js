/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _test = __webpack_require__(2);

	var _test2 = _interopRequireDefault(_test);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _test2.default)();
	/*
	class Test{
	    constructor(){
	        this.a='hello world';
	    }
	}

	let test = new Test();
	document.body.innerHTML=test.a;
	 */
	//import './class/test';

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    window.console.log("aaaa");
	};

	//es5中常量的写法
	Object.defineProperty(window, "PI2", {
	    value: 3.1415926,
	    writable: false //不可写变成只读
	}); /*
	    function one_lesson(){
	        //变量生命 let
	        let ba = 'aaaa';
	        console.log(ba);
	    }
	    one_lesson();
	    */

	console.log(window.PI2);

	//es6的常量写法
	var PI = 3.14;
	console.log(PI);

	//作用域
	//es5写法
	var callbacks = [];
	for (var i = 0; i <= 2; i++) {
	    callbacks[i] = function () {
	        return i * 2; //这是是闭包 i=3?
	    };
	}
	console.table([callbacks[0](), callbacks[1](), callbacks[2]()]);

	//es6写法 let生命的变量有"块作用域"
	var callbacks2 = [];

	var _loop = function _loop(j) {
	    callbacks2[j] = function () {
	        return j * 2;
	    };
	};

	for (var j = 0; j <= 2; j++) {
	    _loop(j);
	}
	console.table([callbacks2[0](), callbacks2[1](), callbacks2[2]()]);

	{
	    var foo = function foo() {
	        return 1;
	    };

	    console.log("foo()===1", foo() === 1);
	}

	//箭头函数
	//es5
	/*function aa() {}*/
	//es6
	/*()=>{}*/
	{
	    //es5
	    var evens = [1, 2, 3, 4, 5];
	    var odds = evens.map(function (v) {
	        //遍历
	        return v + 1;
	    });
	    console.log(evens, odds);
	}

	{
	    //es6
	    var _evens = [1, 2, 3, 4, 5];
	    var _odds = _evens.map(function (v) {
	        return v + 1;
	    });
	    console.log(_evens, _odds);
	}

	{
	    //es3 es5写法
	    var factory = function factory() {
	        this.a = 'a';
	        this.b = 'b';
	        this.c = {
	            a: 'a+',
	            b: function b() {
	                return this.a;
	            }
	        };
	    };
	    console.log(new factory().c.b()); //输出a+
	}

	{
	    //es6写法
	    var _factory = function _factory() {
	        var _this = this;

	        this.a = 'a';
	        this.b = 'b';
	        this.c = {
	            a: 'a+',
	            b: function b() {
	                //箭头函数
	                return _this.a;
	            }
	        };
	    };
	    console.log(new _factory().c.b()); //输出a
	}

	//默认参数
	{
	    //es3/es5默认参数写法
	    var f = function f(x, y, z) {
	        if (y === undefined) {
	            y = 7;
	        }
	        if (z === undefined) {
	            z = 42;
	        }
	        return x + y + z;
	    };

	    console.log(f(1, 3));
	}

	{
	    //es6默认参数写法
	    var ffs = function ffs(x) {
	        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
	        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 42;

	        return x + y + z;
	    };

	    console.log(ffs(1, 3));
	}

	{
	    //es3 es5可变参数
	    var fx = function fx() {
	        //console.log(x);
	        //求和运算
	        var a = Array.prototype.slice.call(arguments);
	        var sum = 0;
	        a.forEach(function (item) {
	            sum += item * 1;
	        });
	        return sum;
	    };

	    console.log(fx(1, 2, 3));
	}

	{
	    //es6可变参数
	    var fxo = function fxo() {
	        var sum = 0;

	        for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
	            a[_key] = arguments[_key];
	        }

	        a.forEach(function (item) {
	            sum += item * 1;
	        });
	        return sum;
	    };

	    console.log(fxo(1, 2, 3, 6));
	}

	{
	    //es5合并数组
	    var params = ['hello', true, 7];
	    var other = [1, 2].concat(params);
	    console.log(other);
	}

	{
	    //es6 利用扩展运算符合并数组
	    var params = ['hello', true, 7];
	    var other = [1, 2].concat(params);
	    console.log(other);
	}

	//对象代理
	{
	    //es3 es5数据保护
	    var Person = function Person() {
	        var data = {
	            name: 'es3',
	            sex: 'male',
	            age: 15
	        };
	        this.get = function (key) {
	            return data[key];
	        };
	        this.set = function (key, value) {
	            if (key !== 'sex') {
	                data[key] = value;
	            }
	        };
	    };
	    //声明一个实例
	    var person = new Person();
	    //读取
	    console.table({ name: person.get('name'), sex: person.get('sex'), age: person.get('age') });
	    //修改
	    person.set('name', 'es3-cname');
	    console.table({ name: person.get('name'), sex: person.get('sex'), age: person.get('age') });

	    person.set('sex', 'female');
	    console.table({ name: person.get('name'), sex: person.get('sex'), age: person.get('age') });
	}

	{
	    //es5数据保护
	    var Person = {
	        name: 'es5',
	        age: 15
	    };
	    Object.defineProperty(Person, 'sex', {
	        writable: false,
	        value: 'male'
	    });
	    console.table({ name: Person.name, age: Person.age, sex: Person.sex });

	    Person.name = 'es5-cname';
	    console.table({ name: Person.name, age: Person.age, sex: Person.sex });

	    //报错了 Cannot assign to read only property 'sex' of object '#<Object>'
	    //Person.sex = 'female';
	    //console.table({name:Person.name,age:Person.age,sex:Person.sex});
	}

	{
	    //es6数据保护
	    var _Person = {
	        name: 'es6',
	        sex: 'male',
	        age: 15
	    };
	    //代理
	    var _person = new Proxy(_Person, {
	        get: function get(target, key) {
	            return target[key];
	        },
	        set: function set(target, key, value) {
	            if (key !== 'sex') {
	                target[key] = value;
	            }
	        }
	    });
	    console.table({ name: _person.name, age: _person.age, sex: _person.sex });
	    //报错了 person.sex不允许被修改
	    /*try {
	        person.sex='female';
	    }catch (e) {
	        console.log(e);
	    }finally {
	      }*/
	}

/***/ })
/******/ ]);