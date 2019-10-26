import App from './App.vue'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from "../router/index"
import Unicon from 'vue-unicons'
import {uniAt, uniKeySkeleton, uniSortAmountDown, uniUser, uniAngleUp, uniAngleDown, uniTrash} from 'vue-unicons/src/icons'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Unicon.add([uniAt,uniKeySkeleton, uniSortAmountDown, uniUser, uniAngleUp, uniAngleDown, uniTrash])
Vue.use(Unicon)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
