(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueAutoscroll"] = factory();
	else
		root["VueAutoscroll"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// import autoscroll from './directives/autoscroll';\n\nvar VueAutoscroll = {\n  install: function install(Vue, options) {\n    Vue.directive('demo', {\n      bind: function bind(el, binding, vnode) {\n        var s = JSON.stringify;\n        el.innerHTML = 'name: ' + s(binding.name) + '<br>' + 'value: ' + s(binding.value) + '<br>' + 'expression: ' + s(binding.expression) + '<br>' + 'argument: ' + s(binding.arg) + '<br>' + 'modifiers: ' + s(binding.modifiers) + '<br>' + 'vnode keys: ' + Object.keys(vnode).join(', ');\n      }\n    });\n  }\n};\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.VueAutoscroll = VueAutoscroll;\n  window.Vue.use(VueAutoscroll);\n}\n\nexports.default = VueAutoscroll;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdnVlQXV0b3Njcm9sbC5qcz8wMjBjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBhdXRvc2Nyb2xsIGZyb20gJy4vZGlyZWN0aXZlcy9hdXRvc2Nyb2xsJztcclxuXHJcbmNvbnN0IFZ1ZUF1dG9zY3JvbGwgPSB7XHJcbiAgaW5zdGFsbCAoVnVlLCBvcHRpb25zKSB7XHJcbiAgICBWdWUuZGlyZWN0aXZlKCdkZW1vJywge1xyXG4gICAgICBiaW5kOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XHJcbiAgICAgICAgdmFyIHMgPSBKU09OLnN0cmluZ2lmeVxyXG4gICAgICAgIGVsLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAnbmFtZTogJyArIHMoYmluZGluZy5uYW1lKSArICc8YnI+JyArXHJcbiAgICAgICAgICAndmFsdWU6ICcgKyBzKGJpbmRpbmcudmFsdWUpICsgJzxicj4nICtcclxuICAgICAgICAgICdleHByZXNzaW9uOiAnICsgcyhiaW5kaW5nLmV4cHJlc3Npb24pICsgJzxicj4nICtcclxuICAgICAgICAgICdhcmd1bWVudDogJyArIHMoYmluZGluZy5hcmcpICsgJzxicj4nICtcclxuICAgICAgICAgICdtb2RpZmllcnM6ICcgKyBzKGJpbmRpbmcubW9kaWZpZXJzKSArICc8YnI+JyArXHJcbiAgICAgICAgICAndm5vZGUga2V5czogJyArIE9iamVjdC5rZXlzKHZub2RlKS5qb2luKCcsICcpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xyXG4gIHdpbmRvdy5WdWVBdXRvc2Nyb2xsID0gVnVlQXV0b3Njcm9sbFxyXG4gIHdpbmRvdy5WdWUudXNlKFZ1ZUF1dG9zY3JvbGwpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZ1ZUF1dG9zY3JvbGxcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy92dWVBdXRvc2Nyb2xsLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQVZBO0FBWUE7QUFkQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
});