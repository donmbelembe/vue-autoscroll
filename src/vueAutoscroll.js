export const autoscroll = {
  scroll: function (el, value) {
    // Suported value
    var autoPositions = [
      'top',
      'right',
      'bottom',
      'left',
      'center',
      'top left',
      'top right',
      'bottom left',
      'bottom right',
      'top center',
      'left center',
      'right center',
      'bottom center'
    ]

    if (autoPositions.includes(value)) {
      if (value === 'top') {
        el.scrollTop = 0
      } else if (value === 'right') {
        el.scrollLeft = el.scrollWidth - el.clientWidth
      } else if (value === 'bottom') {
        el.scrollTop = el.scrollHeight - el.clientHeight
      } else if (value === 'left') {
        el.scrollLeft = 0
      } else if (value === 'top left') {
        el.scrollTop = 0
        el.scrollLeft = 0
      } else if (value === 'top right') {
        el.scrollTop = 0
        el.scrollLeft = el.scrollWidth - el.clientWidth
      } else if (value === 'bottom left') {
        el.scrollTop = el.scrollHeight - el.clientHeight
        el.scrollLeft = 0
      } else if (value === 'bottom right') {
        el.scrollTop = el.scrollHeight - el.clientHeight
        el.scrollLeft = el.scrollWidth - el.clientWidth
      } else if (value === 'center') {
        el.scrollTop = (el.scrollHeight - el.clientHeight) / 2
        el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2
      } else if (value === 'top center') { // 
        el.scrollTop = 0
        el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2
      } else if (value === 'right center') { //
        el.scrollTop = (el.scrollHeight - el.clientHeight) / 2
        el.scrollLeft = el.scrollWidth - el.clientWidth
      } else if (value === 'bottom center') { //
        el.scrollTop = el.scrollHeight - el.clientHeight
        el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2
      } else if (value === 'left center') {
        el.scrollTop = (el.scrollHeight - el.clientHeight) / 2
        el.scrollLeft = 0
      }
    }
  },
  inserted: function (el, binding, vnode) {
    // Send warning message no argument, value or expressions is passed
    if (binding.value === undefined && Object.keys(binding.modifiers).length === 0 && binding.arg === undefined) {
      console.warn('You should give to the v-' + binding.name + ' directive the scroll informations.\n READ THE DOCUMENTATION.')
      return 0
    }

    if (binding.arg === 'noscroll') {
      el.style.overflow = 'hidden'
    }

    autoscroll.scroll(el, binding.value)
  },
  componentUpdated: function (el, binding, vnode, oldVnode) {
    if (binding.oldValue !== binding.value) {
      autoscroll.scroll(el, binding.value)
    }
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
