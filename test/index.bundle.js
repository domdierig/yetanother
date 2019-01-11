/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/ya.js":
/*!********************!*\
  !*** ../src/ya.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const createYaComponent = __webpack_require__(/*! ./yaComponentCreator.js */ \"../src/yaComponentCreator.js\");\r\n\r\nclass YA {\r\n    constructor() {\r\n        \r\n    }\r\n\r\n    start(objConstructor) {\r\n        createYaComponent(objConstructor);\r\n    }\r\n}\r\n\r\nmodule.exports = YA;\n\n//# sourceURL=webpack:///../src/ya.js?");

/***/ }),

/***/ "../src/yaComponentCreator.js":
/*!************************************!*\
  !*** ../src/yaComponentCreator.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = (obj) => {\r\n    for(const key in obj) {\r\n        debugger;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n// createYAModule(jsObj, htmlElement) {\r\n//     for(let key in jsObj) {\r\n//         if(key !== \"view\") {\r\n//             let value = jsObj[key];\r\n\r\n//             Object.defineProperty(jsObj, key, {\r\n//                 get: function() {\r\n//                     return this[\"_\" + key]\r\n//                 },\r\n//                 set: function(input) {\r\n//                     this[\"_\" + key] = input;\r\n//                     if(this[key + \"_f\"]) {\r\n//                         this[key + \"_f\"]()\r\n//                     }\r\n//                 }\r\n//             });\r\n\r\n//             jsObj[key] = value;\r\n//         }            \r\n//     }\r\n\r\n//     return new YAModule(jsObj.constructor.name, htmlElement, jsObj);        \r\n// }\n\n//# sourceURL=webpack:///../src/yaComponentCreator.js?");

/***/ }),

/***/ "./HelloWorld.js":
/*!***********************!*\
  !*** ./HelloWorld.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HelloWorld; });\nclass HelloWorld {\r\n    constructor() {\r\n        this.template = '<div><span>{{ text }}</span> <span ya-update=\"count\"></span> <span>{{text2}}</span></div><button class=\"button\" ya-click=\"clickfunction\">Click mich</button>';\r\n        this.text = \"I was clicked\"; \r\n        this.text2 = \"times.\"\r\n        this.count = 0;\r\n    }\r\n\r\n    clickfunction() {\r\n        this.count++;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./HelloWorld.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HelloWorld_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelloWorld.js */ \"./HelloWorld.js\");\n/* harmony import */ var _src_ya_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ya.js */ \"../src/ya.js\");\n/* harmony import */ var _src_ya_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_ya_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst ya = new _src_ya_js__WEBPACK_IMPORTED_MODULE_1___default.a();\r\ndebugger;\r\nya.start(_HelloWorld_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });