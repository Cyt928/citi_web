<template>
  <div style = "height:1000px;width:99%">
    <el-row :gutter="20" >
      <el-col :span="8" v-for="sch in this.schema" :key="sch.id">
        <el-card class="box-card" shadow="hover" style="margin-top: 10px" >
          <div style="padding: 14px;">
            <div style="display: flex;flex-direction:column;align-items: flex-start">
              <span>{{sch.name}}</span>
              <div class="incomeRate" style="margin-top: 20px">
                <span style="font-size: 13px;color: #999;">今日收益率: </span><span>{{sch.growthRate}}</span>
              </div>
            </div>
            <div class="bottom clearfix" style="display: flex;flex-direction:row;align-items: flex-start">
              <time class="time">
                {{sch.time1}} 起
              </time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row >
    <el-row :gutter="20" style="display: flex;flex-direction:row;height: 600px">
      <el-card class="box-card1" shadow="hover">
        <div class="mainCentent">
          <div class = "content">
            <div class = "content1">
              <span style="font-size: 15px;color: #999;">总投资（元)</span>
              <span style="font-size: 20px"> {{message.totalInput}}</span>
            </div>
            <div class = "content1">
              <span style="font-size: 15px;color: #999;">今日总收益（元）</span>
              <span style="font-size: 20px"> {{message.todayIncome}}</span>
            </div>
            <div class = "content1">
              <span style="font-size: 15px;color: #999;">累计总收益（元）</span>
              <span style="font-size: 20px"> {{message.totalIncome}}</span>
            </div>
          </div>
          <div class = "content">
            <div class = "content1">
              <span style="font-size: 15px;color: #999;">当前总资产（元）</span>
              <span style="font-size: 20px;">{{message.total}}</span>
            </div>
            <div class = "content1">
              <span style="font-size: 15px;color: #999;">已投资天数</span>
              <div>
                <span style="font-size: 20px;;">{{message.days}}</span><span style="font-size: 15px;color: #999;">天</span>
              </div>
            </div>
            <div class = "content1">
              <span style="font-size: 15px;color: #999;">累计增长率</span>
              <span v-if="message.totalRate.substring(0,1)=='-'" style="font-size: 20px;color: #00B060;">{{message.totalRate}}</span>
              <span v-if="message.totalRate.substring(0,1)=='+'" style="font-size: 20px;color: #EF002A;">{{message.totalRate}}</span>
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="box-card2" shadow="hover" >
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title = "方案内股票/基金/债券收益折线图" name= "1">
            <ve-line :data=chartData :settings=chartSetting width="700px" height="300px" ></ve-line>
          </el-collapse-item>
          <el-collapse-item title = "日收益变化折线图" name = "2" >
            <ve-line :data=chartData1 :settings=chartSetting1 width="700px" height="300px"></ve-line>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Tracer',
  data () {
    return {
      activeName: '2',
      message: {
        days: null,
        totalInput: null,
        total: null,
        todayIncome: null,
        totalIncome: null,
        totalRate: null
      },
      schema: [],
      chartData: {
        columns: [],
        rows: []
      },
      chartSetting: {
        metrics: [],
        dimension: ['日期']
      },
      chartData1: {
        columns: ['日期', '总收益'],
        rows: []
      },
      chartSetting1: {
        metrics: ['总收益'],
        dimension: ['日期']
      }
    }
  },
  created: function () {
    let that = this
    that.getScheme()
  },
  beforeMount: function () {
    this.creatChart()
  },
  methods: {
    getScheme: function () {
      let that = this
      that.$axios({
        method: 'get',
        url: 'http://localhost:8080/getTotal/' + sessionStorage.getItem('id')
      }).then((res) => {
        that.schema = res.data.content.scheme
        for (let i = 0; i < that.schema.length; i++) {
          that.schema[i].growthRate = that.schema[i].growthRate.toFixed(2)
          let d = new Date(that.schema[i].time1)
          let datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
          that.schema[i].time1 = datetime
        }
        that.message.total = res.data.content.total.toFixed(2)
        that.message.totalInput = res.data.content.totalInput.toFixed(2)
        that.message.totalIncome = res.data.content.totalIncome.toFixed(2)
        let rate = ((res.data.content.totalIncome / res.data.content.totalInput) * 100).toFixed(2)
        if (rate >= 0) {
          that.message.totalRate = '+' + rate + '%'
        } else {
          that.message.totalRate = rate + '%'
        }
        that.message.days = parseInt((new Date().getTime() - new Date(that.schema[0].time1).getTime()) / (24 * 3600 * 1000))
      }).catch((error) => {
        if (error.message === 'Request failed with status code 400') {
          alert('您还没有登陆')
        } else {
          alert('您的账号没有正在使用的投资方案')
        }
      })
    },
    creatChart: function () {
      let that = this
      that.$axios({
        method: 'get',
        url: 'http://localhost:8080/monthHistory/' + sessionStorage.getItem('id')
      }).then((res) => {
        let todayT = 0
        for (let i = 0; i < res.data.content.rows[res.data.content.rows.length - 1].benefits.length; i++) {
          todayT = parseFloat(res.data.content.rows[res.data.content.rows.length - 1].benefits[i]) + todayT
        }
        that.message.todayIncome = todayT
        let total = 0
        that.chartData.rows = []
        that.chartData1.rows = []
        res.data.content.rows.forEach(function (item) {
          let row = {}
          let row1 = {}
          row['日期'] = item.date
          row1['日期'] = item.date
          for (let i = 0; i < item.benefits.length; i++) {
            row[res.data.content.columns[i + 1]] = parseFloat(item.benefits[i])
            total = total + parseFloat(item.benefits[i])
          }
          row1['总收益'] = total
          that.chartData.rows.push(row)
          that.chartData1.rows.push(row1)
        })
        that.chartData.columns = res.data.content.columns
        that.chartSetting.metrics = res.data.content.columns.splice(1, res.data.content.columns.length)
      })
    },
    go_stock (index) {
      this.$router.push({
        name: 'CompositeIndex',
        path: '/CompositeIndex',
        params: {
          value: index.code
        }
      })
    }
  }
}
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .box-card1 {
    margin-right: 20px;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 500px;
    width:48%
  }
  .box-card2 {
    margin-top: 20px;
    margin-bottom: 20px;
    height: 500px;
    width:100%
  }
  .content {
    height: 500px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .content1 {
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .mainCentent {
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
</style>
