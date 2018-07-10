// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload)
// fastClick.attach(document.body)

import '@/assets/js/flexible'
import '@/assets/css/index.styl'

import {
  /* eslint-disable no-unused-vars */
  Style,
  Button,
  Switch ,
  Slide,
  Scroll,
  createAPI,
  Toast,
  Dialog,
  Checkbox
} from 'cube-ui'
Vue.use(Switch).use(Slide).use(Button).use(Scroll).use(Checkbox)
createAPI(Vue, Toast, ['click'], true)
createAPI(Vue, Dialog, ['click'], true)

import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// require styles
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
