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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = '/Users/manderson/Projects/MartianRover/2018/RubyYou/web/components/Footer.js';





var containerStyle = {
  marginTop: 0
};

var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: containerStyle, className: 'jsx-2475250281' + ' ' + 'jsx-2475250281',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '2475250281',
      css: 'a.jsx-2475250281{display:block;border:1px solid red;padding:0 25px;cursor:pointer;}a.jsx-2475250281:hover{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCb0IsQUFHMkIsQUFNTyxjQUxBLE9BTXZCLGNBTGlCLGVBQ0EsZUFDakIiLCJmaWxlIjoiY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hbmRlcnNvbi9Qcm9qZWN0cy9NYXJ0aWFuUm92ZXIvMjAxOC9SdWJ5WW91L3dlYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICBtYXJnaW5Ub3A6IDAsXG59O1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxuICAgICAgey8qXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGE+QWJvdXQhPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAqL31cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl19 */\n/*@ sourceURL=components/Footer.js */'
    })
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

/***/ "./components/RubyBooth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/manderson/Projects/MartianRover/2018/RubyYou/web/components/RubyBooth.js';




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




// See 'https://www.dropbox.com/s/ll8wqvsdmp2e6fp/RubysGame.svg?dl=0';
var svgRubysGame = '/static/RubysGame.svg';

var w = typeof window === 'undefined' ? {} : window;

var Clickers = function Clickers(props) {
  console.log('Clicker props', props);
  var hairClicked = function hairClicked() {
    console.log('hair was clicked ^_');
    var el = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(props.svg);
    //.getElementById('Shape');
    console.log('el', el);
  };
  var faceClicked = function faceClicked() {
    console.log('face was clicked ^_');
  };
  var clothesClicked = function clothesClicked() {
    console.log('clothes were clicked ^_');
  };
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-1068878822' + ' ' + 'jsx-1068878822',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { id: 'clickers', className: 'jsx-1068878822' + ' ' + 'jsx-1068878822',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { id: 'hair-clicker', onClick: hairClicked, className: 'jsx-1068878822' + ' ' + 'jsx-1068878822',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { id: 'face-clicker', onClick: faceClicked, className: 'jsx-1068878822' + ' ' + 'jsx-1068878822',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { id: 'clothes-clicker', onClick: clothesClicked, className: 'jsx-1068878822' + ' ' + 'jsx-1068878822',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        },
        'C'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '1068878822',
      css: '#clickers.jsx-1068878822{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;width:100%;height:100%;z-index:10;}#clickers.jsx-1068878822 div.jsx-1068878822{border:none;height:100%;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUnVieUJvb3RoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCb0IsQUFHMEIsQUFRRCxZQUNELFlBQ0EsV0FDYix1Q0FWd0IsOEVBQ0osa0JBQ1AsV0FDQyxZQUNELFdBQ2IiLCJmaWxlIjoiY29tcG9uZW50cy9SdWJ5Qm9vdGguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hbmRlcnNvbi9Qcm9qZWN0cy9NYXJ0aWFuUm92ZXIvMjAxOC9SdWJ5WW91L3dlYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcblxuLy8gU2VlICdodHRwczovL3d3dy5kcm9wYm94LmNvbS9zL2xsOHdxdnNkbXAyZTZmcC9SdWJ5c0dhbWUuc3ZnP2RsPTAnO1xuY29uc3Qgc3ZnUnVieXNHYW1lID0gJy9zdGF0aWMvUnVieXNHYW1lLnN2Zyc7XG5cbmNvbnN0IHcgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IHt9IDogd2luZG93O1xuXG5jb25zdCBDbGlja2VycyA9IChwcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZygnQ2xpY2tlciBwcm9wcycsIHByb3BzKTtcbiAgY29uc3QgaGFpckNsaWNrZWQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2hhaXIgd2FzIGNsaWNrZWQgXl8nKTtcbiAgICB2YXIgZWwgPSBmaW5kRE9NTm9kZShwcm9wcy5zdmcpO1xuICAgIC8vLmdldEVsZW1lbnRCeUlkKCdTaGFwZScpO1xuICAgIGNvbnNvbGUubG9nKCdlbCcsIGVsKTtcbiAgfVxuICBjb25zdCBmYWNlQ2xpY2tlZCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZmFjZSB3YXMgY2xpY2tlZCBeXycpO1xuICB9XG4gIGNvbnN0IGNsb3RoZXNDbGlja2VkID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjbG90aGVzIHdlcmUgY2xpY2tlZCBeXycpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgaWQ9J2NsaWNrZXJzJz5cbiAgICAgICAgPGRpdiBpZD0naGFpci1jbGlja2VyJyBvbkNsaWNrPXtoYWlyQ2xpY2tlZH0+PC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9J2ZhY2UtY2xpY2tlcicgb25DbGljaz17ZmFjZUNsaWNrZWR9PjwvZGl2PlxuICAgICAgICA8ZGl2IGlkPSdjbG90aGVzLWNsaWNrZXInIG9uQ2xpY2s9e2Nsb3RoZXNDbGlja2VkfT5DPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI2NsaWNrZXJzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2NsaWNrZXJzIGRpdiB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICk7XG59XG5cbmNsYXNzIFJ1YnlCb290aCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN2ZyA9IG51bGw7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgICB3LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cblxuICB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHcuaW5uZXJIZWlnaHQgfSk7XG4gIH1cblxuICBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdlJywgZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjcmVlbldpZHRoID0gdGhpcy5zdGF0ZS53aWR0aDtcbiAgICBjb25zdCBzY3JlZW5IZWlnaHQgPSB0aGlzLnN0YXRlLmhlaWdodDtcbiAgICBjb25zdCB3ID0gc2NyZWVuV2lkdGggKiAwLjg7XG4gICAgY29uc3QgaCA9IHNjcmVlbkhlaWdodCAqIDAuNztcbiAgICBjb25zdCBmcmFtZVdpZHRoID0gTWF0aC5taW4oaCwgdyk7XG4gICAgLy9jb25zdCBmcmFtZVdpZHRoID0gc2NyZWVuV2lkdGggKiAwLjk1O1xuICAgIGNvbnN0IG1hc2tSYWRpdXMgPSBmcmFtZVdpZHRoIC8gMi4wO1xuICAgIGNvbnN0IGN4ID0gKHNjcmVlbldpZHRoIC8gMi4wKTtcblxuICAgIGNvbnN0IHN2Z1N0eWxlID0ge1xuICAgICAgd2lkdGg6IGZyYW1lV2lkdGgsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGxlZnQ6IGN4IC0gZnJhbWVXaWR0aCAvIDIsXG4gICAgICB0b3A6IC1mcmFtZVdpZHRoICogMC4xNSxcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OicxMDAlJ319PlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8Q2xpY2tlcnMgc3ZnPXt0aGlzLnN2Z30gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3V0cycgc3R5bGU9e3tiYWNrZ3JvdW5kOidub25lJ319PlxuICAgICAgICAgICAgPG9iamVjdCB0eXBlPSdpbWFnZS9zdmcreG1sJyBkYXRhPXtzdmdSdWJ5c0dhbWV9IHN0eWxlPXtzdmdTdHlsZX0gb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICAgIHJlZj17KG4pID0+IHsgdGhpcy5zdmcgPSBuOyB9IH0+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9e3NjcmVlbldpZHRofSBoZWlnaHQ9e21hc2tSYWRpdXMgKiAyLjB9PlxuICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgPGNsaXBQYXRoIGlkPSdjaXJjbGUtbWFzayc+XG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgICBjeD17Y3h9XG4gICAgICAgICAgICAgICAgICAgICAgY3k9e21hc2tSYWRpdXN9XG4gICAgICAgICAgICAgICAgICAgICAgcj17bWFza1JhZGl1c31cbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9JyNlZmVmZWYnXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9JzEnXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICA8L3N2Zz5cblxuICAgICAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBTVkdcbiAgICAgICAgICAgIDwvb2JqZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1hc2sge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ndXRzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdWJ5Qm9vdGg7XG4iXX0= */\n/*@ sourceURL=components/RubyBooth.js */'
    })
  );
};

var RubyBooth = function (_Component) {
  _inherits(RubyBooth, _Component);

  function RubyBooth(props) {
    _classCallCheck(this, RubyBooth);

    var _this = _possibleConstructorReturn(this, (RubyBooth.__proto__ || Object.getPrototypeOf(RubyBooth)).call(this, props));

    _this.clickHandler = function (e) {
      console.log('e', e);
    };

    _this.state = { width: 0, height: 0 };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
    _this.svg = null;
    return _this;
  }

  _createClass(RubyBooth, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateWindowDimensions();
      w.addEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      w.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'updateWindowDimensions',
    value: function updateWindowDimensions() {
      this.setState({ width: w.innerWidth, height: w.innerHeight });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var screenWidth = this.state.width;
      var screenHeight = this.state.height;
      var w = screenWidth * 0.8;
      var h = screenHeight * 0.7;
      var frameWidth = Math.min(h, w);
      //const frameWidth = screenWidth * 0.95;
      var maskRadius = frameWidth / 2.0;
      var cx = screenWidth / 2.0;

      var svgStyle = {
        width: frameWidth,
        position: 'relative',
        left: cx - frameWidth / 2,
        top: -frameWidth * 0.15,
        background: 'transparent'
      };
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { style: { height: '100%' }, className: 'jsx-1068878822' + ' ' + 'jsx-3237424453',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'section',
          {
            className: 'jsx-1068878822' + ' ' + 'jsx-3237424453',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Clickers, { svg: this.svg, __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { style: { background: 'none' }, className: 'jsx-1068878822' + ' ' + ('jsx-3237424453' + ' ' + 'guts' || ''),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'object',
              { type: 'image/svg+xml', data: svgRubysGame, style: svgStyle, onClick: this.clickHandler,
                ref: function ref(n) {
                  _this2.svg = n;
                }, className: 'jsx-1068878822' + ' ' + 'jsx-3237424453',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 97
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'svg',
                { width: screenWidth, height: maskRadius * 2.0, className: 'jsx-1068878822' + ' ' + 'jsx-3237424453',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'defs',
                  {
                    className: 'jsx-1068878822' + ' ' + 'jsx-3237424453',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 100
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'clipPath',
                    { id: 'circle-mask', className: 'jsx-1068878822' + ' ' + 'jsx-3237424453',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 101
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('circle', {
                      cx: cx,
                      cy: maskRadius,
                      r: maskRadius,
                      stroke: '#efefef',
                      strokeWidth: '1',
                      fill: 'none',
                      className: 'jsx-1068878822' + ' ' + 'jsx-3237424453',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102
                      }
                    })
                  )
                )
              ),
              'Your browser does not support SVG'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3237424453',
          css: 'section.jsx-3237424453{position:relative;width:100%;height:100%;margin:0 auto;}.mask.jsx-3237424453{position:absolute;}.guts.jsx-3237424453{position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUnVieUJvb3RoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFIb0IsQUFHK0IsQUFPQSxBQUlBLGtCQVZQLEFBT2IsQUFJQSxXQVZjLFlBQ0UsY0FDaEIiLCJmaWxlIjoiY29tcG9uZW50cy9SdWJ5Qm9vdGguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hbmRlcnNvbi9Qcm9qZWN0cy9NYXJ0aWFuUm92ZXIvMjAxOC9SdWJ5WW91L3dlYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcblxuLy8gU2VlICdodHRwczovL3d3dy5kcm9wYm94LmNvbS9zL2xsOHdxdnNkbXAyZTZmcC9SdWJ5c0dhbWUuc3ZnP2RsPTAnO1xuY29uc3Qgc3ZnUnVieXNHYW1lID0gJy9zdGF0aWMvUnVieXNHYW1lLnN2Zyc7XG5cbmNvbnN0IHcgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IHt9IDogd2luZG93O1xuXG5jb25zdCBDbGlja2VycyA9IChwcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZygnQ2xpY2tlciBwcm9wcycsIHByb3BzKTtcbiAgY29uc3QgaGFpckNsaWNrZWQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2hhaXIgd2FzIGNsaWNrZWQgXl8nKTtcbiAgICB2YXIgZWwgPSBmaW5kRE9NTm9kZShwcm9wcy5zdmcpO1xuICAgIC8vLmdldEVsZW1lbnRCeUlkKCdTaGFwZScpO1xuICAgIGNvbnNvbGUubG9nKCdlbCcsIGVsKTtcbiAgfVxuICBjb25zdCBmYWNlQ2xpY2tlZCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZmFjZSB3YXMgY2xpY2tlZCBeXycpO1xuICB9XG4gIGNvbnN0IGNsb3RoZXNDbGlja2VkID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjbG90aGVzIHdlcmUgY2xpY2tlZCBeXycpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgaWQ9J2NsaWNrZXJzJz5cbiAgICAgICAgPGRpdiBpZD0naGFpci1jbGlja2VyJyBvbkNsaWNrPXtoYWlyQ2xpY2tlZH0+PC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9J2ZhY2UtY2xpY2tlcicgb25DbGljaz17ZmFjZUNsaWNrZWR9PjwvZGl2PlxuICAgICAgICA8ZGl2IGlkPSdjbG90aGVzLWNsaWNrZXInIG9uQ2xpY2s9e2Nsb3RoZXNDbGlja2VkfT5DPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI2NsaWNrZXJzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2NsaWNrZXJzIGRpdiB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICk7XG59XG5cbmNsYXNzIFJ1YnlCb290aCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN2ZyA9IG51bGw7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgICB3LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cblxuICB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHcuaW5uZXJIZWlnaHQgfSk7XG4gIH1cblxuICBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdlJywgZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjcmVlbldpZHRoID0gdGhpcy5zdGF0ZS53aWR0aDtcbiAgICBjb25zdCBzY3JlZW5IZWlnaHQgPSB0aGlzLnN0YXRlLmhlaWdodDtcbiAgICBjb25zdCB3ID0gc2NyZWVuV2lkdGggKiAwLjg7XG4gICAgY29uc3QgaCA9IHNjcmVlbkhlaWdodCAqIDAuNztcbiAgICBjb25zdCBmcmFtZVdpZHRoID0gTWF0aC5taW4oaCwgdyk7XG4gICAgLy9jb25zdCBmcmFtZVdpZHRoID0gc2NyZWVuV2lkdGggKiAwLjk1O1xuICAgIGNvbnN0IG1hc2tSYWRpdXMgPSBmcmFtZVdpZHRoIC8gMi4wO1xuICAgIGNvbnN0IGN4ID0gKHNjcmVlbldpZHRoIC8gMi4wKTtcblxuICAgIGNvbnN0IHN2Z1N0eWxlID0ge1xuICAgICAgd2lkdGg6IGZyYW1lV2lkdGgsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGxlZnQ6IGN4IC0gZnJhbWVXaWR0aCAvIDIsXG4gICAgICB0b3A6IC1mcmFtZVdpZHRoICogMC4xNSxcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OicxMDAlJ319PlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8Q2xpY2tlcnMgc3ZnPXt0aGlzLnN2Z30gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3V0cycgc3R5bGU9e3tiYWNrZ3JvdW5kOidub25lJ319PlxuICAgICAgICAgICAgPG9iamVjdCB0eXBlPSdpbWFnZS9zdmcreG1sJyBkYXRhPXtzdmdSdWJ5c0dhbWV9IHN0eWxlPXtzdmdTdHlsZX0gb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICAgIHJlZj17KG4pID0+IHsgdGhpcy5zdmcgPSBuOyB9IH0+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9e3NjcmVlbldpZHRofSBoZWlnaHQ9e21hc2tSYWRpdXMgKiAyLjB9PlxuICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgPGNsaXBQYXRoIGlkPSdjaXJjbGUtbWFzayc+XG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgICBjeD17Y3h9XG4gICAgICAgICAgICAgICAgICAgICAgY3k9e21hc2tSYWRpdXN9XG4gICAgICAgICAgICAgICAgICAgICAgcj17bWFza1JhZGl1c31cbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9JyNlZmVmZWYnXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9JzEnXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICA8L3N2Zz5cblxuICAgICAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBTVkdcbiAgICAgICAgICAgIDwvb2JqZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1hc2sge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ndXRzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdWJ5Qm9vdGg7XG4iXX0= */\n/*@ sourceURL=components/RubyBooth.js */'
        })
      );
    }
  }]);

  return RubyBooth;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (RubyBooth);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_DefaultLayout__ = __webpack_require__("./components/DefaultLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_RubyBooth__ = __webpack_require__("./components/RubyBooth.js");
var _jsxFileName = '/Users/manderson/Projects/MartianRover/2018/RubyYou/web/pages/index.js';








/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__components_DefaultLayout__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'h1',
      {
        className: 'jsx-3779514820' + ' ' + 'jsx-3779514820',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      'Ruby You'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_RubyBooth__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '3779514820',
      css: 'h1.jsx-3779514820{font-family:"Ferdinand W00 Regular","Georgia",serif;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVnQixBQUc2RCxvREFDbEMsa0JBQ3BCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYW5kZXJzb24vUHJvamVjdHMvTWFydGlhblJvdmVyLzIwMTgvUnVieVlvdS93ZWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9EZWZhdWx0TGF5b3V0J1xuaW1wb3J0IFJ1YnlCb290aCBmcm9tICcuLi9jb21wb25lbnRzL1J1YnlCb290aCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMT5SdWJ5IFlvdTwvaDE+XG4gICAgPFJ1YnlCb290aCAvPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEge1xuICAgICAgICBmb250LWZhbWlseTogXCJGZXJkaW5hbmQgVzAwIFJlZ3VsYXJcIixcIkdlb3JnaWFcIixzZXJpZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pXG4iXX0= */\n/*@ sourceURL=pages/index.js */'
    })
  );
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map