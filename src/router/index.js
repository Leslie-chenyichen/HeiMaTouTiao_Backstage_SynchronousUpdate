/* 【@/router/index.js--路由文件】 */
// 引入Vue框架
import Vue from 'vue'
// 引入路由依赖包
import VueRouter from 'vue-router'
// 引入登录页面，注册，发网址id
import Login from '@/views/Login.vue'
// 引首页的的路由
import Index from '@/views/Index.vue'

Vue.use(VueRouter)
// 新建一下路由
let router = new VueRouter({
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Index',
      path: '/index',
      component: Index
    }
  ]
})
// 添加导航守卫

// 添加导航守卫
router.beforeEach((to, from, next) => {
  // 判断当前是否跳转到登陆页，如果是，直接next
  if (to.path === '/login') {
    next()
  } else {
    // 判断是否有登陆状态
    let token = localStorage.getItem('heima_toutiao_houtai_41')
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
