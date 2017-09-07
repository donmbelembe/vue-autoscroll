import VueAutoscroll from './directives/VueAutoscroll.js'

const VueAutoscrollPlugin = {
  install(Vue, options) {
    Vue.directive(VueAutoscroll.name, VueAutoscroll)
  }
};

export default MyPlugin;

(function  () {
      if (typeof exports == 'object') {
        export default VueAutoscroll;
      } else if (typeof define == 'function' && define.amd) {
        define([], function(){ return VueD3; })
      } else if (window.Vue) {
        window.VueD3 = VueD3;
        Vue.use(VueD3);
      }
})();