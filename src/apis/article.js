// 获取文章列表
// 向后台axios发请求的文件
import axios from '@/utils/myaxios.js'
export const GetPostList = () => {
  return axios({
    url: '/login'

  })
}
