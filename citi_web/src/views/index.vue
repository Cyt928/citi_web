<template>
  <el-container style="background: #f6f6f6">
    <el-header style="margin: 0;padding: 0">
      <el-menu mode="horizontal"
               @select="handleSelect"
               style="position: fixed;width: 100%;z-index: 100">
        <el-menu-item style="margin-left: 12%"
                      index="1">
          <router-link tag="el-menu-item"
                       to="/home">
            <el-image>
              <div slot="error"
                   class="image-slot">
                <i class="el-icon-orange"></i>
              </div>
            </el-image>
          </router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link tag="el-menu-item"
                       to="/func">开始投资</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <template slot="title">
            <router-link tag="el-menu-item"
                         to="/market">行情展示</router-link>
          </template>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link tag="el-menu-item"
                       to="/tracer">方案跟踪</router-link>
        </el-menu-item>
        <div v-if="loginStatus === '1'"
             style="float: right;margin-right: 15%">
          <el-menu-item v-on:click="exit"><template slot="title">
              <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
            </template></el-menu-item>
        </div>
        <div v-else
             style="float: right;display: flex;flex-direction: row;margin-right: 15%">
          <el-menu-item>
            <router-link tag="el-menu-item"
                         to="login">登录/注册</router-link>
          </el-menu-item>
        </div>
      </el-menu>
    </el-header>
    <el-main style="min-height:700px">
      <!-- 设置router，放入不同功能页面-->
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      loginStatus: '0'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    exit () {
      this.$confirm('此操作将退出登陆, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        sessionStorage.removeItem('loginStatus')
        sessionStorage.removeItem('username')
        this.$router.push({ path: '/login' })
        this.$message({
          type: 'success',
          message: '退出登陆'
        })
      })
    }
  },
  created: function () {
    this.loginStatus = sessionStorage.getItem('loginStatus')
  }
}
</script>

<style scoped>
</style>
