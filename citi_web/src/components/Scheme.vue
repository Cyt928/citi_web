<template>
  <el-container>
    <el-card style="width: 100%">
      <div slot="header">
        <span>投资方案</span>
        <el-button style="float: right; padding: 3px 0"
                   type="text">操作按钮</el-button>
      </div>
      <div>
        <p>股票推荐(股票代码)：</p>
        <el-checkbox-group class="stockCode" v-model="checkList">
          <el-checkbox v-for="item in scheme.stockRank"
                       v-bind:key="item"
                       :label="item">
            <el-link type="primary">{{item}}</el-link>
          </el-checkbox>
        </el-checkbox-group>
        <p>消费结构建议:</p>
        <p class="recommondConsumption"
            v-for="(item,index) in scheme.comsumption_ration"
            v-bind:key="index">
          {{fields[index]}}占比：{{item * 100}}%
        </p>
      </div>
    </el-card>
  </el-container>
</template>

<script>
export default {
  name: 'Scheme',
  props: ['scheme'],
  data () {
    return {
      checkList: [],
      fields: ['个人商业保险', '日常餐饮（含奶类、鲜肉鲜菜、鲜果等）与烟酒', '鞋服衣着类', '生活用品及生活服务', '文教', '旅游', '娱乐']
    }
  },
  method: {

  }
}
</script>

<style scoped>
.recommondConsumption {
  text-align: left;
  margin-left: 50px;
  color: grey;
}
.stockCode {
  text-align: left;
  margin-left: 20px;
}
</style>
