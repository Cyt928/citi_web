<template>
  <el-container>
    <el-card style="width: 100%">
      <div slot="header"
           style="text-align: left;">
        <span>投资方案</span>
      </div>
      <div v-if="scheme.stockRank != 0"
           style="text-align: left;">
        <p>股票推荐</p>
        <p>请勾选预计购买的股票并输入<b>预计购买股数</b>(如无意愿购入,<b>请输入0</b>)</p>
        <ul class="stockCode">
          <li v-for="item in stocks"
              v-bind:key="item"
              :label="item">
            <p type="primary">{{item.code}}<el-input v-model="item.num"
                        style="margin-left:20px;width:50%;"></el-input>
            </p>
          </li>
        </ul>
        <p>
          <el-button v-if="scheme.stockRank != 0"
                     style="float: right;margin-right:30px;"
                     type="primary"
                     @click="purchase">投资计划</el-button>
        </p>
        <br />
        <p>消费结构建议:</p>
        <p class="recommondConsumption"
           v-for="(item,index) in scheme.comsumption_ration"
           v-bind:key="index">
          {{fields[index]}}占比：{{item * 100}}%
        </p>
      </div>
      <div v-else>
        <i class="el-icon-loading"
           style="font-size:100px;color:grey;"></i>
        <p>系统生成推荐中，请耐心等候20~30秒</p>
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
      fields: ['个人商业保险', '日常餐饮（含奶类、鲜肉鲜菜、鲜果等）与烟酒', '鞋服衣着类', '生活用品及生活服务', '文教', '旅游', '娱乐'],
      stocks: [
        {
          code: '',
          num: 0
        },
        {
          code: '',
          num: 0
        }, {
          code: '',
          num: 0
        }, {
          code: '',
          num: 0
        }, {
          code: '',
          num: 0
        }, {
          code: '',
          num: 0
        }, {
          code: '',
          num: 0
        }, {
          code: '',
          num: 0
        }, {
          code: '',
          num: 0
        }, {
          code: '',
          num: 0
        }
      ]
    }
  },
  mounted: function () {
    for (let j = 0; j < 10; j++) {
      this.stocks[j].code = this.scheme.stockRank[j]
    }
    console.log(this.stocks)
  },
  methods: {
    purchase () {
      for (let i = 0; i < 10; i++) {
        if (this.stocks[i].num !== 0) {
          let that = this
          this.$axios({
            method: 'post',
            url: 'http://localhost:8080/addPurchase',
            data: {
              code: that.stocks[i].code,
              number: that.stocks[i].num,
              startTime: new Date().getTime(),
              userId: sessionStorage.getItem('id')
            }
          }).then(res => {
            if (res.data.success) {
              this.$message({
                message: '成功开始追踪' + that.stocks[i].code + '收益',
                type: 'success'
              })
            } else {
              this.$message({
                message: that.stocks[i].code + '未成功添加至追踪列表',
                type: 'warning'
              })
            }
          }).catch(error => {
            alert(error)
          })
        }
      }
    }
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
