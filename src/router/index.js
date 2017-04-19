import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Principal from '@/components/Principal'
import Toma from '@/components/Toma'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/principal',
      name: 'Principal',
      component: Principal
    },
    {
      path: '/toma',
      name: 'Toma',
      component: Toma
    }
  ]
})
