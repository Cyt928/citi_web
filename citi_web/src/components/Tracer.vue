<template>
  <div style = "height:800px;width:99%">
    <el-row :gutter="20" >
      <el-col :span="8" v-for="sch in this.schema" :key="sch.id">
        <el-card class="box-card" shadow="hover" >
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
              <el-button type="text" class="button" @cell-click="go_stock">查看股票详情</el-button>
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
              <span style="font-size: 20px"> {{this.message.totalInput}}</span>
            </div>
            <div class = "content1">
              <span style="font-size: 15px;color: #999;">今日总收益（元）</span>
              <span style="font-size: 20px"> {{this.message.todayIncome}}</span>
            </div>
            <div class = "content1">
              <span style="font-size: 15px;color: #999;">累计总收益（元）</span>
              <span style="font-size: 20px"> {{this.message.totalIncome}}</span>
            </div>
            <div class = "content1">
              <span style="font-size: 15px;color: #999;">已投资天数</span>
              <div>
               <span style="font-size: 20px;;">{{this.message.days}}</span><span style="font-size: 15px;color: #999;">天</span>
              </div>
            </div>
          </div>
          <div class = "content">
            <div class = "content1">
              <span style="font-size: 15px;color: #999;">当前总余额（元）</span>
              <span style="font-size: 20px;">{{message.total}}</span>
            </div>
            <div class = "content1">
              <span style="font-size: 15px;color: #999;">今日增长率</span>
              <span v-if="this.message.todayRate.substring(0,1)=='+'" style="font-size: 20px;color: #EF002A;">{{this.message.todayRate}}</span>
              <span v-if="this.message.todayRate.substring(0,1)=='-'" style="font-size: 20px;color: #00B060;">{{this.message.todayRate}}</span>
            </div>
            <div class = "content1">
              <span style="font-size: 15px;color: #999;">累计增长率</span>
              <span v-if="this.message.totalRate.substring(0,1)=='-'" style="font-size: 20px;color: #00B060;">{{this.message.totalRate}}</span>
              <span v-if="this.message.totalRate.substring(0,1)=='+'" style="font-size: 20px;color: #EF002A;">{{this.message.totalRate}}</span>
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="box-card2" shadow="hover" >
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title = "方案内股票/基金/债券收益折线图" name= "1">
            <ve-line :data=chartData :settings=chartSetting width="700px" height="350px" ></ve-line>
          </el-collapse-item>
          <el-collapse-item title = "日收益变化折线图" name = "2" >
            <ve-line :data=chartData1 :settings=chartSetting1 width="700px" height="350px"></ve-line>
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
      activeName: '1',
      message: {
        days: 10,
        totalInput: 2000.00,
        total: 2041.20,
        todayIncome: 1.20,
        totalIncome: 41.20,
        todayRate: '-0.51%',
        totalRate: '+0.43%'
      },
      schema: [
        {
          name: '中国平安',
          growthRate: 0.0478,
          time1: '2019-8-10 '
        },
        {
          name: '茅台',
          growthRate: 0.0478,
          time1: '2019-9-10'
        },
        {
          name: '一汽',
          growthRate: 0.0478,
          time1: '2019-7-3'
        }
      ],
      chartData: {
        columns: ['日期', '中国平安', '茅台', '一汽'],
        rows: [{ '日期': '9.1', '中国平安': 1.0, '茅台': 2.0, '一汽': 0.3 },
          { '日期': '9.2', '中国平安': 2.3, '茅台': 3.0, '一汽': -0.2 },
          { '日期': '9.3', '中国平安': 3.4, '茅台': 2.5, '一汽': 1.4 },
          { '日期': '9.4', '中国平安': 2.5, '茅台': 3.6, '一汽': 0.8 },
          { '日期': '9.5', '中国平安': 2.3, '茅台': 1.5, '一汽': 0.6 },
          { '日期': '9.6', '中国平安': 3.2, '茅台': 1.0, '一汽': 0.5 },
          { '日期': '9.7', '中国平安': 0.0, '茅台': 0.9, '一汽': 0.4 },
          { '日期': '9.8', '中国平安': -0.4, '茅台': 0.5, '一汽': 0.3 }]
      },
      chartSetting: {
        metrics: ['中国平安', '茅台', '一汽'],
        dimension: ['日期']
      },
      chartData1: {
        columns: ['日期', '总收益'],
        rows: [{ '日期': '9.1', '总收益': 3.3 },
          { '日期': '9.2', '总收益': 5.1 },
          { '日期': '9.3', '总收益': 7.2 },
          { '日期': '9.4', '总收益': 6.2 },
          { '日期': '9.5', '总收益': 5.4 },
          { '日期': '9.6', '总收益': 4.7 },
          { '日期': '9.7', '总收益': 1.3 },
          { '日期': '9.8', '总收益': 1.2 }]
      },
      chartSetting1: {
        metrics: ['总收益'],
        dimension: ['日期']
      }
    }
  },
  mounted: function () {
    this.getSchema()
    this.creatChart()
  },
  methods: {
    getSchema: function () {
      let that = this
      this.$axios({
        method: 'get',
        url: 'http://localhost:8080/getTotal/' + sessionStorage.getItem('id')
      }).then((res) => {
        if (res.data.success) {
          console.log(res.data.content)
          that.schema = res.data.content.scheme
          that.message.total = res.data.content.total
          that.message.totalInput = parseFloat(res.data.content.totalInput)
          that.message.totalIncome = parseFloat(res.data.content.totalIncome)
          that.message.totalRate = parseFloat(res.data.content.totalIncome) / parseFloat(res.data.content.totalInput)
          that.message.days = parseInt((new Date().getTime() - new Date(that.schema[0].time1).getTime()) / (24 * 3600 * 1000))
          console.log(that.message)
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
        that.message.todayRate = that.message.todayIncome / (that.message.total - that.message.todayIncome)
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

  .button {
    margin-left: 50%;
    font-size: 13px;
    padding: 0;
    float: right;
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
    height: 600px;
    width:48%
  }
  .box-card2 {
    margin-top: 20px;
    margin-bottom: 20px;
    height: 600px;
    width:100%
  }
  .content {
    height: 600px;
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
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
</style>
