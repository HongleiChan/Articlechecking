<template>
<div>
  <div style="width: 85%">
    <el-header> <h2>检测报告</h2></el-header>
    <el-table
      :data="BasicData"
      stripe
      border
      fit
      >
      <el-table-column prop="title" label=""  width="300px">
      </el-table-column>
      <el-table-column prop="message" label="基本信息" width="1300px" >
      </el-table-column>
    </el-table>
    <el-header> <h2>相似片段位置图</h2></el-header>
    <div><img src=""/></div>
    <div class="content"></div>
    <el-header> <h2>报告详情</h2></el-header>
  </div>
  <div v-show="chek" style="width: 85%">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="标题重复" name="TitleReport">
        <title-report></title-report>
      </el-tab-pane>
      <el-tab-pane label="正文重复" name="ArticleReport">
        <article-report></article-report>
      </el-tab-pane>
    </el-tabs>
  </div>
  <div v-show="chek1" style="width: 85%">
    <article-report></article-report>
  </div>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="80" align="center">
  </el-pagination>
  <div align="center" style="margin-top: 30px">
    <el-button type="primary" @click="onSubmit">回到顶部</el-button>
  </div>
</div>
</template>

<script>
  import TitleReport from './TitleReport'
  import ArticleReport from './ArticleReport'
export default {

    components:{
      'title-report':TitleReport,
      'article-report':ArticleReport
    },
  data() {
    return {
      BasicData: [{
        title:'报告编号:',
        message:''
      },{
        title:'检测范围:',
        message:''
      },{
        title:'总相似率:',
        message:'',
      }
      ],
      scrolldelay:'',
      activeName: 'TitleReport'
    }
  },
  methods:{
    onSubmit(){
      scroll(0,0);
      //this.$router.go(-1);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  computed:{
      chek(){
        var path = this.$route.path;
        if(path == '/Article'){
          return true;
        }
        else return false
      },
      chek1(){
        var path = this.$route.path;
        if(path == '/Paragraph'){
          return true;
        }
        else return false
      }
  }
}
</script>

<style>
.content{
  width: 100%;
  height: 400px;
  border: black solid 1px;
  overflow: scroll;
  overflow-x: hidden;
  font-size: 18px;
}
</style>
