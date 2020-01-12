import Vue from 'vue'
import App from './App.vue'
// 阻止启动生产消息，常用作指令。
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
