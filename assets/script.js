new Vue({
  el: '#app',
  data: {
    autoscroll: 'center',
    message: 'Hello Vue.js!',
  },
  methods: {
    autoscrollTest (value) {
      this.autoscroll = value
    }
  }
})