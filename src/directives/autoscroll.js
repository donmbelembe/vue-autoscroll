export default {
  name: 'autoscroll',
  update: function (el, binding, vnode) {
    // Send warning message if there is no any argument, value or expressions
    if (binding.value === undefined && Object.keys(binding.modifiers).length === 0 && binding.arg === undefined) {
      console.warn('You should give to the v-' + binding.name + ' directive the scroll informations.\n READ THE DOCUMENTATION.')
      return
    }

    // Suported value
    var autoPositions = ['top', 'right', 'bottom', 'left', 'top left', 'top right', 'bottom left', 'bottom right', 'middle']

    // First case: Suported value
    // It should scroll to the given direction
    if (autoPositions.includes(binding.value)) {
      // In this case we don't need argument and modifiers
      // Check if there is any argument or modifiers and console error
      // but continue the execution
      if (binding.arg !== undefined || Object.keys(binding.modifiers).length !== 0) {
        console.error('You don\'t need to use any argument or any modifiers when using \'' + binding.value + '\' value \n You may only write v-' + binding.name + '="' + binding.value + '"')
      }

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
        // el.scrollTo()
        el.scrollTop = el.scrollHeight - el.clientHeight
        el.scrollLeft = el.scrollWidth - el.clientWidth
      } else if (binding.value === 'middle') {
        //
      }
    }
  }
}