<template>
  <div style="background: rgb(246,246,246);height: 100%">
    <el-card shadow="hover" style="background-color: #000000">
      <el-image :src="src1"></el-image>
    </el-card>
    <el-card shadow="hover" style="float:left;width:50%">
      <el-image :src="src2" style="width:100%;height:400px"></el-image>
    </el-card>
    <el-card shadow="hover">
      <el-image :src="src3" style="width:100%;height:400px"></el-image>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      src1: require('../assets/mlc.png'),
      src2: require('../assets/cj.jpg'),
      src3: require('../assets/phone.jpg')
    }
  }
}
</script>
<style scoped>
  .el-card {
    margin-top: 5px;
  }
</style>
