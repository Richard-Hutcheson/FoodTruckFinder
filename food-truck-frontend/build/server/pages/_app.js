module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/redux */ \"./src/util/redux.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/theme */ \"./src/util/theme.js\");\n/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/login.css */ \"./src/styles/login.css\");\n/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_login_css__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/noah/Desktop/FoodTruckFinder/food-truck-frontend/src/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\nlet initialState = {};\nlet store = Object(_util_redux__WEBPACK_IMPORTED_MODULE_2__[\"buildStore\"])(initialState);\n\nconst FoodTruckApp = ({\n  Component,\n  pageProps\n}) => {\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    // Remove the server-side injected CSS.\n    const jssStyles = document.querySelector('#jss-server-side');\n\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []);\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: store,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, \"Food Truck Finder\"), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"minimum-scale=1, initial-scale=1, width=device-width\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  })), __jsx(_util_theme__WEBPACK_IMPORTED_MODULE_5__[\"FoodTruckThemeProvider\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodTruckApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInN0b3JlIiwiYnVpbGRTdG9yZSIsIkZvb2RUcnVja0FwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFlBQVksR0FBRyxFQUFuQjtBQUNBLElBQUlDLEtBQUssR0FBR0MsOERBQVUsQ0FBQ0YsWUFBRCxDQUF0Qjs7QUFFQSxNQUFNRyxZQUFZLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUMvQ0MsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixNQUFNO0FBQ2xCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWxCOztBQUNBLFFBQUlGLFNBQUosRUFBZTtBQUNYQSxlQUFTLENBQUNHLGFBQVYsQ0FBd0JDLFdBQXhCLENBQW9DSixTQUFwQztBQUNIO0FBQ0osR0FORCxFQU1HLEVBTkg7QUFRQSxTQUNJLE1BQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUdQLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLEVBRUk7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsc0RBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBTUksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUksTUFBQyxTQUFELGVBQWVJLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUpKLENBTkosQ0FESjtBQWlCSCxDQTFCRDs7QUE0QmVGLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBidWlsZFN0b3JlIH0gZnJvbSAnLi4vdXRpbC9yZWR1eCc7XG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBDc3NCYXNlbGluZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEZvb2RUcnVja1RoZW1lUHJvdmlkZXIgfSBmcm9tICcuLi91dGlsL3RoZW1lJztcbmltcG9ydCAnLi4vc3R5bGVzL2xvZ2luLmNzcyc7XG5cbmxldCBpbml0aWFsU3RhdGUgPSB7fTtcbmxldCBzdG9yZSA9IGJ1aWxkU3RvcmUoaW5pdGlhbFN0YXRlKTtcblxuY29uc3QgRm9vZFRydWNrQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTLlxuICAgICAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XG4gICAgICAgIGlmIChqc3NTdHlsZXMpIHtcbiAgICAgICAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9eyBzdG9yZSB9PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkZvb2QgVHJ1Y2sgRmluZGVyPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxGb29kVHJ1Y2tUaGVtZVByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIHsvKiBDc3NCYXNlbGluZSBraWNrc3RhcnQgYW4gZWxlZ2FudCwgY29uc2lzdGVudCwgYW5kIHNpbXBsZSBiYXNlbGluZSB0byBidWlsZCB1cG9uLiAqL31cblxuXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9Gb29kVHJ1Y2tUaGVtZVByb3ZpZGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgIClcblxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb29kVHJ1Y2tBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/login.css":
/*!******************************!*\
  !*** ./src/styles/login.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvbG9naW4uY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/login.css\n");

/***/ }),

/***/ "./src/util/redux.js":
/*!***************************!*\
  !*** ./src/util/redux.js ***!
  \***************************/
/*! exports provided: buildStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildStore\", function() { return buildStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({// Add your reducers here\n});\nconst buildStore = initialState => {\n  return Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__[\"configureStore\"])({\n    preloadedState: initialState,\n    reducer: reducers,\n    middleware: [redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a],\n    devTools: true\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9yZWR1eC5qcz9lZmY2Il0sIm5hbWVzIjpbInJlZHVjZXJzIiwiY29tYmluZVJlZHVjZXJzIiwiYnVpbGRTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNvbmZpZ3VyZVN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJyZWR1Y2VyIiwibWlkZGxld2FyZSIsInRodW5rIiwiZGV2VG9vbHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxRQUFRLEdBQUdDLDZEQUFlLENBQUMsQ0FDN0I7QUFENkIsQ0FBRCxDQUFoQztBQUlPLE1BQU1DLFVBQVUsR0FBSUMsWUFBRCxJQUFrQjtBQUN4QyxTQUFPQyx1RUFBYyxDQUFDO0FBQ2xCQyxrQkFBYyxFQUFFRixZQURFO0FBRWxCRyxXQUFPLEVBQUVOLFFBRlM7QUFHbEJPLGNBQVUsRUFBRSxDQUFDQyxrREFBRCxDQUhNO0FBSWxCQyxZQUFRO0FBSlUsR0FBRCxDQUFyQjtBQU1ILENBUE0iLCJmaWxlIjoiLi9zcmMvdXRpbC9yZWR1eC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgLy8gQWRkIHlvdXIgcmVkdWNlcnMgaGVyZVxufSk7XG5cbmV4cG9ydCBjb25zdCBidWlsZFN0b3JlID0gKGluaXRpYWxTdGF0ZSkgPT4ge1xuICAgIHJldHVybiBjb25maWd1cmVTdG9yZSh7XG4gICAgICAgIHByZWxvYWRlZFN0YXRlOiBpbml0aWFsU3RhdGUsXG4gICAgICAgIHJlZHVjZXI6IHJlZHVjZXJzLFxuICAgICAgICBtaWRkbGV3YXJlOiBbdGh1bmtdLFxuICAgICAgICBkZXZUb29sczogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgIH0pO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/util/redux.js\n");

/***/ }),

/***/ "./src/util/theme.js":
/*!***************************!*\
  !*** ./src/util/theme.js ***!
  \***************************/
/*! exports provided: theme, FoodTruckThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"theme\", function() { return theme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FoodTruckThemeProvider\", function() { return FoodTruckThemeProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jss */ \"jss\");\n/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jss_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jss-rtl */ \"jss-rtl\");\n/* harmony import */ var jss_rtl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jss_rtl__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/noah/Desktop/FoodTruckFinder/food-truck-frontend/src/util/theme.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst jss = Object(jss__WEBPACK_IMPORTED_MODULE_2__[\"create\"])({\n  plugins: [...Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"jssPreset\"])().plugins, jss_rtl__WEBPACK_IMPORTED_MODULE_3___default()()]\n});\nconst themeOptions = {\n  typography: {\n    fontFamily: 'Noto Sans, sans-serif',\n    fontStyle: 'normal',\n    fontWeight: 600,\n    fontSize: 14,\n    lineHeight: 19,\n    marginTop: 2,\n    marginBottom: 2,\n    body2: {\n      fontSize: 14\n    }\n  },\n  shape: {\n    borderRadius: 5\n  },\n  overrides: {\n    MuiButton: {\n      root: {\n        textTransform: 'none',\n        marginLeft: 8,\n        marginRight: 8,\n        marginTop: 8,\n        marginBottom: 8,\n        width: '181px',\n        height: '48px'\n      },\n      outlinedPrimary: {\n        border: '2px solid'\n      },\n      outlinedSecondary: {\n        border: '2px solid'\n      }\n    }\n  }\n};\nconst theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createMuiTheme\"])(themeOptions);\nconst FoodTruckThemeProvider = ({\n  children\n}) => {\n  return __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"StylesProvider\"], {\n    jss: jss,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: theme,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, children));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC90aGVtZS5qcz9lMDJiIl0sIm5hbWVzIjpbImpzcyIsImNyZWF0ZSIsInBsdWdpbnMiLCJqc3NQcmVzZXQiLCJydGwiLCJ0aGVtZU9wdGlvbnMiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJib2R5MiIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwib3ZlcnJpZGVzIiwiTXVpQnV0dG9uIiwicm9vdCIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsIm91dGxpbmVkUHJpbWFyeSIsImJvcmRlciIsIm91dGxpbmVkU2Vjb25kYXJ5IiwidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsIkZvb2RUcnVja1RoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsR0FBRyxHQUFHQyxrREFBTSxDQUFDO0FBQUNDLFNBQU8sRUFBRSxDQUFDLEdBQUdDLDBFQUFTLEdBQUdELE9BQWhCLEVBQXlCRSw4Q0FBRyxFQUE1QjtBQUFWLENBQUQsQ0FBbEI7QUFFQSxNQUFNQyxZQUFZLEdBQUc7QUFDakJDLFlBQVUsRUFBRTtBQUNSQyxjQUFVLEVBQUUsdUJBREo7QUFFUkMsYUFBUyxFQUFFLFFBRkg7QUFHUkMsY0FBVSxFQUFFLEdBSEo7QUFJUkMsWUFBUSxFQUFFLEVBSkY7QUFLUkMsY0FBVSxFQUFFLEVBTEo7QUFNUkMsYUFBUyxFQUFFLENBTkg7QUFPUkMsZ0JBQVksRUFBRSxDQVBOO0FBUVJDLFNBQUssRUFBRTtBQUNISixjQUFRLEVBQUU7QUFEUDtBQVJDLEdBREs7QUFhakJLLE9BQUssRUFBRTtBQUNIQyxnQkFBWSxFQUFFO0FBRFgsR0FiVTtBQWdCakJDLFdBQVMsRUFBRTtBQUNQQyxhQUFTLEVBQUU7QUFDUEMsVUFBSSxFQUFFO0FBQ0ZDLHFCQUFhLEVBQUUsTUFEYjtBQUVGQyxrQkFBVSxFQUFFLENBRlY7QUFHRkMsbUJBQVcsRUFBRSxDQUhYO0FBSUZWLGlCQUFTLEVBQUUsQ0FKVDtBQUtGQyxvQkFBWSxFQUFFLENBTFo7QUFNRlUsYUFBSyxFQUFFLE9BTkw7QUFPRkMsY0FBTSxFQUFFO0FBUE4sT0FEQztBQVVQQyxxQkFBZSxFQUFFO0FBQ2JDLGNBQU0sRUFBRTtBQURLLE9BVlY7QUFhUEMsdUJBQWlCLEVBQUU7QUFDZkQsY0FBTSxFQUFFO0FBRE87QUFiWjtBQURKO0FBaEJNLENBQXJCO0FBcUNPLE1BQU1FLEtBQUssR0FBR0MsK0VBQWMsQ0FBQ3hCLFlBQUQsQ0FBNUI7QUFFQSxNQUFNeUIsc0JBQXNCLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBZ0I7QUFDbEQsU0FDSSxNQUFDLHVFQUFEO0FBQWdCLE9BQUcsRUFBRS9CLEdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNFQUFEO0FBQWUsU0FBSyxFQUFFNEIsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRyxRQURMLENBREosQ0FESjtBQU9ILENBUk0iLCJmaWxlIjoiLi9zcmMvdXRpbC90aGVtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBUaGVtZVByb3ZpZGVyLCBTdHlsZXNQcm92aWRlciwganNzUHJlc2V0LCB3aXRoU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtjcmVhdGV9IGZyb20gJ2pzcyc7XG5pbXBvcnQgcnRsIGZyb20gJ2pzcy1ydGwnO1xuXG5jb25zdCBqc3MgPSBjcmVhdGUoe3BsdWdpbnM6IFsuLi5qc3NQcmVzZXQoKS5wbHVnaW5zLCBydGwoKV19KTtcblxuY29uc3QgdGhlbWVPcHRpb25zID0ge1xuICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgICAgZm9udEZhbWlseTogJ05vdG8gU2Fucywgc2Fucy1zZXJpZicsXG4gICAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICBsaW5lSGVpZ2h0OiAxOSxcbiAgICAgICAgbWFyZ2luVG9wOiAyLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDIsXG4gICAgICAgIGJvZHkyOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogMTRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2hhcGU6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIH0sXG4gICAgb3ZlcnJpZGVzOiB7XG4gICAgICAgIE11aUJ1dHRvbjoge1xuICAgICAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA4LFxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA4LFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogOCxcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDgsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxODFweCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3V0bGluZWRQcmltYXJ5OiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG91dGxpbmVkU2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh0aGVtZU9wdGlvbnMpO1xuXG5leHBvcnQgY29uc3QgRm9vZFRydWNrVGhlbWVQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlc1Byb3ZpZGVyIGpzcz17anNzfT5cbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICA8L1N0eWxlc1Byb3ZpZGVyPlxuICAgICk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util/theme.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@reduxjs/toolkit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCI/Y2NkOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAcmVkdXhqcy90b29sa2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@reduxjs/toolkit\n");

/***/ }),

/***/ "jss":
/*!**********************!*\
  !*** external "jss" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jss\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc3NcIj82M2FiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Impzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jss\n");

/***/ }),

/***/ "jss-rtl":
/*!**************************!*\
  !*** external "jss-rtl" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jss-rtl\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc3MtcnRsXCI/ODA3YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJqc3MtcnRsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNzLXJ0bFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jss-rtl\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });