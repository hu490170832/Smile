import Vue from 'vue'
import Router from 'vue-router'
import shoppingMall from '@/page/shoppingMall/shoppingMall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingMall',
      component: shoppingMall
    },
    {
      path: '/category',
      name: 'shoppingMall',
      component: shoppingMall
    },
    {
      path: '/cart',
      name: 'shoppingMall',
      component: shoppingMall
    },
    {
      path: '/personal',
      name: 'shoppingMall',
      component: shoppingMall
    }
  ]
})
