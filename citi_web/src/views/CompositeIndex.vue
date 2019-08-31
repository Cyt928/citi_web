<template>
  <el-container>
    <el-header style="margin: 0;padding: 0">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        style="position: fixed;width: 100%">
        <el-menu-item style="margin-left: 12%" index="1">
          <router-link tag="el-menu-item" to="/">
            <el-image>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <template slot="title"><router-link tag="el-menu-item" to="/market">行情展示</router-link></template>
        </el-menu-item>
        <el-menu-item index="3">我的历史</el-menu-item>
        <el-menu-item index="4">方案跟踪</el-menu-item>
        <div style="float: right;margin-right: 15%">
          <el-menu-item><template slot="title"><el-avatar></el-avatar></template></el-menu-item>
        </div>
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
          <el-col :span="8">成交量：{{indexNumber.total}}</el-col>
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
        total: '',
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
      let vm = this
      this.indexNumber.value = index.value
      this.$http({
        method: 'get',
        url: '/xinlang/list=' + vm.indexNumber.value,
        headers: {
          'Content-Type': 'application/javascript',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(res => {
        let a = JSON.stringify(res.data).split(',')
        for (let i = 1; i < 6; i++) {
          a[i] = parseFloat(a[i]).toFixed(2)
        }
        vm.indexNumber.name = a[0].slice(a[0].indexOf('=') + 3, a[0].length)
        vm.indexNumber.open = a[1]
        vm.indexNumber.lastClose = a[2]
        vm.indexNumber.now = a[3]
        vm.indexNumber.high = a[4]
        vm.indexNumber.low = a[5]
        vm.indexNumber.change = (vm.indexNumber.now - vm.indexNumber.lastClose).toFixed(2)
        if (vm.indexNumber.value === 'sh000001') {
          vm.indexNumber.total = (a[8] / 100000000).toFixed(2) + '亿手'
        } else if (vm.indexNumber.value === 'sz399001' || vm.indexNumber.value === 'sz399006') {
          vm.indexNumber.total = (a[8] / 10000000000).toFixed(2) + '亿手'
        } else {
          vm.indexNumber.total = (a[8] / 1000000).toFixed(2) + '万手'
        }
        vm.indexNumber.totalAmount = a[9] / 100000000
      })
        .catch(error => {
          console.log(error)
        })
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
      // 先获取发行年份
      this.$http({
        method: 'get',
        url: '/tengxun/flashdata/hushen/latest/weekly/' + vm.indexNumber.value + '.js'
      }).then(res => {
        let startYear = parseInt(res.data.split('\\n\\')[1].split('start:')[1].slice(0, 2))
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
