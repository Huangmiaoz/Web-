import Vue from 'vue'
import App from './App.vue'

// 导入路由模块
// 如果导入的是文件夹，则默认导入该文件夹下index.js的文件
import router from '@/router/index.js'

import './assets/css/bootstrap.css'
import './index.css'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  // 将路由的实例对象进行挂载
  router
}).$mount('#app')
