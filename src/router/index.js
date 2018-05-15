import Vue from 'vue'
import Router from 'vue-router'
// import shoppingMall from '@/page/shoppingMall/shoppingMall'
// import Cart from '@/page/cart/cart'
// import Personal from '@/page/personal/personal'
// import category from '@/page/category/category'
import searchBar from '@/common/components/search/search'

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
      components: {
        default: ()=>import('@/page/shoppingMall/shoppingMall'),
        search: searchBar
      } 
    },
    {
      path: '/searchResult',
      name: 'searchResult',
      components: {
        default: ()=>import('@/page/searchResult/searchResult'),
        // search: searchBar
      }
    },
    {
      path: '/category',
      components: {
        default: ()=>import('@/page/category/category'),
        search: searchBar
      } 
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
