
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import SignUp from '../views/signup'
import SignIn from '../views/signin'
import Faq from '../views/faq'
import Admin from '../views/admin'
import AdminDuty from '../views/dashboard/duty'

import report from '../views/user-view/report'
import UpdateInfo from '../views/user-view/updateInfo'

import Health from '../views/dashboard/health'
import Sanitation from '../views/dashboard/sanitation'
import VisitorRecord from '../views/dashboard/record'
import Security from '../views/dashboard/security'
import Feedback from '../views/dashboard/feedback'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sign-up',
    name: 'signingup',
    component: SignUp,
  },
  {
    path: '/sign-in',
    name: 'signingin',
    component: SignIn,
  },
  {
    path: '/frequently-asked-question',
    name: 'FreAskQues',
    component: Faq,
  },
  {
    path: '/dashboard',
    name: 'AdminDashboard',
    component: Admin,
  },
  {
    path: `/dashboard/duty`,
    name: 'DashboardDuty',
    component: AdminDuty,
  },
  {
    path: '/dashboard/health',
    name: 'DashboardHealth',
    component: Health,
  },
  {
    path: '/dashboard/sanitation',
    name: 'DashboardSanitation',
    component: Sanitation,
  },
  {
    path: '/dashboard/record',
    name: 'VisitorRecord',
    component: VisitorRecord,
  },
  {
    path: '/dashboard/security',
    name: 'DashboardSecurity',
    component: Security,
  },
  {
    path: '/dashboard/feedback',
    name: 'DashboardFeedback',
    component: Feedback,
  },
  {
    path: `/user-view/1810913/report`,
    name: 'user-report',
    component: report,
  },
  {
    path: `/user-view/1810913/updateInfo`,
    name:'updateInfo',
    component:UpdateInfo,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router