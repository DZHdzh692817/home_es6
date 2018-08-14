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

/***/ })
/******/ ]);