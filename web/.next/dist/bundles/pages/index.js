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

/***/ "./components/RubyBooth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/Users/manderson/Projects/MartianRover/2018/RubyYou/web/components/RubyBooth.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var w = typeof window === 'undefined' ? {} : window;

var RubyBooth = function (_Component) {
  _inherits(RubyBooth, _Component);

  function RubyBooth(props) {
    _classCallCheck(this, RubyBooth);

    var _this = _possibleConstructorReturn(this, (RubyBooth.__proto__ || Object.getPrototypeOf(RubyBooth)).call(this, props));

    _this.state = { width: 0, height: 0 };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
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
        { style: { height: '100%' }, className: 'jsx-3237424453' + ' ' + 'jsx-3237424453',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'section',
          {
            className: 'jsx-3237424453' + ' ' + 'jsx-3237424453',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
            className: 'jsx-3237424453' + ' ' + ('jsx-3237424453' + ' ' + 'mask' || ''),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { style: { background: 'none' }, className: 'jsx-3237424453' + ' ' + ('jsx-3237424453' + ' ' + 'guts' || ''),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'object',
              { type: 'image/svg+xml', data: '/static/RubysGame.svg', style: svgStyle, className: 'jsx-3237424453' + ' ' + 'jsx-3237424453',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'svg',
                { width: screenWidth, height: maskRadius * 2.0, className: 'jsx-3237424453' + ' ' + 'jsx-3237424453',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'defs',
                  {
                    className: 'jsx-3237424453' + ' ' + 'jsx-3237424453',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'clipPath',
                    { id: 'circle-mask', className: 'jsx-3237424453' + ' ' + 'jsx-3237424453',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('circle', {
                      cx: cx,
                      cy: maskRadius,
                      r: maskRadius,
                      stroke: '#efefef',
                      strokeWidth: '1',
                      fill: 'none',
                      className: 'jsx-3237424453' + ' ' + 'jsx-3237424453',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
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
          css: 'section.jsx-3237424453{position:relative;width:100%;height:100%;margin:0 auto;}.mask.jsx-3237424453{position:absolute;}.guts.jsx-3237424453{position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUnVieUJvb3RoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fb0IsQUFHK0IsQUFPQSxBQUlBLGtCQVZQLEFBT2IsQUFJQSxXQVZjLFlBQ0UsY0FDaEIiLCJmaWxlIjoiY29tcG9uZW50cy9SdWJ5Qm9vdGguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hbmRlcnNvbi9Qcm9qZWN0cy9NYXJ0aWFuUm92ZXIvMjAxOC9SdWJ5WW91L3dlYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdyA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8ge30gOiB3aW5kb3c7XG5cbmNsYXNzIFJ1YnlCb290aCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xuICAgIHcuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHcucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgfVxuXG4gIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiB3LmlubmVyV2lkdGgsIGhlaWdodDogdy5pbm5lckhlaWdodCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHRoaXMuc3RhdGUud2lkdGg7XG4gICAgY29uc3Qgc2NyZWVuSGVpZ2h0ID0gdGhpcy5zdGF0ZS5oZWlnaHQ7XG4gICAgY29uc3QgdyA9IHNjcmVlbldpZHRoICogMC44O1xuICAgIGNvbnN0IGggPSBzY3JlZW5IZWlnaHQgKiAwLjc7XG4gICAgY29uc3QgZnJhbWVXaWR0aCA9IE1hdGgubWluKGgsIHcpO1xuICAgIC8vY29uc3QgZnJhbWVXaWR0aCA9IHNjcmVlbldpZHRoICogMC45NTtcbiAgICBjb25zdCBtYXNrUmFkaXVzID0gZnJhbWVXaWR0aCAvIDIuMDtcbiAgICBjb25zdCBjeCA9IChzY3JlZW5XaWR0aCAvIDIuMCk7XG5cbiAgICBjb25zdCBzdmdTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBmcmFtZVdpZHRoLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBsZWZ0OiBjeCAtIGZyYW1lV2lkdGggLyAyLFxuICAgICAgdG9wOiAtZnJhbWVXaWR0aCAqIDAuMTUsXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMTAwJSd9fT5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21hc2snPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdndXRzJyBzdHlsZT17e2JhY2tncm91bmQ6J25vbmUnfX0+XG4gICAgICAgICAgICA8b2JqZWN0IHR5cGU9J2ltYWdlL3N2Zyt4bWwnIGRhdGE9Jy9zdGF0aWMvUnVieXNHYW1lLnN2Zycgc3R5bGU9e3N2Z1N0eWxlfT5cbiAgICAgICAgICAgICAgPHN2ZyB3aWR0aD17c2NyZWVuV2lkdGh9IGhlaWdodD17bWFza1JhZGl1cyAqIDIuMH0+XG4gICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICA8Y2xpcFBhdGggaWQ9J2NpcmNsZS1tYXNrJz5cbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgIGN4PXtjeH1cbiAgICAgICAgICAgICAgICAgICAgICBjeT17bWFza1JhZGl1c31cbiAgICAgICAgICAgICAgICAgICAgICByPXttYXNrUmFkaXVzfVxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT0nI2VmZWZlZidcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMSdcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuXG4gICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFNWR1xuICAgICAgICAgICAgPC9vYmplY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWFzayB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmd1dHMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ1YnlCb290aDtcbiJdfQ== */\n/*@ sourceURL=components/RubyBooth.js */'
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

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map