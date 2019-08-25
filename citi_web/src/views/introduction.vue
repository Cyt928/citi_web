<template>
  <div>
    <div style="background: #000000;height: 300px">
      <span class="demonstration">项目介绍</span>
      <el-carousel height="250px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div style="background: blue;height: 500px">
    </div>
    <div style="background: red;height: 500px">
    </div>
  </div>
</template>

<script>
export default {
  name: 'introduction'
}
</script>

<style scoped>

</style>
