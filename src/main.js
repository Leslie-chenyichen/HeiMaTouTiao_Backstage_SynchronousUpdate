// 引入Vue的框架
import Vue from 'vue'
// 挂载
import App from './App.vue'
// 引入框架
import ElementUI from 'element-ui'
Vue.use(ElementUI)

// 阻止启动生产消息，常用作指令。
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
