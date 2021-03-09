// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Wrapper from './components/Wrapper';
 import router from './services/router/router';



// window.$ = window.jQuery = jQuery;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    Wrapper
  },
  router,
  template: '<Wrapper/>'
})
