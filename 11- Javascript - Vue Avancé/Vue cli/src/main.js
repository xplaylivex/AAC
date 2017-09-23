/* eslint-disable no-new */
import Vue from 'vue'
import App from './views/App'

require('./sass/style.scss')

module.exports = {
  startApp: function (id) {
    new Vue({
      el: document.getElementById(id),
      // Main application components is App.vue
      components: { App }
    })
  }
}
