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
