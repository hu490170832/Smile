import Vue from 'vue'
import Router from 'vue-router'
// import shoppingMall from '@/page/shoppingMall/shoppingMall'
// import Cart from '@/page/cart/cart'
// import Personal from '@/page/personal/personal'
// import category from '@/page/category/category'
import searchBar from '@/common/components/search/search'
import Tab from '@/common/components/tab/tab'

Vue.use(Router)

export default new Router({
<<<<<<< HEAD
  mode:'history',
=======
  mode: 'history',
>>>>>>> e42246a5f040927e52d7908ebfbd5cf863f30187
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
        search: searchBar,
        tab: Tab
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
        search: searchBar,
        tab: Tab
      } 
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: ()=>import('@/page/cart/cart'),
        tab: Tab
      } 
    },
    {
      path: '/personal',
      name: 'Personal',
      components: {
        default: ()=>import('@/page/personal/personal'),
        tab: Tab
      } 
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
