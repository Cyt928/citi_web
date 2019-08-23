<template>
  <el-container>
    <el-header>
      <el-select v-model="value" placeholder="请选择基金类型">
        <el-option
          v-for="type in types"
          :key="type.value"
          :label="type.label"
          :value="type.value"
          @click="getData(type.label)">
        </el-option>
      </el-select>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        height="250"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>

</template>

<script>
export default {
  name: 'Fund',
  data () {
    return {
      tableData: [],
      types: [],
      value: '',
      allFunds: []
      // allFunds中是按种类分的数组，数组中包含这个种类的全部基金，和types中的基金种类的顺序是对应的
    }
  },
  created: function () {
    this.getAllTypes()
    this.getAllFundsDetail()
  },
  methods: {
    getAllTypes: function () {
      this.$http({
        method: 'get',
        url: '/eastmoney/js/fundcode_search.js'
      }).then(res => {
        let a = res.data
        a = a.slice(8, a.length - 1)
        let temp = JSON.parse('{"all":' + a + '}')
        temp = temp.all
        // temp为所有fund的一个数列
        // result是所有基金种类名
        let result = []
        let counter = 1
        let vm = this
        temp.forEach(function (item) {
          // 加入新的基金类型
          if (result.indexOf(item[3]) === -1) {
            vm.allFunds.push([])
            let one = {}
            one.value = counter
            one.label = item[3]
            result.push(item[3])
            vm.types.push(one)
            counter++
          }
          // 将基金名放入对应的基金类型中
          let oneFund = {}
          oneFund.code = item[0]
          oneFund.name = item[2]
          oneFund.type = item[3]
          vm.allFunds[result.indexOf(item[3])].push(oneFund)
        })
        this.getAllFundsDetail()
      }).catch(error => {
        console.log(error)
      })
    },
    getAllFundsDetail: function () {
      // let vm = this
      // let result = []
      // this.allFunds[2].forEach(function (item) {
      //   vm.$http({
      //     method: 'get',
      //     url: '/xiong/v1/fund/detail?code=' + item.code
      //   }).then(res => {
      //     console.log(res)
      //   }).catch(error => {
      //     console.log(error)
      //   })
      // })
    }
  }
}
</script>

<style scoped>

</style>
