import Vue from 'vue'
import Router from 'vue-router'
import shoppingMall from '@/page/shoppingMall/shoppingMall'
import Cart from '@/page/cart/cart'
import Personal from '@/page/personal/personal'
import category from '@/page/category/category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/shoppingMall'
    },
    {
      path: '/shoppingMall',
      name: 'shoppingMall',
      component: shoppingMall
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    }
  ]
})
