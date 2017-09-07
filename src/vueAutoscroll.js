import autoscroll from './directives/autoscroll.js';

const vueAutoscroll = {
  install(Vue, options) {
    Vue.directive(autoscroll.name, autoscroll)
  }
};

export default vueAutoscroll;