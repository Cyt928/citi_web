<template>
    <el-container>
      <el-row style="width: 100%">
        <el-col :span="6">
          <div style="height: 360px"></div>
        </el-col>
        <el-col :span="12">
          <el-card shadow="hover" style="min-height: 700px;padding: 12px">
            <el-steps :active="active" style="text-align:left">
              <el-step title="填写问卷"></el-step>
              <el-step title="方案选择"></el-step>
              <el-step title="完成选择"></el-step>
            </el-steps>
            <el-divider></el-divider>
            <Query></Query>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover" style="height: 360px;margin-left: 12px">
            <div>历史选择 or tips or 别的什么东西</div>
          </el-card>
        </el-col>
      </el-row>
    </el-container>
</template>

<script>
import Query from '../components/Query'
export default {
  data () {
    return {
      active: 1
    }
  },
  name: 'func',
  components: {Query}
}
</script>

<style scoped>

</style>
