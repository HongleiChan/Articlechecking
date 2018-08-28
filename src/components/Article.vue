<template>
  <div>
    <el-form ref="form" :model="article_form" label-width="100px" >
      <el-form-item label="标题:">
        <el-input type="text" v-model="article_form.title" style="width: 100%;padding-left: 0px" clearable></el-input>
      </el-form-item>
      <el-form-item label="文章:">
        <el-input  type="textarea" :rows="7" placeholder="请输入内容" v-model="article_form.content" style="width: 100% "
        ></el-input>
      </el-form-item>
      <el-form-item label="相似度阈值:">
        <el-input type="text" v-model="article_form.thresold" style="width: 100px;padding-left: 0px" clearable></el-input>
      </el-form-item>
      <el-form-item label="查重方法选择:">
        <el-radio-group v-model="article_form.method">
          <el-radio label="SimHashWith01"></el-radio>
          <el-radio label="SimHashWithTFIDF"></el-radio>
          <el-radio label="MinHash"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      article_form:{
        title:'',
        content:'',
        thresold:'',
        method:''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style>

</style>
