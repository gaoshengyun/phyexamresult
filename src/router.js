import Vue from 'vue'
import Router from 'vue-router'
import BaseInfo from './components/baseinfo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BaseInfo
    }
  ]
})
