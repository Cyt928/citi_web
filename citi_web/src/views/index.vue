<template>
  <el-container style="background: #f6f6f6">
  <el-header style="margin: 0;padding: 0">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      style="position: fixed;width: 100%">
      <el-menu-item style="margin-left: 12%" index="1">
        <el-image>
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
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
  <el-main style="min-height:700px">
    <!-- 设置router，放入不同功能页面-->
    <router-view></router-view>
  </el-main>
  <el-footer style="margin-top: auto">Nju</el-footer>
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
