import Vue from 'vue'
import Router from 'vue-router'
// import shoppingMall from '@/page/shoppingMall/shoppingMall'
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
      component: ()=>import('@/page/shoppingMall/shoppingMall')
    },
    {
      path: '/category',
      component: ()=>import('@/page/category/category')
    },
    {
      path: '/cart',
      name: 'cart',
      component: ()=>import('@/page/cart/cart')
    },
    {
      path: '/personal',
      name: 'Personal',
      component: ()=>import('@/page/personal/personal')
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      meta: {
        noKeepAlive: true
      },
      component: ()=>import('@/page/goodsDetail/goodsDetail')
    }
  ]
})
