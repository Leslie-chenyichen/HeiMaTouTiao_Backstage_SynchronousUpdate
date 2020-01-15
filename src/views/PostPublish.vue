<template>
  <div class="publish">
    <!--  面包屑【路径导航栏】 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index/postPublish' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>文章发布</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card class="box-card" style="margin-top:20px">
      <el-form ref="postPublish" :model="post" label-width="80px">
        <!-- 文本输入框 -->
        <el-form-item label="标题:">
          <el-input v-model="post.title"></el-input>
        </el-form-item>

        <!-- 单选组 -->
        <el-form-item label="类型:">
          <el-radio-group v-model="post.type">
            <el-radio :label="1">文章</el-radio>
            <el-radio :label="2">视频</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 富文本框  -->
        <el-form-item label="内容:">
          <VueEditor :config="config" v-if="post.type===1" ref="vueEditor" />
          <!-- 上传区域 -->
          <el-upload class="upload-demo" action v-if="post.type===2">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传视频文件</div>
          </el-upload>
        </el-form-item>
        <!-- 复选框 -->
        <el-form-item label="栏目:">
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
          >全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="post.categories" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="cate in cateList" :label="cate.id" :key="cate.id">{{cate.name}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 提交按钮 -->
        <el-button type="primary">发布文章</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import VueEditor from 'vue-word-editor'
import 'quill/dist/quill.snow.css'
import { getCateList } from '@/apis/cate.js'
export default {
  components: {
    VueEditor
  },
  data () {
    return {
      isIndeterminate: true,
      checkAll: false,
      cateList: [],
      // 标题部分
      post: {
        title: '',
        content: '',
        categories: [],
        cover: [],
        type: 1,
        elForm: ''
      },
      config: {
        // 上传图片的配置
        uploadImage: {
          url: 'http://localhost:3000/upload',
          name: 'file',
          // 注意了这个res是结果，insert方法会把内容注入到编辑器中，res.data.url是资源地址
          uploadSuccess (res, insert) {
            insert('http://localhost:3000' + res.data.url)
          }
        },
        // 上传视频的配置
        uploadVideo: {
          url: 'http://localhost:3000/upload',
          name: 'file',
          uploadSuccess (res, insert) {
            insert('http://localhost:3000' + res.data.url)
          }
        }
      }
    }
  },
  methods: {
    // 全选与全不选
    handleCheckAllChange (val) {
      /* this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false */
    },
    // 单击全选的状态
    handleCheckedCitiesChange (value) {
      /* let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length */
    }
  },
  async mounted () {
    let res = await getCateList()
    console.log(res)
    this.cateList = res.data.data.splice(2)
  }
}
</script>

<style>
</style>
