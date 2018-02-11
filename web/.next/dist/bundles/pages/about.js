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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DefaultLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = '/Users/manderson/Projects/MartianRover/2018/RubyYou/web/components/DefaultLayout.js';






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

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: layoutStyle, className: 'jsx-4180666500' + ' ' + 'jsx-4180666500',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }),
    props.children,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Footer__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '4180666500',
      css: 'html,body,#__next{height:100%;}body{background:#F7F7F0 url(\'https://www.callruby.com/wp-content/themes/callruby-theme/images/bg-texture-lines-blue-toponly.png\') repeat-x top left;font-family:"Trade Gothic W01 Light","Helvetica","Arial",sans-serif;font-size:14px;line-height:1.4;color:#333;font-weight:400;text-align:center;margin:0;padding:0;}a,a:active,a:visited{color:#352E1B;text-decoration:underline;font-size:12px;font-weigth:300;}a:hover{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGVmYXVsdExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQnVCLEFBR3FCLEFBR21JLEFBY2pJLEFBTU8sWUF0QnZCLEVBaUI0QixPQU01QixtQkFMaUIsZUFDQyxnQkFDbEIsd0VBakJzRSxvRUFDckQsZUFDQyxnQkFDTCxXQUNLLGdCQUNFLGtCQUNULFNBQ0MsVUFDWiIsImZpbGUiOiJjb21wb25lbnRzL0RlZmF1bHRMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hbmRlcnNvbi9Qcm9qZWN0cy9NYXJ0aWFuUm92ZXIvMjAxOC9SdWJ5WW91L3dlYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5cbi8vIGNvbnN0IGdsb2JhbFN0eWxlID0ge1xuLy8gICBjb2xvcjogJyMzNTJFMUInLFxuLy8gICBmb250LWZhbWlseTogJ1wiVHJhZGUgR290aGljIFcwMSBMaWdodFwiLFwiSGVsdmV0aWNhXCIsXCJBcmlhbFwiLHNhbnMtc2VyaWYnLFxuLy8gICBmb250LXNpemU6ICcxOHB4Jyxcbi8vICAgZm9udC13ZWlnaHQ6IDQwMCxcbi8vIH1cblxuY29uc3QgY29sb3JzID0ge1xuICBvcmFuZ2U6ICcjRjA3NDRGJyxcbiAgeWVsbG93OiAnI0Y4QTU0MycsXG4gIG1hZ2VudGE6ICcjQzUzNTY5Jyxcbn07XG5cbmNvbnN0IGxheW91dFN0eWxlID0ge1xuICBtYXJnaW46IDAsXG4gIHBhZGRpbmc6IDAsXG4gIGhlaWdodDogJzgwJScsXG59O1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxuICAgIDxIZWFkZXIgLz5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPEZvb3RlciAvPlxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICBodG1sLCBib2R5LCAjX19uZXh0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGN0Y3RjAgdXJsKCdodHRwczovL3d3dy5jYWxscnVieS5jb20vd3AtY29udGVudC90aGVtZXMvY2FsbHJ1YnktdGhlbWUvaW1hZ2VzL2JnLXRleHR1cmUtbGluZXMtYmx1ZS10b3Bvbmx5LnBuZycpIHJlcGVhdC14IHRvcCBsZWZ0O1xuICAgICAgICBmb250LWZhbWlseTogXCJUcmFkZSBHb3RoaWMgVzAxIExpZ2h0XCIsXCJIZWx2ZXRpY2FcIixcIkFyaWFsXCIsc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIGEsXG4gICAgICBhOmFjdGl2ZSxcbiAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgIGNvbG9yOiAjMzUyRTFCO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWd0aDogMzAwO1xuICAgICAgfVxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiLy9mYXN0LmZvbnRzLm5ldC9qc2FwaS80MzJhMGFhYi02OGFlLTRkYjktYjZjMC02OTY3YzgxOTc0NzkuanNcIj48L3NjcmlwdD5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=components/DefaultLayout.js */'
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { type: 'text/javascript', src: '//fast.fonts.net/jsapi/432a0aab-68ae-4db9-b6c0-6967c8197479.js', className: 'jsx-4180666500' + ' ' + 'jsx-4180666500',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = '/Users/manderson/Projects/MartianRover/2018/RubyYou/web/components/Footer.js';



var linkStyle = {
  padding: '0 25px'
};

var containerStyle = {
  marginTop: 0
};

var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: containerStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        'Home'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        'About'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/manderson/Projects/MartianRover/2018/RubyYou/web/components/Header.js";

var Header = function Header() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 2
        }
    });
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_DefaultLayout__ = __webpack_require__("./components/DefaultLayout.js");
var _jsxFileName = '/Users/manderson/Projects/MartianRover/2018/RubyYou/web/pages/about.js';



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__components_DefaultLayout__["a" /* default */],
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
      'About Ruby You'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        'make your own Ruby yourself'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        'digi-bongo comedy funk'
      )
    )
  );
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/about.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map