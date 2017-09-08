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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// import autoscroll from './directives/autoscroll';\n\nvar autoscroll = exports.autoscroll = {\n  scroll: function scroll(el, value) {\n    // Suported value\n    var autoPositions = ['top', 'right', 'bottom', 'left', 'center', 'top left', 'top right', 'bottom left', 'bottom right', 'top center', 'left center', 'right center', 'bottom center'];\n\n    if (autoPositions.includes(value)) {\n      if (value === 'top') {\n        el.scrollTop = 0;\n      } else if (value === 'right') {\n        el.scrollLeft = el.scrollWidth - el.clientWidth;\n      } else if (value === 'bottom') {\n        el.scrollTop = el.scrollHeight - el.clientHeight;\n      } else if (value === 'left') {\n        el.scrollLeft = 0;\n      } else if (value === 'top left') {\n        el.scrollTop = 0;\n        el.scrollLeft = 0;\n      } else if (value === 'top right') {\n        el.scrollTop = 0;\n        el.scrollLeft = el.scrollWidth - el.clientWidth;\n      } else if (value === 'bottom left') {\n        el.scrollTop = el.scrollHeight - el.clientHeight;\n        el.scrollLeft = 0;\n      } else if (value === 'bottom right') {\n        el.scrollTop = el.scrollHeight - el.clientHeight;\n        el.scrollLeft = el.scrollWidth - el.clientWidth;\n      } else if (value === 'center') {\n        el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;\n        el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;\n      } else if (value === 'top center') {\n        // \n        el.scrollTop = 0;\n        el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;\n      } else if (value === 'right center') {\n        //\n        el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;\n        el.scrollLeft = el.scrollWidth - el.clientWidth;\n      } else if (value === 'bottom center') {\n        //\n        el.scrollTop = el.scrollHeight - el.clientHeight;\n        el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;\n      } else if (value === 'left center') {\n        el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;\n        el.scrollLeft = 0;\n      }\n    }\n  },\n  inserted: function inserted(el, binding, vnode) {\n    // Send warning message no argument, value or expressions is passed\n    if (binding.value === undefined && Object.keys(binding.modifiers).length === 0 && binding.arg === undefined) {\n      console.warn('You should give to the v-' + binding.name + ' directive the scroll informations.\\n READ THE DOCUMENTATION.');\n      return 0;\n    }\n\n    if (binding.arg === 'noscroll') {\n      el.style.overflow = 'hidden';\n    }\n\n    autoscroll.scroll(el, binding.value);\n  },\n  componentUpdated: function componentUpdated(el, binding, vnode, oldVnode) {\n    if (binding.oldValue !== binding.value) {\n      autoscroll.scroll(el, binding.value);\n    }\n  }\n};\n\nvar VueAutoscroll = {\n  install: function install(Vue, options) {\n    Vue.directive('autoscroll', autoscroll);\n  }\n};\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.VueAutoscroll = VueAutoscroll;\n  window.Vue.use(VueAutoscroll);\n}\n\nexports.default = VueAutoscroll;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdnVlQXV0b3Njcm9sbC5qcz8wMjBjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBhdXRvc2Nyb2xsIGZyb20gJy4vZGlyZWN0aXZlcy9hdXRvc2Nyb2xsJztcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRvc2Nyb2xsID0ge1xyXG4gIHNjcm9sbDogZnVuY3Rpb24gKGVsLCB2YWx1ZSkge1xyXG4gICAgLy8gU3Vwb3J0ZWQgdmFsdWVcclxuICAgIHZhciBhdXRvUG9zaXRpb25zID0gW1xyXG4gICAgICAndG9wJyxcclxuICAgICAgJ3JpZ2h0JyxcclxuICAgICAgJ2JvdHRvbScsXHJcbiAgICAgICdsZWZ0JyxcclxuICAgICAgJ2NlbnRlcicsXHJcbiAgICAgICd0b3AgbGVmdCcsXHJcbiAgICAgICd0b3AgcmlnaHQnLFxyXG4gICAgICAnYm90dG9tIGxlZnQnLFxyXG4gICAgICAnYm90dG9tIHJpZ2h0JyxcclxuICAgICAgJ3RvcCBjZW50ZXInLFxyXG4gICAgICAnbGVmdCBjZW50ZXInLFxyXG4gICAgICAncmlnaHQgY2VudGVyJyxcclxuICAgICAgJ2JvdHRvbSBjZW50ZXInXHJcbiAgICBdXHJcblxyXG4gICAgaWYgKGF1dG9Qb3NpdGlvbnMuaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ3RvcCcpIHtcclxuICAgICAgICBlbC5zY3JvbGxUb3AgPSAwXHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdyaWdodCcpIHtcclxuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gZWwuc2Nyb2xsV2lkdGggLSBlbC5jbGllbnRXaWR0aFxyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnYm90dG9tJykge1xyXG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IGVsLnNjcm9sbEhlaWdodCAtIGVsLmNsaWVudEhlaWdodFxyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnbGVmdCcpIHtcclxuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gMFxyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAndG9wIGxlZnQnKSB7XHJcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gMFxyXG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSAwXHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICd0b3AgcmlnaHQnKSB7XHJcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gMFxyXG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBlbC5zY3JvbGxXaWR0aCAtIGVsLmNsaWVudFdpZHRoXHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdib3R0b20gbGVmdCcpIHtcclxuICAgICAgICBlbC5zY3JvbGxUb3AgPSBlbC5zY3JvbGxIZWlnaHQgLSBlbC5jbGllbnRIZWlnaHRcclxuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gMFxyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnYm90dG9tIHJpZ2h0Jykge1xyXG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IGVsLnNjcm9sbEhlaWdodCAtIGVsLmNsaWVudEhlaWdodFxyXG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBlbC5zY3JvbGxXaWR0aCAtIGVsLmNsaWVudFdpZHRoXHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdjZW50ZXInKSB7XHJcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gKGVsLnNjcm9sbEhlaWdodCAtIGVsLmNsaWVudEhlaWdodCkgLyAyXHJcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IChlbC5zY3JvbGxXaWR0aCAtIGVsLmNsaWVudFdpZHRoKSAvIDJcclxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3RvcCBjZW50ZXInKSB7IC8vIFxyXG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IDBcclxuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gKGVsLnNjcm9sbFdpZHRoIC0gZWwuY2xpZW50V2lkdGgpIC8gMlxyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAncmlnaHQgY2VudGVyJykgeyAvL1xyXG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IChlbC5zY3JvbGxIZWlnaHQgLSBlbC5jbGllbnRIZWlnaHQpIC8gMlxyXG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBlbC5zY3JvbGxXaWR0aCAtIGVsLmNsaWVudFdpZHRoXHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdib3R0b20gY2VudGVyJykgeyAvL1xyXG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IGVsLnNjcm9sbEhlaWdodCAtIGVsLmNsaWVudEhlaWdodFxyXG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSAoZWwuc2Nyb2xsV2lkdGggLSBlbC5jbGllbnRXaWR0aCkgLyAyXHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdsZWZ0IGNlbnRlcicpIHtcclxuICAgICAgICBlbC5zY3JvbGxUb3AgPSAoZWwuc2Nyb2xsSGVpZ2h0IC0gZWwuY2xpZW50SGVpZ2h0KSAvIDJcclxuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gMFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbnNlcnRlZDogZnVuY3Rpb24gKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xyXG4gICAgLy8gU2VuZCB3YXJuaW5nIG1lc3NhZ2Ugbm8gYXJndW1lbnQsIHZhbHVlIG9yIGV4cHJlc3Npb25zIGlzIHBhc3NlZFxyXG4gICAgaWYgKGJpbmRpbmcudmFsdWUgPT09IHVuZGVmaW5lZCAmJiBPYmplY3Qua2V5cyhiaW5kaW5nLm1vZGlmaWVycykubGVuZ3RoID09PSAwICYmIGJpbmRpbmcuYXJnID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdZb3Ugc2hvdWxkIGdpdmUgdG8gdGhlIHYtJyArIGJpbmRpbmcubmFtZSArICcgZGlyZWN0aXZlIHRoZSBzY3JvbGwgaW5mb3JtYXRpb25zLlxcbiBSRUFEIFRIRSBET0NVTUVOVEFUSU9OLicpXHJcbiAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuYXJnID09PSAnbm9zY3JvbGwnKSB7XHJcbiAgICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcclxuICAgIH1cclxuXHJcbiAgICBhdXRvc2Nyb2xsLnNjcm9sbChlbCwgYmluZGluZy52YWx1ZSlcclxuICB9LFxyXG4gIGNvbXBvbmVudFVwZGF0ZWQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKSB7XHJcbiAgICBpZiAoYmluZGluZy5vbGRWYWx1ZSAhPT0gYmluZGluZy52YWx1ZSkge1xyXG4gICAgICBhdXRvc2Nyb2xsLnNjcm9sbChlbCwgYmluZGluZy52YWx1ZSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFZ1ZUF1dG9zY3JvbGwgPSB7XHJcbiAgaW5zdGFsbCAoVnVlLCBvcHRpb25zKSB7XHJcbiAgICBWdWUuZGlyZWN0aXZlKCdhdXRvc2Nyb2xsJywgYXV0b3Njcm9sbClcclxuICB9XHJcbn1cclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XHJcbiAgd2luZG93LlZ1ZUF1dG9zY3JvbGwgPSBWdWVBdXRvc2Nyb2xsXHJcbiAgd2luZG93LlZ1ZS51c2UoVnVlQXV0b3Njcm9sbClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVnVlQXV0b3Njcm9sbFxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3Z1ZUF1dG9zY3JvbGwuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzRUE7QUFDQTtBQTZFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
});