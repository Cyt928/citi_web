<template>
    <el-container>
      <el-row v-if="step===0" style="width:100%;" type="flex" justify="space-around">
        <el-col :span="10">
          <el-card shadow="hover" style="height: 500px;width: 400px;float: right;margin-right: 12px;margin-top: 50px">
            <p>根据以往参数获取投资消费建议</p>
            <i class="el-icon-user-solid" style="font-size:200px;margin-top:60px;color:#409EFF;"></i>
            <br />
            <el-button @click="goToStep2" style="margin-top:80px;">开始</el-button>
          </el-card>
        </el-col>
        <el-col :span="10">
          <el-card @click="goToStep1" shadow="hover" style="height: 500px;width: 400px;margin-left: 12px;margin-top: 50px">
            <p>填写问卷计算分析投资消费建议</p>
            <i class="el-icon-edit" style="font-size:200px;margin-top:60px;color:#409EFF;"></i>
            <br />
            <el-button @click="goToStep1" style="margin-top:80px;">开始</el-button>
          </el-card>
        </el-col>
      </el-row>
      <!--   问卷   -->
      <el-row v-else-if="step===1" style="width: 100%" type="flex" justify="space-around">
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
      </el-row>
      <!--  方案展示    -->
      <el-row v-else-if="step===2" style="width: 100%" type="flex" justify="space-around">
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
        url: 'http://localhost:8080/getScheme/' + sessionStorage.getItem('id')
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
