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
        <el-menu-item index="3">
          <template slot="title"><router-link tag="el-menu-item" to="/History">我的历史</router-link></template>
        </el-menu-item>
        <el-menu-item index="4">方案跟踪</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-main>
        <el-tabs v-model="activeName" :tab-position='tabPosition'>
          <el-tab-pane label="当前推荐方案" name="Schema"><Schema></Schema></el-tab-pane>
          <el-tab-pane label="历史推荐方案" name="Schemas"><Schemas></Schemas></el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Schema from '../components/Schema'
  import Schemas from '../components/Schemas'

  export default {
    name: 'History',
    data () {
      return {
        activeIndex: '3',
        activeName: 'Schema',
        tabPosition: 'left'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    components: {
      Schema,
      Schemas
    }
  }
</script>

<style scoped>

</style>
