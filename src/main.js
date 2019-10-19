import App from './App.vue'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from "../router/index"
import Unicon from 'vue-unicons'
import {uniAt, uniKeySkeleton, uniSortAmountDown } from 'vue-unicons/src/icons'

Unicon.add([uniAt,uniKeySkeleton, uniSortAmountDown])
Vue.use(Unicon)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
