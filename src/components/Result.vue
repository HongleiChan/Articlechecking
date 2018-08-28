<template>
<div>
  <el-header align="center"> <h2>检测报告</h2></el-header>
  <div style="width: 85%">
    <el-table
      :data="tableData"
      stripe
      border
      fit
      >
      <el-table-column prop="title" label="基本信息"  width="300px">
      </el-table-column>
      <el-table-column prop="message" label="" width="1300px" >
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
export default {
  data() {

    return {
      tableData: [{
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
  }
}
</script>

<style>

</style>
