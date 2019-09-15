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
      <!--   问卷   -->
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
            <Query @nextStep="nextStep"></Query>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover" style="height: 360px;margin-left: 12px">
            <div>历史选择 or tips or 别的什么东西</div>
          </el-card>
        </el-col>
      </el-row>
      <!--  方案展示    -->
      <el-row v-else-if="step===2" style="width: 100%">
        <el-col :span="6">
          <div style="height: 360px"></div>
        </el-col>
        <el-col :span="12">
          <el-card shadow="hover" style="min-height: 700px;padding: 12px;">
            <el-steps :active="step" style="text-align:left">
              <el-step title="填写问卷"></el-step>
              <el-step title="方案选择"></el-step>
              <el-step title="完成选择"></el-step>
            </el-steps>
            <el-divider></el-divider>
            <Scheme :scheme="scheme"></Scheme>
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
      active: 1,
      scheme: {
        // 假数据
        stockRank: ['00586.SZ', '002243.SZ'],
        plus_or_minus: [0, 0.44],
        comsumption_ration: [1, 1]
      }
    }
  },
  components: {
    Query,
    Scheme
  },
  methods: {
    goToStep1 () {
      this.step = 1
    },
    goToStep2 () {
      this.step = 2
      this.getScheme()
    },
    nextStep () {
      this.step = this.step + 1
      this.getScheme()
    },
    getScheme () {
      let that = this
      this.$axios({
        method: 'get',
        url: 'http://localhost:8080/getScheme/' + sessionStorage.getItem('id') // TODO 后端登陆成功后返回里加一个userId
      }).then((res) => {
        if (res.data.success) {
          that.scheme = res.data.content
        }
      }).catch(function (error) {
        alert(error)
      })
    }
  },
  mounted () {
    // TODO 需要一个接口返回该用户是否填写过问卷
  }
}
</script>

<style scoped>

</style>
