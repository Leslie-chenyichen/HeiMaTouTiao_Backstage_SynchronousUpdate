/* 【@/apis/user.js--封装apis方法】 */
// 向后台axios发请求的文件
import axios from '@/utils/myaxios.js'
export const login = (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}
