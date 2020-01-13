// 获取所有的文章列表
import axios from '@/utils/myaxios.js'
export const getCateList = () => {
  return axios({
    url: '/category'
  })
}
