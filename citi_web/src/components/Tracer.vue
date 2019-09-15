<template>
  <div>
    <el-row :gutter="20" >
      <el-col :span="8" v-for="sch in schema" :key="sch.id">
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
                {{sch.time1}} -
              </time>
              <el-button type="text" class="button">查看股票详情</el-button>
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
            <div class = "content1">
              <span style="font-size: 15px;color: #999;">投资天数</span>
              <div>
               <span style="font-size: 20px;;">{{message.days}}</span><span style="font-size: 15px;color: #999;">天</span>
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
              <span v-if="message.todayRate.substring(0,1)=='+'" style="font-size: 20px;color: #EF002A;">{{message.todayRate}}</span>
              <span v-if="message.todayRate.substring(0,1)=='-'" style="font-size: 20px;color: #00B060;">{{message.todayRate}}</span>
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
          <el-collapse-item title = "一周内方案收益折线图" name= "1">
            <ve-line :data=chartData :settings=chartSetting width="750px" height="400px" ></ve-line>
          </el-collapse-item>
          <el-collapse-item title = "总收益折线图" name = "2" >
            <ve-line :data=chartData1 :settings=chartSetting1 width="750px" height="400px"></ve-line>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Tracer',
  data: function () {
    return {
      activeName: '1',
      message: {
        days: 100,
        totalInput: 200000.00,
        total: 204000.30,
        todayIncome: 20.30,
        totalIncome: 4000.30,
        todayRate: '-0.51%',
        totalRate: '+0.43%'
      },
      schema: [
        {
          name: '余额宝',
          growthRate: 0.0478,
          time1: '2018-9-10 '
        },
        {
          name: '支付宝',
          growthRate: 0.0478,
          time1: '2018-9-10'
        },
        {
          name: 'xx宝',
          growthRate: 0.0478,
          time1: '2222222'
        }
      ],
      chartData: {
        columns: ['日期', '余额宝', '支付宝', '傻逼宝'],
        rows: [{ '日期': '9.1', '余额宝': 10, '支付宝': 20, '傻逼宝': 30 },
          { '日期': '9.2', '余额宝': 30, '支付宝': 5, '傻逼宝': 10 },
          { '日期': '9.3', '余额宝': 10, '支付宝': 20, '傻逼宝': 20 },
          { '日期': '9.4', '余额宝': 20, '支付宝': 30, '傻逼宝': 20 },
          { '日期': '9.5', '余额宝': 20, '支付宝': 40, '傻逼宝': 10 },
          { '日期': '9.6', '余额宝': 40, '支付宝': 10, '傻逼宝': 50 },
          { '日期': '9.7', '余额宝': 30, '支付宝': 20, '傻逼宝': 20 },
          { '日期': '9.8', '余额宝': 10, '支付宝': 20, '傻逼宝': 30 }]
      },
      chartSetting: {
        metrics: ['余额宝', '支付宝', '傻逼宝'],
        dimension: ['日期']
      },
      chartData1: {
        columns: ['日期', '总收益'],
        rows: [{ '日期': '9.1', '总收益': 50 },
          { '日期': '9.2', '总收益': 50 },
          { '日期': '9.3', '总收益': 80 },
          { '日期': '9.4', '总收益': 60 },
          { '日期': '9.5', '总收益': 90 },
          { '日期': '9.6', '总收益': 100 },
          { '日期': '9.7', '总收益': 120 },
          { '日期': '9.8', '总收益': 50 },
          { '日期': '9.9', '总收益': 50 },
          { '日期': '9.10', '总收益': 80 },
          { '日期': '9.11', '总收益': 60 },
          { '日期': '9.5', '总收益': 90 },
          { '日期': '9.6', '总收益': 100 },
          { '日期': '9.7', '总收益': 120 },
          { '日期': '9.1', '总收益': 50 },
          { '日期': '9.2', '总收益': 50 },
          { '日期': '9.3', '总收益': 80 },
          { '日期': '9.4', '总收益': 60 },
          { '日期': '9.5', '总收益': 90 },
          { '日期': '9.6', '总收益': 100 },
          { '日期': '9.7', '总收益': 120 },
          { '日期': '9.1', '总收益': 50 },
          { '日期': '9.2', '总收益': 50 },
          { '日期': '9.3', '总收益': 80 },
          { '日期': '9.4', '总收益': 60 },
          { '日期': '9.5', '总收益': 90 },
          { '日期': '9.6', '总收益': 100 },
          { '日期': '9.7', '总收益': 120 }]
      },
      chartSetting1: {
        metrics: ['总收益'],
        dimension: ['日期']
      }
    }
  },
  created: function () {
    this.getSchema()
    this.creatChart()
  },
  methods: {
    getSchema: function () {
      this.$http({
        method: 'get',
        url: '/trace/getTotal?' + 'userId=' + sessionStorage.getItem('id')
      }).then(re => {
        let res = JSON.parse(re)
        this.schema = res.schema
        this.message.total = parseFloat(res.total)
        this.message.totalInput = parseFloat(res.totalInput)
        this.message.totalIncome = parseFloat(res.totalIncome)
        this.message.totalRate = parseFloat(res.totalIncome) / parseFloat(res.totalInput)
        this.message.days = parseInt((new Date().getTime() - new Date(this.schema[0].time1).getTime()) / 24 * 3600 * 1000)
      })
    },
    creatChart: function () {
      this.$http({
        method: 'get',
        url: '/trace/monthHistory?' + 'userId=' + sessionStorage.getItem('id')
      }).then(re => {
        let res = JSON.parse(re)
        let todayT = 0
        for (let i = 0; i < res.rows[res.rows.length - 1].list.length; i++) {
          todayT = parseFloat(res.rows[res.rows.length - 1].list[i]) + todayT
        }
        this.message.todayIncome = todayT
        this.message.todayRate = this.message.todayIncome / (this.message.total - this.message.todayIncome)
        let total = 0
        res.rows.forEach(function (item) {
          let row = {}
          let row1 = {}
          row['日期'] = item.date
          row1['日期'] = item.date
          for (let i = 0; i < item.list.length; i++) {
            row[res.columns[i]] = parseFloat(item.list[i])
            total = total + parseFloat(item.list[i])
          }
          row1['总收益'] = total
          this.chartData.rows.push(row)
        })
        this.chartData.columns = res.columns
        this.chartSetting.metrics = res.columns.splice(1, res.columns.length)
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
