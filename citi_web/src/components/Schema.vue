<template>
  <div>
    <el-row :gutter="20">
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
                {{sch.time1}} - {{sch.time2}}
              </time>
              <el-button type="text" class="button">查看股票详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="display: flex;flex-direction:row">
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
      <el-card class="box-card2" shadow="hover">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title = "一周内方案收益折线图" name="1">

          </el-collapse-item>
          <el-collapse-item title = "总收益折线图" name = "2">

          </el-collapse-item>
        </el-collapse>
      </el-card>
    </el-row>
  </div>
</template>

<script>export default {
  name: 'Schema',
  data: function () {
    return{
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
          id:1,
          name: '余额宝',
          growthRate: 0.0478,
          time1: '2018-9-10',
          time2: '2019-9-10',
          description: '中低风险，定期产品'
        },
        {
          id:2,
          name: '支付宝',
          growthRate: 0.0478,
          time1: '2018-9-10',
          time2: '2019-9-10',
          description: '中低风险，定期产品'
        },
        {
          id:3,
          name: '傻逼宝',
          growthRate: 0.0478,
          time1: '2018-9-10',
          time2: '2019-9-10',
          description: '中低风险，定期产品'
        }
      ]
    }

  },
  created: function () {
    this.getSchema()
  },
  methods: {
    getSchema: function () {

    },
    postData: function () {
      let
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
    margin-left: 36%;
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
