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
  <el-main>
    <!-- 设置router，放入不同功能页面-->
    <router-view></router-view>
  </el-main>
  <el-footer>Nju</el-footer>
</el-container>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>
