<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: 100%;
}
.el-col {
  height: 100%;
}
.el-row-top {
  height: 60px;
  background: #409eff;
}
.el-row-content {
  height: calc(100% - 60px);
  background: #b3c0d1;
}
.el-col-left {
  overflow-y: auto;
}
.el-col-right {
  background-color: #e9eef3;
}
.el-row-footer {
  height: 40px;
  background: #99a9bf;
}
body .el-table th.gutter {
  display: table-cell !important;
}
</style>
