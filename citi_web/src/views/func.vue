<template>
    <el-container>
      <el-row v-if="step===0" style="width: 100%">
        <el-col :span="12">
          <el-card shadow="hover" style="height: 300px;width: 300px;float: right;margin-right: 12px;margin-top: 100px">
            <p>根据以往参数获取投资消费建议</p>
            <el-button @click="goToStep2">开始</el-button>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card @click="goToStep1" shadow="hover" style="height: 300px;width: 300px;margin-left: 12px;margin-top: 100px">
            <p>填写问卷计算分析投资消费建议</p>
            <el-button @click="goToStep1">开始</el-button>
          </el-card>
        </el-col>
      </el-row>
<!--      -->
      <el-row v-else-if="step===1" style="width: 100%">
        <el-col :span="6">
          <div style="height: 360px"></div>
        </el-col>
        <el-col :span="12">
          <el-card shadow="hover" style="min-height: 700px;padding: 12px">
            <el-steps :active="step" style="text-align:left">
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
      <!--      -->
      <el-row v-else-if="step===2" style="width: 100%">
        <el-col :span="6">
          <div style="height: 360px"></div>
        </el-col>
        <el-col :span="12">
          <el-card shadow="hover" style="min-height: 700px;padding: 12px">
            <el-steps :active="step" style="text-align:left">
              <el-step title="填写问卷"></el-step>
              <el-step title="方案选择"></el-step>
              <el-step title="完成选择"></el-step>
            </el-steps>
            <el-divider></el-divider>
            <Scheme></Scheme>
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
import Scheme from '../components/Scheme'
export default {
  data () {
    return {
      step: 0,
      active: 1
    }
  },
  comments: {
    Query,
    Scheme
  },
  methods: {
    goToStep1 () {
      this.step = 1
    },
    goToStep2 () {
      this.step = 2
    }
  }
}
</script>

<style scoped>

</style>
