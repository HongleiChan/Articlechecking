<template>
  <div>
    <el-header align="center"> <h1>文档查重</h1></el-header>
    <div>
      <el-tabs  v-model="activeName" type="card"  @tab-click="handleClick" class="tab" stretch>
        <el-tab-pane label="按文章查重" name="Article">
        </el-tab-pane>
        <el-tab-pane label="按段落查重" name="Paragraph" >
        </el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeName:'Article'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  watch:{
    'activeName':function (val) {
      let urlStr = '/' + val;
      this.$router.push(urlStr);
    }
  }
}
</script>

<style>

</style>
