<template>
  <el-container style="display: flex;flex-direction: column;align-items: center">
    <h3>填写信息以计算</h3>
    <el-form style="display: flex;flex-direction: column;">
      <el-form-item label="1.问题11111111111111111111111111111111111111111111111111111111111111111111111111" style="display: block">
        <br>
        <el-radio-group v-model="quest1" style="float: left">
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="2.问题22222222222222222222222222222" style="display: block">
        <br>
        <el-radio-group v-model="quest2" style="float: left">
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="2.问题22222222222222222222222222222" style="display: block">
        <br>
        <el-slider v-model="quest3"></el-slider>
      </el-form-item>
    </el-form>

  </el-container>

</template>

<script>
export default {
  data () {
    return {
      quest1: '',
      quest2: '',
      quest3: ''
    }
  },
  name: 'query'
}
</script>

<style scoped>

</style>
