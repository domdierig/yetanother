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

const createYaComponent = __webpack_require__(/*! ./yaComponentCreator.js */ "../src/yaComponentCreator.js");

class YA {
    constructor() {
        
    }

    start(objConstructor) {
        let yaComponent = createYaComponent(objConstructor);
    }
}

module.exports = YA;

/***/ }),

/***/ "../src/yaComponent.js":
/*!*****************************!*\
  !*** ../src/yaComponent.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

class YaComponent {
    constructor(domElement, appComponent) {
        this.domElement = domElement;
        this.appComponent = appComponent;
    }
}

module.exports = YaComponent;

/***/ }),

/***/ "../src/yaComponentCreator.js":
/*!************************************!*\
  !*** ../src/yaComponentCreator.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const YaComponent = __webpack_require__(/*! ./yaComponent.js */ "../src/yaComponent.js");
const parseTemplate = __webpack_require__(/*! ./yaTemplateParser.js */ "../src/yaTemplateParser.js");

const findComponentElements = (name) => {
    return document.getElementsByTagName(name.toLowerCase());
}

const createSetAndGetMethods = (component) => {
    for(const key in component) {
        const value = component[key];

        Object.defineProperty(component, key, {
            get: () => {
                return this["_" + key];
            },
            set: (input) => {
                this["_" + key] = input;
                if(this[key+ "_f"]) {
                    this[key + "_f"]();
                }
            }
        });

        component[key] = value;
    }
}

const setStaticsToTemplate = (templateElement, appComponent) => {

}

const setDynamicsToTemplate = (templateElement, appComponent) => {

}

const setDirectivesToTemplate = (templateElement, appComponent) => {

}

module.exports = (appComponentConstructor) => {
    const elements = findComponentElements(appComponentConstructor.name);

    for(const yaComponentElement of elements) {        
        let appComponent = new appComponentConstructor();
        let templateElement = parseTemplate(appComponent.template);
        
        createSetAndGetMethods(appComponent);
        
        setStaticsToTemplate(templateElement, appComponent);
        setDynamicsToTemplate(templateElement, appComponent);
        setDirectivesToTemplate(templateElement, appComponent);

        //add template element to element

        const yaComponent = new YaComponent(yaComponentElement, appComponent);
    }
}



/***/ }),

/***/ "../src/yaTemplateParser.js":
/*!**********************************!*\
  !*** ../src/yaTemplateParser.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (templateString) => {
    let parser = new DOMParser();
    let tempDoc = parser.parseFromString(templateString, "text/html");
    if(tempDoc.childNodes[0].childNodes[1].childNodes.length > 1) {
        console.error("YA only supports one top level element in a component template");
    }
    return tempDoc.childNodes[0].childNodes[1].childNodes[0];
}

/***/ }),

/***/ "./HelloWorld.js":
/*!***********************!*\
  !*** ./HelloWorld.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelloWorld; });
class HelloWorld {
    constructor() {
        this.template = '<div><span>{{ text }}</span> <span ya-update="count"></span> <span>{{text2}}</span><button class="button" ya-click="clickfunction">Click mich</button></div>';
        this.text = "I was clicked"; 
        this.text2 = "times."
        this.count = 0;
    }

    clickfunction() {
        this.count++;
    }
}

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HelloWorld_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelloWorld.js */ "./HelloWorld.js");
/* harmony import */ var _src_ya_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ya.js */ "../src/ya.js");
/* harmony import */ var _src_ya_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_ya_js__WEBPACK_IMPORTED_MODULE_1__);



const ya = new _src_ya_js__WEBPACK_IMPORTED_MODULE_1___default.a();
ya.start(_HelloWorld_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map