module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// CONCATENATED MODULE: ./components/Header.js
var _jsxFileName = "/Users/manderson/Projects/MartianRover/2018/RubyYou/web/components/Header.js";

var Header_Header = function Header() {
    return external__react__default.a.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 2
        }
    });
};

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Footer.js
var Footer__jsxFileName = '/Users/manderson/Projects/MartianRover/2018/RubyYou/web/components/Footer.js';



var linkStyle = {
  padding: '0 25px'
};

var containerStyle = {
  marginTop: 0
};

var Footer_Footer = function Footer() {
  return external__react__default.a.createElement(
    'div',
    { style: containerStyle, __source: {
        fileName: Footer__jsxFileName,
        lineNumber: 12
      }
    },
    external__react__default.a.createElement(
      link__default.a,
      { href: '/about', __source: {
          fileName: Footer__jsxFileName,
          lineNumber: 18
        }
      },
      external__react__default.a.createElement(
        'a',
        { style: linkStyle, __source: {
            fileName: Footer__jsxFileName,
            lineNumber: 19
          }
        },
        'About'
      )
    )
  );
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/DefaultLayout.js
var DefaultLayout__jsxFileName = '/Users/manderson/Projects/MartianRover/2018/RubyYou/web/components/DefaultLayout.js';






// const globalStyle = {
//   color: '#352E1B',
//   font-family: '"Trade Gothic W01 Light","Helvetica","Arial",sans-serif',
//   font-size: '18px',
//   font-weight: 400,
// }

var colors = {
  orange: '#F0744F',
  yellow: '#F8A543',
  magenta: '#C53569'
};

var layoutStyle = {
  margin: 0,
  padding: 0,
  height: '80%'
};

var DefaultLayout_Layout = function Layout(props) {
  return external__react__default.a.createElement(
    'div',
    { style: layoutStyle, className: 'jsx-4180666500' + ' ' + 'jsx-4180666500',
      __source: {
        fileName: DefaultLayout__jsxFileName,
        lineNumber: 24
      }
    },
    external__react__default.a.createElement(components_Header, {
      __source: {
        fileName: DefaultLayout__jsxFileName,
        lineNumber: 25
      }
    }),
    props.children,
    external__react__default.a.createElement(components_Footer, {
      __source: {
        fileName: DefaultLayout__jsxFileName,
        lineNumber: 27
      }
    }),
    external__react__default.a.createElement(style__default.a, {
      styleId: '4180666500',
      css: 'html,body,#__next{height:100%;}body{background:#F7F7F0 url(\'https://www.callruby.com/wp-content/themes/callruby-theme/images/bg-texture-lines-blue-toponly.png\') repeat-x top left;font-family:"Trade Gothic W01 Light","Helvetica","Arial",sans-serif;font-size:14px;line-height:1.4;color:#333;font-weight:400;text-align:center;margin:0;padding:0;}a,a:active,a:visited{color:#352E1B;text-decoration:underline;font-size:12px;font-weigth:300;}a:hover{text-decoration:none;}'
    }),
    external__react__default.a.createElement('script', { type: 'text/javascript', src: '//fast.fonts.net/jsapi/432a0aab-68ae-4db9-b6c0-6967c8197479.js', className: 'jsx-4180666500' + ' ' + 'jsx-4180666500',
      __source: {
        fileName: DefaultLayout__jsxFileName,
        lineNumber: 56
      }
    })
  );
};

/* harmony default export */ var DefaultLayout = __webpack_exports__["a"] = (DefaultLayout_Layout);

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_DefaultLayout_js__ = __webpack_require__(3);
var _jsxFileName = '/Users/manderson/Projects/MartianRover/2018/RubyYou/web/pages/post.js';



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__components_DefaultLayout_js__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      props.url.query.title
    )
  );
});

/***/ })
/******/ ]);