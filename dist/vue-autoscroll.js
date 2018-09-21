(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueAutoscroll"] = factory();
	else
		root["VueAutoscroll"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar autoscroll = exports.autoscroll = {\n  scroll: function scroll(el, value) {\n    if (typeof value === 'string') {\n      // Suported value\n      var autoPositions = ['top', 'right', 'bottom', 'left', 'center', 'top left', 'top right', 'bottom left', 'bottom right', 'top center', 'left center', 'right center', 'bottom center'];\n\n      if (autoPositions.includes(value)) {\n        if (value === 'top') {\n          el.scrollTop = 0;\n        } else if (value === 'right') {\n          el.scrollLeft = el.scrollWidth - el.clientWidth;\n        } else if (value === 'bottom') {\n          el.scrollTop = el.scrollHeight - el.clientHeight;\n        } else if (value === 'left') {\n          el.scrollLeft = 0;\n        } else if (value === 'top left') {\n          el.scrollTop = 0;\n          el.scrollLeft = 0;\n        } else if (value === 'top right') {\n          el.scrollTop = 0;\n          el.scrollLeft = el.scrollWidth - el.clientWidth;\n        } else if (value === 'bottom left') {\n          el.scrollTop = el.scrollHeight - el.clientHeight;\n          el.scrollLeft = 0;\n        } else if (value === 'bottom right') {\n          el.scrollTop = el.scrollHeight - el.clientHeight;\n          el.scrollLeft = el.scrollWidth - el.clientWidth;\n        } else if (value === 'center') {\n          el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;\n          el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;\n        } else if (value === 'top center') {\n          el.scrollTop = 0;\n          el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;\n        } else if (value === 'right center') {\n          //\n          el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;\n          el.scrollLeft = el.scrollWidth - el.clientWidth;\n        } else if (value === 'bottom center') {\n          //\n          el.scrollTop = el.scrollHeight - el.clientHeight;\n          el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;\n        } else if (value === 'left center') {\n          el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;\n          el.scrollLeft = 0;\n        }\n      }\n    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {\n      var types = ['absolute', 'relative'];\n      var type = value.hasOwnProperty('type') ? value.type : 'absolute';\n\n      if (types.includes(type)) {\n        if (value.hasOwnProperty('x') && value.hasOwnProperty('y')) {\n          if (typeof value.x === 'number' && isFinite(value.x) && typeof value.y === 'number' && isFinite(value.y)) {\n            if (type === 'relative') {\n              el.scrollBy(value.x, value.y);\n            } else {\n              el.scrollTo(value.x, value.y);\n            }\n          } else {\n            console.log('vue-autoscroll: x and y must be numbers, either positive or negative.');\n          }\n        } else {\n          console.log('vue-autoscroll: you must specify x and y values.');\n        }\n      } else {\n        console.log('vue-autoscroll: \\'' + type + '\\' is not a valid type, supported types are \\'relative\\' or \\'absolute\\' (default).');\n      }\n    } else {\n      console.log('vue-autoscroll: you should give a valid parameter');\n    }\n  },\n  inserted: function inserted(el, binding, vnode) {\n    // Send warning message no argument, value or expressions is passed\n    if (binding.value === undefined && Object.keys(binding.modifiers).length === 0 && binding.arg === undefined) {\n      console.warn('You should give to the v-' + binding.name + ' directive the scroll informations.\\n READ THE DOCUMENTATION.');\n      return 0;\n    }\n\n    if (binding.arg === 'noscroll') {\n      el.style.overflow = 'hidden';\n    }\n\n    autoscroll.scroll(el, binding.value);\n  },\n  componentUpdated: function componentUpdated(el, binding, vnode, oldVnode) {\n    if (binding.oldValue !== binding.value) {\n      autoscroll.scroll(el, binding.value);\n    }\n  }\n};\n\nvar VueAutoscroll = {\n  install: function install(Vue, options) {\n    Vue.directive('autoscroll', autoscroll);\n  }\n};\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.VueAutoscroll = VueAutoscroll;\n  window.Vue.use(VueAutoscroll);\n}\n\nexports.default = VueAutoscroll;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdnVlQXV0b3Njcm9sbC5qcz8wMjBjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhdXRvc2Nyb2xsID0ge1xyXG4gIHNjcm9sbDogZnVuY3Rpb24gKGVsLCB2YWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgLy8gU3Vwb3J0ZWQgdmFsdWVcclxuICAgICAgdmFyIGF1dG9Qb3NpdGlvbnMgPSBbXHJcbiAgICAgICAgJ3RvcCcsXHJcbiAgICAgICAgJ3JpZ2h0JyxcclxuICAgICAgICAnYm90dG9tJyxcclxuICAgICAgICAnbGVmdCcsXHJcbiAgICAgICAgJ2NlbnRlcicsXHJcbiAgICAgICAgJ3RvcCBsZWZ0JyxcclxuICAgICAgICAndG9wIHJpZ2h0JyxcclxuICAgICAgICAnYm90dG9tIGxlZnQnLFxyXG4gICAgICAgICdib3R0b20gcmlnaHQnLFxyXG4gICAgICAgICd0b3AgY2VudGVyJyxcclxuICAgICAgICAnbGVmdCBjZW50ZXInLFxyXG4gICAgICAgICdyaWdodCBjZW50ZXInLFxyXG4gICAgICAgICdib3R0b20gY2VudGVyJ1xyXG4gICAgICBdXHJcblxyXG4gICAgICBpZiAoYXV0b1Bvc2l0aW9ucy5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09ICd0b3AnKSB7XHJcbiAgICAgICAgICBlbC5zY3JvbGxUb3AgPSAwXHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IGVsLnNjcm9sbFdpZHRoIC0gZWwuY2xpZW50V2lkdGhcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgZWwuc2Nyb2xsVG9wID0gZWwuc2Nyb2xsSGVpZ2h0IC0gZWwuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gMFxyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICd0b3AgbGVmdCcpIHtcclxuICAgICAgICAgIGVsLnNjcm9sbFRvcCA9IDBcclxuICAgICAgICAgIGVsLnNjcm9sbExlZnQgPSAwXHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3RvcCByaWdodCcpIHtcclxuICAgICAgICAgIGVsLnNjcm9sbFRvcCA9IDBcclxuICAgICAgICAgIGVsLnNjcm9sbExlZnQgPSBlbC5zY3JvbGxXaWR0aCAtIGVsLmNsaWVudFdpZHRoXHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2JvdHRvbSBsZWZ0Jykge1xyXG4gICAgICAgICAgZWwuc2Nyb2xsVG9wID0gZWwuc2Nyb2xsSGVpZ2h0IC0gZWwuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gMFxyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdib3R0b20gcmlnaHQnKSB7XHJcbiAgICAgICAgICBlbC5zY3JvbGxUb3AgPSBlbC5zY3JvbGxIZWlnaHQgLSBlbC5jbGllbnRIZWlnaHRcclxuICAgICAgICAgIGVsLnNjcm9sbExlZnQgPSBlbC5zY3JvbGxXaWR0aCAtIGVsLmNsaWVudFdpZHRoXHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2NlbnRlcicpIHtcclxuICAgICAgICAgIGVsLnNjcm9sbFRvcCA9IChlbC5zY3JvbGxIZWlnaHQgLSBlbC5jbGllbnRIZWlnaHQpIC8gMlxyXG4gICAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IChlbC5zY3JvbGxXaWR0aCAtIGVsLmNsaWVudFdpZHRoKSAvIDJcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAndG9wIGNlbnRlcicpIHtcclxuICAgICAgICAgIGVsLnNjcm9sbFRvcCA9IDBcclxuICAgICAgICAgIGVsLnNjcm9sbExlZnQgPSAoZWwuc2Nyb2xsV2lkdGggLSBlbC5jbGllbnRXaWR0aCkgLyAyXHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3JpZ2h0IGNlbnRlcicpIHsgLy9cclxuICAgICAgICAgIGVsLnNjcm9sbFRvcCA9IChlbC5zY3JvbGxIZWlnaHQgLSBlbC5jbGllbnRIZWlnaHQpIC8gMlxyXG4gICAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IGVsLnNjcm9sbFdpZHRoIC0gZWwuY2xpZW50V2lkdGhcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnYm90dG9tIGNlbnRlcicpIHsgLy9cclxuICAgICAgICAgIGVsLnNjcm9sbFRvcCA9IGVsLnNjcm9sbEhlaWdodCAtIGVsLmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IChlbC5zY3JvbGxXaWR0aCAtIGVsLmNsaWVudFdpZHRoKSAvIDJcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnbGVmdCBjZW50ZXInKSB7XHJcbiAgICAgICAgICBlbC5zY3JvbGxUb3AgPSAoZWwuc2Nyb2xsSGVpZ2h0IC0gZWwuY2xpZW50SGVpZ2h0KSAvIDJcclxuICAgICAgICAgIGVsLnNjcm9sbExlZnQgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgbGV0IHR5cGVzID0gWydhYnNvbHV0ZScsICdyZWxhdGl2ZSddXHJcbiAgICAgIGxldCB0eXBlID0gdmFsdWUuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSA/IHZhbHVlLnR5cGUgOiAnYWJzb2x1dGUnXHJcblxyXG4gICAgICBpZiAodHlwZXMuaW5jbHVkZXModHlwZSkpIHtcclxuICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoJ3gnKSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgneScpKSB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlLnggPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlLngpICYmIHR5cGVvZiB2YWx1ZS55ID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWx1ZS55KSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3JlbGF0aXZlJykge1xyXG4gICAgICAgICAgICAgIGVsLnNjcm9sbEJ5KHZhbHVlLngsIHZhbHVlLnkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZWwuc2Nyb2xsVG8odmFsdWUueCwgdmFsdWUueSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Z1ZS1hdXRvc2Nyb2xsOiB4IGFuZCB5IG11c3QgYmUgbnVtYmVycywgZWl0aGVyIHBvc2l0aXZlIG9yIG5lZ2F0aXZlLicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd2dWUtYXV0b3Njcm9sbDogeW91IG11c3Qgc3BlY2lmeSB4IGFuZCB5IHZhbHVlcy4nKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndnVlLWF1dG9zY3JvbGw6IFxcJycgKyB0eXBlICsgJ1xcJyBpcyBub3QgYSB2YWxpZCB0eXBlLCBzdXBwb3J0ZWQgdHlwZXMgYXJlIFxcJ3JlbGF0aXZlXFwnIG9yIFxcJ2Fic29sdXRlXFwnIChkZWZhdWx0KS4nKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygndnVlLWF1dG9zY3JvbGw6IHlvdSBzaG91bGQgZ2l2ZSBhIHZhbGlkIHBhcmFtZXRlcicpXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbnNlcnRlZDogZnVuY3Rpb24gKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xyXG4gICAgLy8gU2VuZCB3YXJuaW5nIG1lc3NhZ2Ugbm8gYXJndW1lbnQsIHZhbHVlIG9yIGV4cHJlc3Npb25zIGlzIHBhc3NlZFxyXG4gICAgaWYgKGJpbmRpbmcudmFsdWUgPT09IHVuZGVmaW5lZCAmJiBPYmplY3Qua2V5cyhiaW5kaW5nLm1vZGlmaWVycykubGVuZ3RoID09PSAwICYmIGJpbmRpbmcuYXJnID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdZb3Ugc2hvdWxkIGdpdmUgdG8gdGhlIHYtJyArIGJpbmRpbmcubmFtZSArICcgZGlyZWN0aXZlIHRoZSBzY3JvbGwgaW5mb3JtYXRpb25zLlxcbiBSRUFEIFRIRSBET0NVTUVOVEFUSU9OLicpXHJcbiAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuYXJnID09PSAnbm9zY3JvbGwnKSB7XHJcbiAgICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcclxuICAgIH1cclxuXHJcbiAgICBhdXRvc2Nyb2xsLnNjcm9sbChlbCwgYmluZGluZy52YWx1ZSlcclxuICB9LFxyXG4gIGNvbXBvbmVudFVwZGF0ZWQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKSB7XHJcbiAgICBpZiAoYmluZGluZy5vbGRWYWx1ZSAhPT0gYmluZGluZy52YWx1ZSkge1xyXG4gICAgICBhdXRvc2Nyb2xsLnNjcm9sbChlbCwgYmluZGluZy52YWx1ZSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFZ1ZUF1dG9zY3JvbGwgPSB7XHJcbiAgaW5zdGFsbCAoVnVlLCBvcHRpb25zKSB7XHJcbiAgICBWdWUuZGlyZWN0aXZlKCdhdXRvc2Nyb2xsJywgYXV0b3Njcm9sbClcclxuICB9XHJcbn1cclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XHJcbiAgd2luZG93LlZ1ZUF1dG9zY3JvbGwgPSBWdWVBdXRvc2Nyb2xsXHJcbiAgd2luZG93LlZ1ZS51c2UoVnVlQXV0b3Njcm9sbClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVnVlQXV0b3Njcm9sbFxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3Z1ZUF1dG9zY3JvbGwuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBHQTtBQUNBO0FBc0dBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
});