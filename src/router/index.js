import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Builder from '@/components/Builder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/builder',
      name: 'Builder',
      component: Builder
    }
  ]
})
