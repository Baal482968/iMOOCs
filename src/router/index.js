import Vue from 'vue'
import Router from 'vue-router'
import Body from '@/components/Body'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import SingleCourse from '@/components/SingleCourse'

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
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/course/:_id',
      name: 'SingleCourse',
      component: SingleCourse
    }
  ]
})
