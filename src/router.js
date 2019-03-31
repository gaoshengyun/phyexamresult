import Vue from 'vue'
import Router from 'vue-router'
import BaseInfo from './components/baseinfo'
import BloodCheck from './components/bloodcheck'
import Ultrasound from './components/ultrasound'
import Xray from './components/xray'
import Ecg from './components/ecg'
import Immunoassay from './components/immunoassay'


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
    },
    {
      path:'/ultrasound',
      component:Ultrasound
    },
    {
      path:'/xray',
      component:Xray
    },
    {
      path:'/ecg',
      component:Ecg
    },
    {
      path:'/immunoassay',
      component:Immunoassay
    }
  ]
})
