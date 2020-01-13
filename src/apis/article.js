// 获取文章列表
// 向后台axios发请求的文件.
import axios from '@/utils/myaxios.js'
export const getPostList = (params) => {
  return axios({
    url: `/post`,
    params
  })
}
