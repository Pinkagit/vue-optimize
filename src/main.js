import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import "./assets/scss/reset.scss";		// 引入全局重置样式
import "./assets/scss/layout.scss";		// 引入全局响应式布局
import utils from "./plugins/utils.js";   // 引入全局函数

Vue.use(VueAxios,axios);

Vue.config.productionTip = false
Vue.prototype.$utils = utils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
