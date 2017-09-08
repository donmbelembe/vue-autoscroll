new Vue({
  el: '#app',
  data: {
    autoscroll: 'bottom right',
    message: 'Hello Vue.js!',
    child: {
      w: 500,
      h: 500
    }
  },
  methods: {
    autoscrollTest (value) {
      this.autoscroll = value
    }
  }
})