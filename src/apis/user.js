/* 【@/apis/user.js--封装apis方法】 */
// 引入axios.js
import axios from '@/utils/myaxios.js'
export const login = (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}
