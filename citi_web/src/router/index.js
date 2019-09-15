import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index'),
      redirect: '/introduction',
      children: [
        {
          path: '/introduction',
          component: () => import('@/views/introduction')
        },
        {
          name: 'market',
          path: '/market',
          component: () => import('@/views/Market')
        },
        {
          name: 'func',
          path: '/func',
          component: () => import('@/views/func')
        },
        {
          name: 'tracer',
          path: '/tracer',
          component: () => import('@/views/tracer')
        },
        {
          name: 'CompositeIndex',
          path: '/CompositeIndex/:value',
          component: () => import('@/views/CompositeIndex')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register')
    }
  ]
})
