import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view'
import 'lib-flexible'
import './assets/scss/style.scss'
import './mock/index.js'
import echarts from 'echarts'
Vue.use(dataV)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
