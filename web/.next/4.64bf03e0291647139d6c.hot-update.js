webpackHotUpdate(4,{

/***/ "./components/RubyBooth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/next/node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/manderson/Projects/MartianRover/2018/RubyYou/web/components/RubyBooth.js';




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return RubyBooth;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = RubyBooth;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(svgRubysGame, 'svgRubysGame', '/Users/manderson/Projects/MartianRover/2018/RubyYou/web/components/RubyBooth.js');
  reactHotLoader.register(w, 'w', '/Users/manderson/Projects/MartianRover/2018/RubyYou/web/components/RubyBooth.js');
  reactHotLoader.register(Clickers, 'Clickers', '/Users/manderson/Projects/MartianRover/2018/RubyYou/web/components/RubyBooth.js');
  reactHotLoader.register(RubyBooth, 'RubyBooth', '/Users/manderson/Projects/MartianRover/2018/RubyYou/web/components/RubyBooth.js');
  reactHotLoader.register(_default, 'default', '/Users/manderson/Projects/MartianRover/2018/RubyYou/web/components/RubyBooth.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.64bf03e0291647139d6c.hot-update.js.map