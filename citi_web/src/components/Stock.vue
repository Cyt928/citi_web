<template>
  <div>
    <el-collapse v-model="activeName1"
                 accordion>
      <el-collapse-item title="沪深"
                        name="1">
        <el-row :gutter="20">
          <el-col :span="8"
                  v-for="num in hushenIndexNumber"
                  :key="num.value">
            <el-card class="box-card"
                     shadow="hover">
              <div slot="header"
                   class="clearfix">
                <span>{{num.name}}</span>
                <el-button style="float: right; padding: 3px 0"
                           type="text"
                           @click="go(num)">查看详情</el-button>
              </div>
              <div>
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
      <el-collapse-item title="亚太"
                        name="2">
        <el-row :gutter="20">
          <el-col :span="6"
                  v-for="num in ytIndexNumber"
                  :key="num.value">
            <el-card class="box-card"
                     shadow="hover">
              <div slot="header"
                   class="clearfix">
                <span>{{num.name}}</span>
              </div>
              <div>
                <span>{{num.now}} {{num.change}} {{num.changeRate}}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item title="美股"
                        name="3">
        <el-row :gutter="20">
          <el-col :span="8"
                  v-for="num in usIndexNumber"
                  :key="num.value">
            <el-card class="box-card"
                     shadow="hover">
              <div slot="header"
                   class="clearfix">
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
    <div>
      <el-tabs v-model="activeName2"
               type="border-card"
               @tab-click="handleClick">
        <el-tab-pane label="沪A"
                     name="first">
          <el-card class="box-card"
                   style="width:32%;display:inline-block">
            <div>最热股票</div>
            <span>
              <el-divider></el-divider>
            </span>
            <el-table :data="tableData_sh_a_hot"
                      style="display:inline-block"
                      @cell-click="handle">
              <el-table-column prop="name"
                               label="股票名称"></el-table-column>
              <el-table-column prop="price"
                               label="当前价"></el-table-column>
              <el-table-column prop="open"
                               label="开盘价"></el-table-column>
              <el-table-column prop="changePercent"
                               label="涨跌幅(%)"></el-table-column>
            </el-table>
          </el-card>
          <el-card class="box-card"
                   style="width:32%;display:inline-block">
            <div>成交量排行</div>
            <span>
              <el-divider></el-divider>
            </span>
            <el-table :data="tableData_sh_a_volume"
                      style="display:inline-block"
                      @cell-click="handle">
              <el-table-column prop="name"
                               label="股票名称"></el-table-column>
              <el-table-column prop="price"
                               label="当前价"></el-table-column>
              <el-table-column prop="changePercent"
                               label="涨跌幅(%)"></el-table-column>
              <el-table-column prop="volume"
                               label="成交量(手）"></el-table-column>
            </el-table>
          </el-card>
          <el-card class="box-card"
                   style="width:32%;display:inline-block">
            <div>成交额排行</div>
            <span>
              <el-divider></el-divider>
            </span>
            <el-table :data="tableData_sh_a_amount"
                      style="display:inline-block"
                      @cell-click="handle">
              <el-table-column prop="name"
                               label="股票名称"></el-table-column>
              <el-table-column prop="price"
                               label="当前价"></el-table-column>
              <el-table-column prop="changePercent"
                               label="涨跌幅(%)"></el-table-column>
              <el-table-column prop="monthGrowth"
                               label="成交额(万元)"></el-table-column>
            </el-table>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="沪B"
                     name="second">
          <el-card class="box-card"
                   style="width:32%;display:inline-block">
            <div>最热股票</div>
            <span>
              <el-divider></el-divider>
            </span>
            <el-table :data="tableData_sh_a_hot"
                      style="display:inline-block"
                      @cell-click="handle">
              <el-table-column prop="name"
                               label="股票名称"></el-table-column>
              <el-table-column prop="price"
                               label="当前价"></el-table-column>
              <el-table-column prop="open"
                               label="开盘价"></el-table-column>
              <el-table-column prop="changePercent"
                               label="涨跌幅(%)"></el-table-column>
            </el-table>
          </el-card>
          <el-card class="box-card"
                   style="width:32%;display:inline-block">
            <div>成交量排行</div>
            <span>
              <el-divider></el-divider>
            </span>
            <el-table :data="tableData_sh_b_volume"
                      style="display:inline-block"
                      @cell-click="handle">
              <el-table-column prop="name"
                               label="股票名称"></el-table-column>
              <el-table-column prop="price"
                               label="当前价"></el-table-column>
              <el-table-column prop="changePercent"
                               label="涨跌幅(%)"></el-table-column>
              <el-table-column prop="volume"
                               label="成交量(手）"></el-table-column>
            </el-table>
          </el-card>
          <el-card class="box-card"
                   style="width:32%;display:inline-block">
            <div>成交额排行</div>
            <span>
              <el-divider></el-divider>
            </span>
            <el-table :data="tableData_sh_b_amount"
                      style="display:inline-block"
                      @cell-click="handle">
              <el-table-column prop="name"
                               label="股票名称"></el-table-column>
              <el-table-column prop="price"
                               label="当前价"></el-table-column>
              <el-table-column prop="changePercent"
                               label="涨跌幅(%)"></el-table-column>
              <el-table-column prop="monthGrowth"
                               label="成交额(万元)"></el-table-column>
            </el-table>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="深A"
                     name="third">
          <el-card class="box-card"
                   style="width:32%;display:inline-block">
            <div>最热股票</div>
            <span>
              <el-divider></el-divider>
            </span>
            <el-table :data="tableData_sh_a_hot"
                      style="display:inline-block"
                      @cell-click="handle">
              <el-table-column prop="name"
                               label="股票名称"></el-table-column>
              <el-table-column prop="price"
                               label="当前价"></el-table-column>
              <el-table-column prop="open"
                               label="开盘价"></el-table-column>
              <el-table-column prop="changePercent"
                               label="涨跌幅(%)"></el-table-column>
            </el-table>
          </el-card>
          <el-card class="box-card"
                   style="width:32%;display:inline-block">
            <div>成交量排行</div>
            <span>
              <el-divider></el-divider>
            </span>
            <el-table :data="tableData_sz_a_volume"
                      style="display:inline-block"
                      @cell-click="handle">
              <el-table-column prop="name"
                               label="股票名称"></el-table-column>
              <el-table-column prop="price"
                               label="当前价"></el-table-column>
              <el-table-column prop="changePercent"
                               label="涨跌幅(%)"></el-table-column>
              <el-table-column prop="volume"
                               label="成交量(手）"></el-table-column>
            </el-table>
          </el-card>
          <el-card class="box-card"
                   style="width:32%;display:inline-block">
            <div>成交额排行</div>
            <span>
              <el-divider></el-divider>
            </span>
            <el-table :data="tableData_sz_a_amount"
                      style="display:inline-block"
                      @cell-click="handle">
              <el-table-column prop="name"
                               label="股票名称"></el-table-column>
              <el-table-column prop="price"
                               label="当前价"></el-table-column>
              <el-table-column prop="changePercent"
                               label="涨跌幅(%)"></el-table-column>
              <el-table-column prop="monthGrowth"
                               label="成交额(万元)"></el-table-column>
            </el-table>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="深B"
                     name="fourth">
          <el-card class="box-card"
                   style="width:32%;display:inline-block">
            <div>最热股票</div>
            <span>
              <el-divider></el-divider>
            </span>
            <el-table :data="tableData_sh_a_hot"
                      style="display:inline-block"
                      @cell-click="handle">
              <el-table-column prop="name"
                               label="股票名称"></el-table-column>
              <el-table-column prop="price"
                               label="当前价"></el-table-column>
              <el-table-column prop="open"
                               label="开盘价"></el-table-column>
              <el-table-column prop="changePercent"
                               label="涨跌幅(%)"></el-table-column>
            </el-table>
          </el-card>
          <el-card class="box-card"
                   style="width:32%;display:inline-block">
            <div>成交量排行</div>
            <span>
              <el-divider></el-divider>
            </span>
            <el-table :data="tableData_sz_b_volume"
                      style="display:inline-block"
                      @cell-click="handle">
              <el-table-column prop="name"
                               label="股票名称"></el-table-column>
              <el-table-column prop="price"
                               label="当前价"></el-table-column>
              <el-table-column prop="changePercent"
                               label="涨跌幅(%)"></el-table-column>
              <el-table-column prop="volume"
                               label="成交量(手）"></el-table-column>
            </el-table>
          </el-card>
          <el-card class="box-card"
                   style="width:32%;display:inline-block">
            <div>成交额排行</div>
            <span>
              <el-divider></el-divider>
            </span>
            <el-table :data="tableData_sz_b_amount"
                      style="display:inline-block"
                      @cell-click="handle">
              <el-table-column prop="name"
                               label="股票名称"></el-table-column>
              <el-table-column prop="price"
                               label="当前价"></el-table-column>
              <el-table-column prop="changePercent"
                               label="涨跌幅(%)"></el-table-column>
              <el-table-column prop="monthGrowth"
                               label="成交额(万元)"></el-table-column>
            </el-table>
          </el-card>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stock',
  data: function () {
    this.tableData_sh_a_hot = []
    this.tableData_sh_a_volume = []
    this.tableData_sh_a_amount = []
    this.tableData_sh_b_volume = []
    this.tableData_sh_b_amount = []
    this.tableData_sz_a_volume = []
    this.tableData_sz_a_amount = []
    this.tableData_sz_b_volume = []
    this.tableData_sz_b_amount = []
    return {
      activeName1: '1',
      activeName2: 'first',
      hushenIndexNumber: [
        {
          value: 'sh000001',
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
  mounted () {
    this.$axios
      .post('/api/v1/stock/rank', {
        sort: 'amount',
        node: 'sh_a'
      })
      .then(res => {
        console.log(res.data)
        let data = res.data.data
        let vm = this
        data.forEach(el => {
          let a = { name: '', price: '', changePercent: '', monthGrowth: '' }
          a.code = el.code
          a.name = el.name
          a.price = el.price
          a.changePercent = el.changePercent
          a.monthGrowth = el.amount
          vm.tableData_sh_a_amount.push(a)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    this.$axios
      .post('/api/v1/stock/rank', {
        sort: 'volume',
        node: 'sh_a'
      })
      .then(res => {
        console.log(res.data)
        let data = res.data.data
        let vm = this
        data.forEach(el => {
          let a = { name: '', price: '', changePercent: '', volume: '' }
          a.code = el.code
          a.volume = el.volume
          a.name = el.name
          a.price = el.price
          a.changePercent = el.changePercent
          vm.tableData_sh_a_volume.push(a)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    this.$axios
      .post('/api/v1/stock/rank', {
        sort: 'amount',
        node: 'sh_b'
      })
      .then(res => {
        console.log(res.data)
        let data = res.data.data
        let vm = this
        data.forEach(el => {
          let a = { name: '', price: '', changePercent: '', monthGrowth: '' }
          a.code = el.code
          a.name = el.name
          a.price = el.price
          a.changePercent = el.changePercent
          a.monthGrowth = el.amount
          vm.tableData_sh_b_amount.push(a)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    this.$axios
      .post('/api/v1/stock/rank', {
        sort: 'volume',
        node: 'sh_b'
      })
      .then(res => {
        console.log(res.data)
        let data = res.data.data
        let vm = this
        data.forEach(el => {
          let a = { name: '', price: '', changePercent: '', volume: '' }
          a.code = el.code
          a.volume = el.volume
          a.name = el.name
          a.price = el.price
          a.changePercent = el.changePercent
          vm.tableData_sh_b_volume.push(a)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    this.$axios
      .post('/api/v1/stock/rank', {
        sort: 'amount',
        node: 'sz_a'
      })
      .then(res => {
        console.log(res.data)
        let data = res.data.data
        let vm = this
        data.forEach(el => {
          let a = { name: '', price: '', changePercent: '', monthGrowth: '' }
          a.code = el.code
          a.name = el.name
          a.price = el.price
          a.changePercent = el.changePercent
          a.monthGrowth = el.amount
          vm.tableData_sz_a_amount.push(a)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    this.$axios
      .post('/api/v1/stock/rank', {
        sort: 'volume',
        node: 'sz_a'
      })
      .then(res => {
        console.log(res.data)
        let data = res.data.data
        let vm = this
        data.forEach(el => {
          let a = { name: '', price: '', changePercent: '', volume: '' }
          a.code = el.code
          a.volume = el.volume
          a.name = el.name
          a.price = el.price
          a.changePercent = el.changePercent
          vm.tableData_sz_a_volume.push(a)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    this.$axios
      .post('/api/v1/stock/rank', {
        sort: 'amount',
        node: 'sz_b'
      })
      .then(res => {
        console.log(res.data)
        let data = res.data.data
        let vm = this
        data.forEach(el => {
          let a = { name: '', price: '', changePercent: '', monthGrowth: '' }
          a.code = el.code
          a.name = el.name
          a.price = el.price
          a.changePercent = el.changePercent
          a.monthGrowth = el.amount
          vm.tableData_sz_b_amount.push(a)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    this.$axios
      .post('/api/v1/stock/rank', {
        sort: 'volume',
        node: 'sz_b'
      })
      .then(res => {
        console.log(res.data)
        let data = res.data.data
        let vm = this
        data.forEach(el => {
          let a = { name: '', price: '', changePercent: '', volume: '' }
          a.code = el.code
          a.volume = el.volume
          a.name = el.name
          a.price = el.price
          a.changePercent = el.changePercent
          vm.tableData_sz_b_volume.push(a)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    this.$axios
      .get('/api/v1/stock/hot')
      .then(res => {
        console.log(res.data)
        let data = res.data.data
        let vm = this
        data.forEach(el => {
          let a = { name: '', price: '', open: '', changePercent: '' }
          a.code = el.code
          a.open = el.open
          a.name = el.name
          a.changePercent = el.changePercent
          vm.tableData_sh_a_hot.push(a)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    go (index) {
      this.$router.push({
        name: 'CompositeIndex',
        path: '/CompositeIndex',
        params: {
          value: index.value
        }
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
          for (let i = 0; i < 6; i++) {
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
    },
    handle (column) {
      this.go_stock(column)
    }
  }
}
</script>

<style scoped>
.clearfix {
  text-align: left;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
.el-select .el-input {
  width: 130px;
}
</style>
