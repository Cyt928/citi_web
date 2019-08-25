<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        active-text-color="#ffd04b">
        <el-menu-item index="1">首页（以后改成图标显示）</el-menu-item>
        <el-menu-item index="2">
          <template slot="title"><router-link tag="el-menu-item" to="/market">行情展示</router-link></template>
        </el-menu-item>
        <el-menu-item index="3">我的历史</el-menu-item>
        <el-menu-item index="4">方案跟踪</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="100px">
      </el-aside>
      <el-main>
        <h3>{{indexNumber.name}}({{indexNumber.value}})</h3>
        <el-row>
          <el-col>
            <span style="font-weight: bolder">{{indexNumber.now}}</span> {{indexNumber.change}} {{(indexNumber.change/indexNumber.lastClose*100).toFixed(2)}}%
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">最高：{{indexNumber.high}}</el-col>
          <el-col :span="8">今开：{{indexNumber.open}}</el-col>
          <el-col :span="8">成交量：{{indexNumber.total}}亿手</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">最低：{{indexNumber.low}}</el-col>
          <el-col :span="8">昨收：{{indexNumber.lastClose}}</el-col>
          <el-col :span="8">成交额：{{indexNumber.totalAmount.toFixed(2)}}亿</el-col>
          <el-col :span="8">振幅：{{(((indexNumber.high-indexNumber.low)/indexNumber.now)*100).toFixed(2)}}%</el-col>
        </el-row>
        <el-divider></el-divider>
        <el-tabs v-model="activeName">
          <el-tab-pane label="分时" name="minute" lazy=true>
            <ve-line :data="minuteChartData" :settings="minuteChartSettings" :legend-visible="false"></ve-line>
            <ve-histogram :data="minuteChartDataHistogram" :settings="minuteChartSettingsHistogram" :legend-visible="false"></ve-histogram>
          </el-tab-pane>
          <el-tab-pane label="五日" name="fiveDay" lazy=true>
            <ve-line :data="fiveDayChartData" :settings="fiveDayChartSettings"></ve-line>
            <ve-histogram :data="fiveDayChartDataHistogram" :settings="fiveDayChartSettingsHistogram" :legend-visible="false"></ve-histogram>
          </el-tab-pane>
          <el-tab-pane label="日k" name="kDaily" lazy=true>
            <ve-candle :data="kDailyChartData" :settings="kDailyChartSettings" :extend="extend"></ve-candle>
          </el-tab-pane>
          <el-tab-pane label="周k" name="kWeekly" lazy=true>
            <ve-candle :data="kWeeklyChartData" :settings="kWeeklyChartSettings" :extend="extend"></ve-candle>
          </el-tab-pane>
          <el-tab-pane label="月k" name="kMonthly" lazy=true>
            <ve-candle :data="kMonthlyChartData" :settings="kMonthlyChartSettings"></ve-candle>
          </el-tab-pane>
          <el-tab-pane label="年k" name="kYearly" lazy=true></el-tab-pane>
          <el-tab-pane label="5分" name="fiveMinute" lazy=true>
            <ve-candle :data="fiveMinuteChartData" :settings="fiveMinuteChartSettings"></ve-candle>
          </el-tab-pane>
          <el-tab-pane label="15分" name="tenMinute" lazy=true>
            <ve-candle :data="fifteenMinuteChartData" :settings="fifteenMinuteChartSettings"></ve-candle>
          </el-tab-pane>
          <el-tab-pane label="30分" name="thirtyMinute" lazy=true>
            <ve-candle :data="thirtyMinuteChartData" :settings="thirtyMinuteChartSettings"></ve-candle>
          </el-tab-pane>
          <el-tab-pane label="60分" name="sixtyMinute" lazy=true>
            <ve-candle :data="sixtyMinuteChartData" :settings="sixtyMinuteChartSettings"></ve-candle>
          </el-tab-pane>
        </el-tabs>
      </el-main>
      <el-aside width="100px">

      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'CompositeIndex',
  data () {
    this.minuteChartSettings = {
      scale: [true, true],
      area: true
    }
    this.minuteChartSettingsHistogram = {
      scale: [true, true],
      yAxisName: ['万手', '']
    }
    this.fiveDayChartSettings = {
      scale: [true, true]
    }
    this.fiveDayChartSettingsHistogram = {
      scale: [true, true],
      yAxisName: ['万手', '']
    }
    this.kDailyChartSettings = {
      scale: [true, true],
      showMA: true,
      showVol: true,
      showDataZoom: true,
      start: 99,
      end: 100,
      upColor: '#ec0000',
      downColor: '#00da3c'

    }
    this.kWeeklyChartSettings = {
      showMA: true,
      showVol: true,
      showDataZoom: true,
      start: 95,
      end: 100,
      upColor: '#ec0000',
      downColor: '#00da3c'
    }
    this.kMonthlyChartSettings = {
      showMA: true,
      showVol: true,
      showDataZoom: true,
      start: 85,
      end: 100,
      upColor: '#ec0000',
      downColor: '#00da3c'
    }
    this.fiveMinuteChartSettings = {
      showMA: true,
      showVol: true,
      showDataZoom: true,
      start: 75,
      end: 100,
      upColor: '#ec0000',
      downColor: '#00da3c'
    }
    this.fifteenMinuteChartSettings = {
      showMA: true,
      showVol: true,
      showDataZoom: true,
      start: 60,
      end: 100,
      upColor: '#ec0000',
      downColor: '#00da3c'
    }
    this.thirtyMinuteChartSettings = {
      showMA: true,
      showVol: true,
      showDataZoom: true,
      start: 60,
      end: 100,
      upColor: '#ec0000',
      downColor: '#00da3c'
    }
    this.sixtyMinuteChartSettings = {
      showMA: true,
      showVol: true,
      showDataZoom: true,
      start: 60,
      end: 100,
      upColor: '#ec0000',
      downColor: '#00da3c'
    }
    this.extend = {
      'xAxis.0.axisLabel.rotate': 45
    }
    return {
      input1: '',
      activeIndex: '2',
      activeName: 'minute',
      indexNumber: {
        value: '',
        name: '',
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
      minuteChartData: {
        columns: ['日期', '指数'],
        rows: []
      },
      minuteChartDataHistogram: {
        columns: ['日期', '成交量'],
        rows: []
      },
      fiveDayChartData: {
        columns: ['日期', '指数', '五日均线'],
        rows: []
      },
      fiveDayChartDataHistogram: {
        columns: ['日期', '成交量'],
        rows: []
      },
      kDailyChartData: {
        columns: ['date', 'open', 'close', 'lowest', 'highest', 'vol'],
        rows: []
      },
      kWeeklyChartData: {
        columns: ['date', 'open', 'close', 'lowest', 'highest', 'vol'],
        rows: []
      },
      kMonthlyChartData: {
        columns: ['date', 'open', 'close', 'lowest', 'highest', 'vol'],
        rows: []
      },
      fiveMinuteChartData: {
        columns: ['date', 'open', 'close', 'lowest', 'highest', 'vol'],
        rows: []
      },
      fifteenMinuteChartData: {
        columns: ['date', 'open', 'close', 'lowest', 'highest', 'vol'],
        rows: []
      },
      thirtyMinuteChartData: {
        columns: ['date', 'open', 'close', 'lowest', 'highest', 'vol'],
        rows: []
      },
      sixtyMinuteChartData: {
        columns: ['date', 'open', 'close', 'lowest', 'highest', 'vol'],
        rows: []
      }
    }
  },
  created: function () {
    // 基本信息
    this.getIndexNumber()
    // 分时
    this.getMinuteChart()
    // 五日
    this.getFiveDayChart()
    // 日k
    this.getKDailyChart()
    // 周k
    this.getKChart('weekly')
    // 月k
    this.getKChart('monthly')
    // 5分
    this.getKMinuteChart(5)
    // 15分
    this.getKMinuteChart(15)
    // 30分
    this.getKMinuteChart(30)
    // 60分
    this.getKMinuteChart(60)
  },
  methods: {
    getIndexNumber () {
      let index = this.$route.params
      this.indexNumber.value = index.value
      this.indexNumber.name = index.name
      this.indexNumber.now = index.now
      this.indexNumber.open = index.open
      this.indexNumber.high = index.high
      this.indexNumber.low = index.low
      this.indexNumber.lastClose = index.lastClose
      this.indexNumber.change = index.change
      this.indexNumber.total = index.total
      this.indexNumber.totalAmount = index.totalAmount
    },
    getMinuteChart: function () {
      this.$http({
        method: 'get',
        url: '/tengxun/flashdata/hushen/minute/' + this.indexNumber.value + '.js',
        headers: {
          'Content-Type': 'application/x-javascript',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(res => {
        let a = res.data.split('\\n\\')
        a = a.slice(2, a.length - 1)
        // 获取成交量
        let volumes = []
        for (let i = 0; i < a.length; i++) {
          a[i] = a[i].split(' ')
          if (i !== 0) {
            let today = parseFloat(a[i][2])
            let yesterday = parseFloat(a[i - 1][2])
            volumes.push(today - yesterday)
          } else {
            volumes.push(parseFloat(a[i][2]))
          }
        }
        // 初始化分时表数据
        let vm = this
        let counter = 0
        a.forEach(function (item) {
          let row = {}
          let rowHistogram = {}
          row['日期'] = item[0].slice(0, 3) + ':' + item[0].slice(3)
          rowHistogram['日期'] = row['日期']
          row['指数'] = item[1]
          rowHistogram['成交量'] = (volumes[counter] / 10000).toFixed(2)
          counter++
          vm.minuteChartData.rows.push(row)
          vm.minuteChartDataHistogram.rows.push(rowHistogram)
        })
      })
        .catch(error => {
          console.log(error)
        })
    },
    getFiveDayChart: function () {
      this.$http({
        method: 'get',
        url: '/sina/quotes_service/api/json_v2.php/CN_MarketData.getKLineData?symbol=' + this.indexNumber.value + '&scale=5&ma=5&datalen=1023',
        headers: {
          'Content-Type': 'application/x-javascript',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(res => {
        let vm = this
        let data = res.data
        data = data.replace(/day/g, '"day"')
        data = data.replace(/open/g, '"open"')
        data = data.replace(/high/g, '"high"')
        data = data.replace(/low/g, '"low"')
        data = data.replace(/close/g, '"close"')
        data = data.replace(/ma_volume5/g, '"ma_volume5"')
        data = data.replace(/,volume:/g, ',"volume":')
        data = data.replace(/ma_price5/g, '"ma_price5"')
        data = JSON.parse(data).slice(2)
        data.forEach(function (item) {
          let row = {}
          let rowHistogram = {}
          row['日期'] = item.day
          rowHistogram['日期'] = item.day
          row['指数'] = item.close
          row['五日均线'] = item.ma_price5
          rowHistogram['成交量'] = (item.volume / 1000000).toFixed(2)
          vm.fiveDayChartData.rows.push(row)
          vm.fiveDayChartDataHistogram.rows.push(rowHistogram)
        })
      }).catch(error => {
        console.log(error)
      })
    },
    getKDailyChart: function () {
      let vm = this
      let allRequests = []
      this.$http({
        method: 'get',
        url: '/tengxun/flashdata/hushen/latest/weekly/' + vm.indexNumber.value + '.js'
      }).then(res => {
        let startYear = res.data.split('\\n\\')[1].split('start:')[1].slice(0, 2)
        if (startYear < 90) {
          startYear += 100
        }
        for (let i = startYear; i <= 119; i++) {
          allRequests.push(
            this.$http({
              method: 'get',
              url: '/tengxun/flashdata/hushen/daily/' + (i < 100 ? i : ((i - 100 < 10) ? ('0' + (i - 100)) : (i - 100))) + '/' + vm.indexNumber.value + '.js?visitDstTime=1'
            })
          )
        }
        this.$http.all(allRequests)
          .then(res => {
            res.forEach(function (one) {
              let a = one.data.split('\\n\\')
              a = a.slice(1, a.length - 1)
              a.forEach(function (item) {
                let line = item.split(' ')
                let row = {}
                row.date = ((line[0][1] === '9') ? ('19' + line[0].slice(1, 3)) : ('20' + line[0].slice(1, 3))) + '-' + line[0].slice(3, 5) + '-' + line[0].slice(5)
                row.open = parseFloat(line[1])
                row.close = parseFloat(line[2])
                row.highest = parseFloat(line[3])
                row.lowest = parseFloat(line[4])
                row.vol = parseFloat(line[5])
                vm.kDailyChartData.rows.push(row)
              })
            })
          })
      }).catch(error => {
        console.log(error)
      })
    },
    getKChart: function (period) {
      let vm = this
      this.$http({
        method: 'get',
        url: '/tengxun/flashdata/hushen/' + period + '/' + vm.indexNumber.value + '.js'
      }).then(res => {
        let a = res.data.split('\\n\\')
        a = a.slice(1, a.length - 1)
        a.forEach(function (item) {
          let line = item.split(' ')
          let row = {}
          row.date = (line[0][1] === '9' ? ('19' + line[0].slice(1, 3)) : ('20' + line[0].slice(1, 3))) + '-' + line[0].slice(3, 5) + '-' + line[0].slice(5)
          row.open = parseFloat(line[1])
          row.close = parseFloat(line[2])
          row.highest = parseFloat(line[3])
          row.lowest = parseFloat(line[4])
          row.vol = parseFloat(line[5])
          if (period === 'weekly') {
            vm.kWeeklyChartData.rows.push(row)
          } else if (period === 'monthly') {
            vm.kMonthlyChartData.rows.push(row)
          }
        })
      }).catch(error => {
        console.log(error)
      })
    },
    getKMinuteChart: function (minute) {
      this.$http({
        method: 'get',
        url: '/sina/quotes_service/api/json_v2.php/CN_MarketData.getKLineData?symbol=' + this.indexNumber.value + '&scale=' + minute + '&ma=5&datalen=1023',
        headers: {
          'Content-Type': 'application/x-javascript',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(res => {
        let vm = this
        let data = res.data
        data = data.replace(/day/g, '"day"')
        data = data.replace(/open/g, '"open"')
        data = data.replace(/high/g, '"high"')
        data = data.replace(/low/g, '"low"')
        data = data.replace(/close/g, '"close"')
        data = data.replace(/ma_volume5/g, '"ma_volume5"')
        data = data.replace(/,volume:/g, ',"volume":')
        data = data.replace(/ma_price5/g, '"ma_price5"')
        data = JSON.parse(data)
        data.forEach(function (item) {
          let row = {}
          row.date = item.day
          row.open = parseFloat(item.open)
          row.close = parseFloat(item.close)
          row.highest = parseFloat(item.high)
          row.lowest = parseFloat(item.low)
          row.vol = parseFloat(item.volume)
          if (minute === 5) {
            vm.fiveMinuteChartData.rows.push(row)
          } else if (minute === 15) {
            vm.fifteenMinuteChartData.rows.push(row)
          } else if (minute === 30) {
            vm.thirtyMinuteChartData.rows.push(row)
          } else {
            vm.sixtyMinuteChartData.rows.push(row)
          }
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
