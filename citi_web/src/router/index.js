import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index'),
      children: [
        {
          path: '/introduction',
          component: () => import('@/views/introduction')
        }
      ]
    },
    {
      name: 'market',
      path: '/market',
      component: () => import('@/views/Market')
    },
    {
      name: 'CompositeIndex',
      path: '/CompositeIndex',
      component: () => import('@/views/CompositeIndex')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    }
  ]
})
