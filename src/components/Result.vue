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
    <el-header> <h2>报告详情</h2></el-header>
  </div>
  <div>
    <report></report>
    <report></report>
    <report></report>
  </div>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="80" align="center">
  </el-pagination>
  <div>
    <el-button type="primary" @click="onSubmit">返回</el-button>
  </div>
</div>
</template>

<script>
  import Report from './Report'
export default {
    components:{'report':Report},
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
      ]
    }
  },
  methods:{
    onSubmit(){
      this.$router.push({name:'Article'});
    }
  }
}
</script>

<style>

</style>
