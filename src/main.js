// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import jQuery from 'jquery'
global.jQuery = jQuery
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueResource)
Vue.config.productionTip = false

// Filter
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase()
})

Vue.filter('snipper', function (value) {
  return value.slice(0, 20)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
