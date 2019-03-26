import Vue from 'vue'
import Router from 'vue-router'
import BaseInfo from './components/baseinfo'
import BloodCheck from './components/bloodcheck'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BaseInfo
    },
    {
      path:'/bloodcheck',
      component:BloodCheck
    }
  ]
})
