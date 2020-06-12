import Vue from 'vue'
import VueRouter from 'vue-router'
import BatteryVoltageHistory from '../views/BatteryVoltageHistory.vue'
import CurrentHistory from '../views/CurrentHistory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BatteryVoltageHistory',
    component: BatteryVoltageHistory
  },
  {
    path: '/current',
    name: 'CurrentHistory',
    component: CurrentHistory
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
