<template>
  <div style="padding-bottom: 20px">
    <table border="1px" style="width: 100%">
      <tr>
        <th style="width: 5%">序号</th>
        <td style="width: 45%">{id}</td>
        <th style="width: 5%">相似比</th>
        <td style="width: 45%">{Similarity degree}</td>
      </tr>
    </table>
    <table border="1px" style="width: 100%">
      <tr>
        <th style="width: 4.27%;">标题</th>
        <td style="width: 80%;">{title}</td>
      </tr>
      <tr>
        <th>发表时间</th>
        <td>date</td>
      </tr>
      <tr>
        <th>来源</th>
        <td><a href="www.baidu.com">百度</a></td>
      </tr>
      <tr>
        <th>相似部分</th>
        <td style="width: 80%;height: 500px"><p>
          {文字高亮}
        </p></td>
      </tr>
    </table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="80" align="center">
    </el-pagination>
  </div>
</template>

<script>

</script>

<style>
  table {
    width: 200px;
    min-height: 25px;
    line-height: 25px;
    text-align: left;
    border-color: rgba(52,34,51,0.19);
    border-collapse: collapse;}
</style>
