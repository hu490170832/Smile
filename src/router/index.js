import Vue from 'vue'
import Router from 'vue-router'
import shoppingMall from '@/page/shoppingMall/shoppingMall'
import Personal from '@/page/personal/personal'
import category from '@/page/category/category'
import fruits from '@/page/category/children/fruits/fruits'
import wine from '@/page/category/children/wine/wine'
import milk from '@/page/category/children/milk/milk'
import drinks from '@/page/category/children/drinks/drinks'
import cosmetics from '@/page/category/children/cosmetics/cosmetics'

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
      component: category,
      children: [
        {
          path: '/',
          redirect: 'fruits'
        },
        {
          path: 'fruits',
          name: 'fruits',
          meta: {
            index: 1
          },
          component: fruits,
        },
        {
          path: 'wine',
          name: 'wine',
          meta: {
            index: 2
          },
          component: wine,
        },
        {
          path: 'milk',
          name: 'milk',
          meta: {
            index: 3
          },
          component: milk,
        },
        {
          path: 'drinks',
          name: 'drinks',
          meta: {
            index: 4
          },
          component: drinks,
        },
        {
          path: 'cosmetics',
          name: 'cosmetics',
          meta: {
            index: 5
          },
          component: cosmetics,
        }
      ]
    },
    {
      path: '/cart',
      name: 'shoppingMall',
      component: shoppingMall
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    }
  ]
})
