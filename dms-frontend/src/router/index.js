
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import SignUp from '../views/signup'
import SignIn from '../views/signin'
import Faq from '../views/faq'
import Admin from '../views/admin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Home
  },
  {
    path: '/Sign-Up',
    name: 'signingup',
    component: SignUp,
  },
  {
    path: '/SignIn',
    name: 'signingin',
    component: SignIn,
  },
  {
    path: '/frequently-asked-question',
    name: 'faq',
    component: Faq,
  },
  {
    path: '/dormitory-manager-dashboard',
    name: 'admindashboard',
    component: Admin,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router