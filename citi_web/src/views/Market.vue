<template>
  <el-container>
    <el-main>
      <el-card shadow="hover"
               style="min-height: 700px;padding: 12px">
        <el-tabs v-model="activeName"
                 :tab-position='tabPosition'>
          <el-tab-pane label="股票"
                       name="Stock">
            <Stock></Stock>
          </el-tab-pane>
          <el-tab-pane label="基金"
                       name="Fund">
            <Fund></Fund>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-main>
   </el-container>
</template>

<script>
import Stock from '../components/Stock'
import Fund from '../components/Fund'
export default {
  name: 'market',
  data () {
    return {
      activeIndex: '2',
      activeName: 'Stock',
      tabPosition: 'left'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    Stock,
    Fund
  }
}
</script>

<style scoped>
</style>
