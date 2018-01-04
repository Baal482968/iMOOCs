import Vue from 'vue'
import Router from 'vue-router'
import Body from '@/components/Body'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Body',
      component: Body
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
