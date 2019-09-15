<template>
  <el-container>
    <el-card style="width: 100%">
      <div slot="header">
        <span>投资方案</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div>
        <p>股票推荐：</p>
        <el-checkbox-group v-model="checkList">
          <el-checkbox v-for="item in scheme.stockRank" v-bind:key="item" :label="item">
            <el-link type="primary">{{item}}&nbsp;&nbsp;</el-link>
          </el-checkbox>
        </el-checkbox-group>
        <p>消费结构建议:</p>
        <el-link v-for="item in scheme.comsumption_ration" v-bind:key="item">某部分占比：{{item}}&nbsp;&nbsp;</el-link>
      </div>
    </el-card>
  </el-container>
</template>

<script>
export default {
  // TODO 消费结构展示
  name: 'Scheme',
  props: ['scheme'],
  data () {
    return {
      checkList: []
    }
  }
}
</script>

<style scoped>

</style>
