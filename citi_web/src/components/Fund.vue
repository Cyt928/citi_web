<template>
  <el-container>
    <el-header>
      <el-select v-model="value1" multiple placeholder="请选择基金类型">
        <el-option
          v-for="type in types"
          :key="type"
          :label="type"
          :value="type">
        </el-option>
      </el-select>
      <el-select v-model="value2" placeholder="请选择排序依据（涨幅）">
        <el-option
          v-for="period in periods"
          :key="period"
          :label="period"
          :value="period">
        </el-option>
      </el-select>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="code"
          label="基金代码"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="基金名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="netWorth"
          label="单位净值">
        </el-table-column>
        <el-table-column
          prop="dayGrowth"
          label="日涨幅">
        </el-table-column>
        <el-table-column v-if="growthName!=='涨幅'"
          prop="growth"
          :label="growthName">
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, next"
        :current-page.sync="currentPage">
      </el-pagination>
    </el-main>
  </el-container>

</template>

<script>
export default {
  name: 'Fund',
  data () {
    return {
      types: ['股票型', '混合型', '债券型', '指数型', 'QDII', 'FOF'],
      periods: ['最近一周', '最近一个月', '今年', '最近一年'],
      periodsValue: ['lastWeek', 'lastMonth', 'thisYear', 'lastYear'],
      value1: [],
      value2: '',
      currentPage: 1
    }
  },
  computed: {
    growthName: function () {
      return this.value2 + '涨幅'
    },
    tableData: function () {
      return this.getTableData()
    }
  },
  created: function () {
  },
  methods: {
    getTableData: function () {
      let vm = this
      let result = []
      let allRequests = []
      for (let i = 3 * (this.currentPage - 1); i < 3 * this.currentPage; i++) {
        let params = {}
        params.fundType = this.value1
        params.sort = this.periodsValue[vm.periods.indexOf(vm.value2)]
        params.pageIndex = i + 1
        allRequests.push(
          this.$http({
            method: 'post',
            url: '/xiong/v1/fund/rank',
            data: params
          })
        )
      }
      this.$http.all(allRequests)
        .then(res => {
          res.forEach(function (one) {
            let a = one.data.data
            a.forEach(function (item) {
              let temp = {}
              temp.code = item.code
              temp.name = item.name
              temp.netWorth = item.netWorth
              temp.dayGrowth = item.dayGrowth
              temp.growth = item[vm.periodsValue[vm.periods.indexOf(vm.value2)] + 'Growth']
              result.push(temp)
            })
          })
        }).catch(error => {
          console.log(error)
        })
      this.currentPage = 1
      return result
    }
  }
}

</script>

<style scoped>

</style>
