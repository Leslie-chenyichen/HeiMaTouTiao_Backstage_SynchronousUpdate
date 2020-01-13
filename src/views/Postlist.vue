<template>
 <div class="postlist">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表格 -->
    <el-table :data="postList" style="width: 100%;margin-top:15px" border>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="title" label="标题" width="680"></el-table-column>
      <el-table-column label="类型"  width="100">
        <template slot-scope="scope">
          {{scope.row.type===1?'文章':'视频'}}
        </template>
      </el-table-column>
      <el-table-column prop="user.nickname" label="作者"  width="150"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="编辑" placement="top">
            <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row)"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="分享" placement="top">
            <el-button type="info" icon="el-icon-share"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top">
            <el-button type="danger" icon="el-icon-delete"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
    style='float:right'
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="2"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import { getPostList } from '@/apis/article.js'
export default {
  data () {
    return {
      postList: [],
      pageSize: 2,
      pageIndex: 1,
      total: 0
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页${val}条`)
      this.pageSize = val
      this.init()
    },
    // 切换时
    handleCurrentChange (val) {
      this.pageIndex = val
      this.init()
    },
    /* article */

    // 获取文章列表的分页数据
    async init () {
      let res = await getPostList({
        pageSize: this.pageSize,
        pageIndex: this.pageIndex
      })
      this.postList = res.data.data
      console.log(res)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style>
</style>
