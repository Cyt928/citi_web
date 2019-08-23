<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="沪深" name="1">
      <el-row :gutter="20">
        <el-col :span="8" v-for="num in hushenIndexNumber" :key="num.value">
          <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix" @click="go(num)">
                <span>{{num.name}}</span>
              </div>
              <div  @click="go(num)">
                <div>
                  <span class="close">{{num.now}}</span>
                  <span class="change">{{num.change}}</span>
                  <span class="change">{{(num.change / num.lastClose * 100).toFixed(2)}}%</span>
                </div>
                <div>
                  <span>成交量：{{num.totalAmount.toFixed(2)}}亿</span>
                </div>
                <div>
                  <span>最高：{{num.high}}，最低:{{num.low}}</span>
                </div>
              </div>
          </el-card>
        </el-col>
      </el-row>
    </el-collapse-item>
    <el-collapse-item title="亚太" name="2">
      <el-row :gutter="20">
        <el-col :span="6" v-for="num in ytIndexNumber" :key="num.value">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>{{num.name}}</span>
            </div>
            <div>
              <span>{{num.now}} {{num.change}} {{num.changeRate}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-collapse-item>
    <el-collapse-item title="美股" name="3">
      <el-row :gutter="20">
        <el-col :span="8" v-for="num in usIndexNumber" :key="num.value">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>{{num.name}}</span>
            </div>
            <div>
              <span>{{num.now}} {{num.change}} {{num.changeRate}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  name: 'Stock',
  data: function () {
    return {
      activeName: '1',
      hushenIndexNumber: [
        { value: 'sh000001',
          name: '上证指数',
          now: 0,
          open: 0,
          close: 0,
          high: 0,
          low: 0,
          lastClose: 0,
          change: 0,
          total: 0,
          totalAmount: 0
        },
        {
          value: 'sz399001',
          name: '深证成指',
          now: 0,
          open: 0,
          close: 0,
          high: 0,
          low: 0,
          lastClose: 0,
          change: 0,
          total: 0,
          totalAmount: 0
        },
        {
          value: 'sz399006',
          name: '创业板指',
          now: 0,
          open: 0,
          close: 0,
          high: 0,
          low: 0,
          lastClose: 0,
          change: 0,
          total: 0,
          totalAmount: 0
        }
      ],
      ytIndexNumber: [
        {
          value: 'int_hangseng',
          name: '恒生指数',
          now: 0,
          change: 0,
          changeRate: 0
        },
        {
          value: 'int_nikkei',
          name: '日经指数',
          now: 0,
          change: 0,
          changeRate: 0
        },
        {
          value: 'b_TWSE',
          name: '台湾台北指数',
          now: 0,
          change: 0,
          changeRate: 0,
          time: ''
        },
        {
          value: 'b_FSSTI',
          name: '富时新加坡海峡时报指数',
          now: 0,
          change: 0,
          changeRate: 0,
          time: ''
        }
      ],
      usIndexNumber: [
        {
          value: 'int_dji',
          name: '道琼斯',
          now: 0,
          change: 0,
          changeRate: 0
        },
        {
          value: 'int_nasdaq',
          name: '纳斯达克',
          now: 0,
          change: 0,
          changeRate: 0
        },
        {
          value: 'int_sp500',
          name: '标普500',
          now: 0,
          change: 0,
          changeRate: 0
        }
      ]
    }
  },
  created: function () {
    this.getHushenIndexNumber()
    this.getOtherIndexNumber()
  },
  methods: {
    go (index) {
      this.$router.push({
        name: 'CompositeIndex',
        path: '/CompositeIndex',
        params: {
          value: index.value,
          name: index.name,
          now: index.now,
          open: index.open,
          close: index.close,
          high: index.high,
          low: index.low,
          lastClose: index.lastClose,
          change: index.change,
          total: index.total,
          totalAmount: index.totalAmount
        }
      })
    },
    getHushenIndexNumber: function () {
      let a = this.hushenIndexNumber
      let vm = this
      a.forEach(function (n) {
        vm.$http({
          method: 'get',
          url: '/xinlang/list=' + n.value,
          headers: {
            'Content-Type': 'application/javascript',
            'Access-Control-Allow-Origin': '*'
          }
        }).then(res => {
          let a = JSON.stringify(res.data).split(',')
          for (var i = 0; i < 6; i++) {
            a[i] = parseFloat(a[i]).toFixed(2)
          }
          n.open = a[1]
          n.lastClose = a[2]
          n.now = a[3]
          n.high = a[4]
          n.low = a[5]
          n.change = (n.now - n.lastClose).toFixed(2)
          if (n.value === 'sh000001') {
            n.total = (a[8] / 100000000).toFixed(2)
          } else {
            n.total = (a[8] / 10000000000).toFixed(2)
          }
          n.totalAmount = a[9] / 100000000
        })
          .catch(error => {
            console.log(error)
          })
      })
    },
    getOtherIndexNumber: function () {
      let a = this.ytIndexNumber
      a = a.concat(this.usIndexNumber)
      let vm = this
      a.forEach(function (n) {
        vm.$http({
          method: 'get',
          url: '/xinlang/list=' + n.value
        }).then(res => {
          let all = res.data.split('"')[1].split(',')
          n.now = parseFloat(all[1])
          n.change = parseFloat(all[2])
          n.changeRate = parseFloat(all[3])
          if (all.length > 4) {
            n.time = parseFloat(all[4])
          }
        }).catch(error => {
          console.log(error)
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
