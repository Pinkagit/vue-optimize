import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./assets/scss/reset.scss";		// 引入全局重置样式
import "./assets/scss/layout.scss";		// 引入全局响应式布局

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
