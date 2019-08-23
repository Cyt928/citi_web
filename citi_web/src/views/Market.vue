<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
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
      <el-main>
        <el-tabs v-model="activeName" :tab-position='tabPosition'>
          <el-tab-pane label="股票" name="Stock"><Stock></Stock></el-tab-pane>
          <el-tab-pane label="基金" name="Fund"><Fund></Fund></el-tab-pane>
          <el-tab-pane label="债券" name="Bond"><Bond></Bond></el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Stock from '../components/Stock'
import Fund from '../components/Fund'
import Bond from '../components/Bond'
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
    Fund,
    Bond
  }
}
</script>

<style scoped>

</style>
