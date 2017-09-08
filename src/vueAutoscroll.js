// import autoscroll from './directives/autoscroll';

export const autoscroll = {
  inserted: function (el, binding, vnode) {
    // Send warning message no argument, value or expressions is passed
    if (binding.value === undefined && Object.keys(binding.modifiers).length === 0 && binding.arg === undefined) {
      console.warn('You should give to the v-' + binding.name + ' directive the scroll informations.\n READ THE DOCUMENTATION.')
      return 0
    }

    // Suported value
    var autoPositions = ['top', 'right', 'bottom', 'left', 'top left', 'top right', 'bottom left', 'bottom right', 'middle']

    if (autoPositions.includes(binding.value)) {
      if (binding.value === 'top') {
        el.scrollTop = 0
      } else if (binding.value === 'right') {
        el.scrollLeft = el.scrollWidth - el.clientWidth
      } else if (binding.value === 'bottom') {
        el.scrollTop = el.scrollHeight - el.clientHeight
      } else if (binding.value === 'left') {
        el.scrollLeft = 0
      } else if (binding.value === 'top left') {
        el.scrollTop = 0
        el.scrollLeft = 0
      } else if (binding.value === 'top right') {
        el.scrollTop = 0
        el.scrollLeft = el.scrollWidth - el.clientWidth
      } else if (binding.value === 'bottom left') {
        el.scrollTop = el.scrollHeight - el.clientHeight
        el.scrollLeft = 0
      } else if (binding.value === 'bottom right') {
        el.scrollTop = el.scrollHeight - el.clientHeight
        el.scrollLeft = el.scrollWidth - el.clientWidth
      } else if (binding.value === 'middle') {
        el.scrollTop = (el.scrollHeight - el.clientHeight) / 2
        el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2
      }
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
