/* 【mian入口文件区域】 */
// 引入Vue的框架
import Vue from 'vue'
// 挂载
import App from './App.vue'
// 引入路由
import router from '@/router/index.js'
// 引入框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入面的样式
import '@/styles/index.less'
Vue.use(ElementUI)
/*  */

// 阻止启动生产消息，常用作指令。
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
