// import autoscroll from './directives/autoscroll';

export const autoscroll = {
  inserted: function (el, binding, vnode) {
    // Send warning message no argument, value or expressions is passed
    if (binding.value === undefined && Object.keys(binding.modifiers).length === 0 && binding.arg === undefined) {
      console.warn('You should give to the v-' + binding.name + ' directive the scroll informations.\n READ THE DOCUMENTATION.')
      return 0
    }
  },
  update: function (el, binding, vnode) {
    //
  }
}

const VueAutoscroll = {
  install (Vue, options) {
    Vue.directive('autoscroll', autoscroll)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.VueAutoscroll = VueAutoscroll
  window.Vue.use(VueAutoscroll)
}

export default VueAutoscroll
