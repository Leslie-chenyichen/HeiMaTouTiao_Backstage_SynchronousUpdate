/* 【@/router/index.js--路由文件】 */
// 引入Vue框架
import Vue from 'vue'
// 引入路由依赖包
import VueRouter from 'vue-router'
// 引入登录页面，注册，发网址id
import Login from '@/views/Login.vue'
Vue.use(VueRouter)
// 新建一下路由
let router = new VueRouter({
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    }
  ]
})

export default router
