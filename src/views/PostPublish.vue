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
          <VueEditor :config="config" ref="vueEditor" />
        </el-form-item>
        <!-- 复选框 -->
        <el-form-item label="栏目:">
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
          >全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="cate in cateList" :label="cate.id" :key="cate.id">{{cate.name}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import VueEditor from 'vue-word-editor'
import 'quill/dist/quill.snow.css'
export default {
  components: {
    VueEditor
  },
  data () {
    return {
      // 标题部分
      post: {
        title: '',
        content: '',
        categories: [],
        cover: [],
        type: 1,
        elForm: ''
      }
    }
  }
}
</script>

<style>
</style>
