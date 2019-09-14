<template>
  <el-container>
    <el-container>
      <el-main>
        <el-card>
        <el-tabs v-model="activeName" :tab-position='tabPosition'>
          <el-tab-pane label="当前推荐方案" name="Tracer"><Tracer></Tracer></el-tab-pane>
        </el-tabs>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Tracer from '../components/Tracer'
export default {
  name: 'tracer',
  data () {
    return {
      activeIndex: '3',
      activeName: 'Tracer',
      tabPosition: 'left'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    Tracer
  }
}
</script>

<style scoped>

</style>
