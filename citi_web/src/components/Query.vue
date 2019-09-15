<template>
  <el-container style="display: flex;flex-direction: column;align-items: center">
    <h3>填写信息以计算</h3>
    <el-form v-model="queryForm"
             style="display: flex;flex-direction: column;">
      <el-form-item label="1.您的主要收入来源是 ： "
                    style="display: block">
        <br>
        <el-radio-group v-model="queryForm.one" style="float: left;">
          <el-radio label=1>工资、劳务报酬（学生由家庭提供）</el-radio>
          <el-radio label=2>生产经营所得</el-radio>
          <el-radio label=3>利息、股息、转让等金融性资产收入</el-radio>
          <el-radio label=4>出租、出售房地产等非金融性资产收入</el-radio>
          <el-radio label=5>无固定收入</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="2.您平均的个人可支配月收入一共大约为(折合人民币) ："
                    style="display: block">
        <br>
        <el-input v-model="queryForm.two"></el-input>
      </el-form-item>
      <el-form-item label="3.在您每年的个人可支配收入中，可用于金融投资(储蓄存款除外)的比例为："
                    style="display: block">
        <br>
        <el-radio-group v-model="queryForm.three"
                        style="float: left">
          <el-radio label=1>小于10%</el-radio>
          <el-radio label=2>10%至25%</el-radio>
          <el-radio label=3>25%至50%</el-radio>
          <el-radio label=4>大于50%</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="4.您是否有尚未清偿的数额较大的债务？如有，其性质是："
                    style="display: block">
        <br>
        <el-radio-group v-model="queryForm.four"
                        style="float: left">
          <el-radio label=1>没有</el-radio>
          <el-radio label=2>有，住房抵押贷款等长期定额债务</el-radio>
          <el-radio label=3>有，信用卡欠款、消费信贷等短期信用债务</el-radio>
          <el-radio label=4>有，亲戚朋友借款</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="5.您的投资知识可描述为："
                    style="display: block">
        <br>
        <el-radio-group v-model="queryForm.five"
                        style="float: left">
          <el-radio label=1>有限：基本没有金融产品方面的知识</el-radio>
          <el-radio label=2>一般：对金融产品及其相关风险具有基本的知识和理解</el-radio>
          <el-radio label=3>丰富：对金融产品及其相关风险具有丰富的知识和理解</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="6.您的投资经验可描述为："
                    style="display: block">
        <br>
        <el-radio-group v-model="queryForm.six"
                        style="float: left">
          <el-radio label=1>除银行储蓄外，基本没有其他投资经验</el-radio>
          <el-radio label=2>购买过债券、保险等理财产品</el-radio>
          <el-radio label=3>参与过股票、基金等产品的交易</el-radio>
          <el-radio label=4>参与过权证、期货、期权等产品的交易</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="7.您有多少年投资基金、股票、信托、私募证券或金融衍生产品等风险投资品的经验："
                    style="display: block">
        <br>
        <el-radio-group v-model="queryForm.seven"
                        style="float: left">
          <el-radio label=1>没有经验</el-radio>
          <el-radio label=2>少于2年</el-radio>
          <el-radio label=3>2至5年</el-radio>
          <el-radio label=4>5至10年</el-radio>
          <el-radio label=5>10年以上</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="8.您计划的投资期限是多久："
                    style="display: block">
        <br>
        <el-radio-group v-model="queryForm.eight"
                        style="float: left">
          <el-radio label=1>1年以下</el-radio>
          <el-radio label=2>1至3年</el-radio>
          <el-radio label=3>3至5年</el-radio>
          <el-radio label=4>5年以上</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="9.您打算重点投资于哪些种类的投资品种："
                    style="display: block">
        <br>
        <el-radio-group v-model="queryForm.nine"
                        style="float: left">
          <el-radio label=1>债券、货币市场基金、债券基金等固定收益类投资品种</el-radio>
          <el-radio label=2>股票、混合型基金、股票型基金等权益类投资品种</el-radio>
          <el-radio label=3>期货、期权等金融衍生品</el-radio>
          <el-radio label=4>其他产品</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="10.以下哪项描述最符合您的投资态度："
                    style="display: block">
        <br>
        <el-radio-group v-model="queryForm.ten"
                        style="float: left">
          <el-radio label=1>厌恶风险，不希望本金损失，希望获得稳定回报</el-radio>
          <el-radio label=2>保守投资，不希望本金损失，愿意承担一定幅度的收益波动</el-radio>
          <el-radio label=3>寻求资金的较高收益和成长性，愿意为此承担有限本金损失</el-radio>
          <el-radio label=4>希望赚取高回报，愿意为此承担较大本金损失</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="11.假设有两种投资：投资A预期获得10%的收益，可能承担的损失非常小；投资B预期获得30%的收益，但可能承担较大亏损。您会如何支配您的投资："
                    style="display: block">
        <br>
        <el-radio-group v-model="queryForm.eleven"
                        style="float: left">
          <el-radio label=1>全部投资于收益较小且风险较小的A</el-radio>
          <el-radio label=2>同时投资于A和B，但大部分资金投资于收益较小且风险较小的A</el-radio>
          <el-radio label=3>同时投资于A和B，但大部分资金投资于收益较大且风险较大的B</el-radio>
          <el-radio label=4>全部投资于收益较大且风险较大的B</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="12.您认为自己能承受的最大投资损失是多少："
                    style="display: block">
        <br>
        <el-radio-group v-model="queryForm.twelve"
                        style="float: left">
          <el-radio label=1>10%以内</el-radio>
          <el-radio label=2>10%-30%</el-radio>
          <el-radio label=3>30%-50%</el-radio>
          <el-radio label=4>超过50%</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="13.平均而言，除去基本保险（五险一金等），您每年购买个人商业保险的金额大约为(折合人民币)："
                    style="display: block">
        <br>
        <el-input v-model="queryForm.thirteen"></el-input>
      </el-form-item>
      <el-form-item label="14.您平均每月用于日常餐饮（含奶类、鲜肉鲜菜、鲜果等）与烟酒的支出金额大约为(单位：￥，下同)："
                    style="display: block">
        <br>
        <el-input v-model="queryForm.fourteen"></el-input>
      </el-form-item>
      <el-form-item label="15.您平均每月用于鞋服衣着类的支出金额大约为："
                    style="display: block">
        <br>
        <el-input v-model="queryForm.fifteen"></el-input>
      </el-form-item>
      <el-form-item label="16.您平均每月用于居住（含房租、房贷、水电燃料）的支出金额大约为："
                    style="display: block">
        <br>
        <el-input v-model="queryForm.sixteen"></el-input>
      </el-form-item>
      <el-form-item label="17.您平均每月用于生活用品及生活服务的支出金额大约为："
                    style="display: block">
        <br>
        <el-input v-model="queryForm.seventeen"></el-input>
      </el-form-item>
      <el-form-item label="18.您平均每月用于交通（含交通工具的燃料、维修）的支出金额大约为："
                    style="display: block">
        <br>
        <el-input v-model="queryForm.eighteen"></el-input>
      </el-form-item>
      <el-form-item label="19.您平均每月用于通讯（含邮递）的支出金额大约为："
                    style="display: block">
        <br>
        <el-input v-model="queryForm.nineteen"></el-input>
      </el-form-item>
      <el-form-item label="20.您平均每月用于文教的支出金额大约为："
                    style="display: block">
        <br>
        <el-input v-model="queryForm.twenty"></el-input>
      </el-form-item>
      <el-form-item label="21.您平均每年用于旅游的支出金额大约为："
                    style="display: block">
        <br>
        <el-input v-model="queryForm.twentyone"></el-input>
      </el-form-item>
      <el-form-item label="22.您平均每月用于娱乐的支出金额大约为："
                    style="display: block">
        <br>
        <el-input v-model="queryForm.twentytwo"></el-input>
      </el-form-item>
      <el-form-item label="23.您平均每月用于医疗保健的支出金额大约为："
                    style="display: block">
        <br>
        <el-input v-model="queryForm.twentythree"></el-input>
      </el-form-item>
      <el-form-item label="24.请您给自己现阶段消费的满意程度打分（1分代表“非常不满意”，10分代表“非常满意”）："
                    style="display: block">
        <br>
        <el-input v-model="queryForm.twentyfour"
                  max=10
                  min=1></el-input>
      </el-form-item>
      <el-form-item label="25.您是否觉得您经常在某一类或几类支出中无法理性地控制消费金额？如有，请填写："
                    style="display: block">
        <br>
        <el-input v-model="queryForm.twentyfive"></el-input>
      </el-form-item>
      <el-form-item label="26.您的性别："
                    style="display: block">
        <br>
        <el-radio-group v-model="queryForm.twentysix"
                        style="float: left">
          <el-radio label=1>男</el-radio>
          <el-radio label=2>女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="27.您的出生年份："
                    style="display: block">
        <br>
        <el-date-picker v-model="year"
                        type="year"
                        placeholder="选择年">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="28.您目前的职业："
                    style="display: block">
        <br>
        <el-radio-group v-model="queryForm.twentyeight"
                        style="float: left">
          <el-radio label=1>在校学生</el-radio>
          <el-radio label=2>政府/机关干部/公务员</el-radio>
          <el-radio label=3>企业管理者（包括基层及中高层管理者）</el-radio>
          <el-radio label=4>普通职员（办公室/写字楼工作人员）</el-radio>
          <el-radio label=5>专业人员（如医生/律师/文体/记者/老师等）</el-radio>
          <el-radio label=6>普通工人（如工厂工人/体力劳动者等）</el-radio>
          <el-radio label=7>商业服务业职工（如销售人员/商店职员/服务员等）</el-radio>
          <el-radio label=8>个体经营者/承包商</el-radio>
          <el-radio label=9>自由职业者</el-radio>
          <el-radio label=10>农林牧渔劳动者</el-radio>
          <el-radio label=11>退休</el-radio>
          <el-radio label=12>暂无职业</el-radio>
          <el-radio label=13>其他</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="29.您的常住地区是："
                    style="display: block">
        <br>
        <el-input v-model="queryForm.twentynine_province"
                  placeholder="省份"></el-input>
        <el-input v-model="queryForm.twentynine_city"
                  placeholder="城市"></el-input>
      </el-form-item>
      <el-form-item label="30.到目前为止，您的最高学历(包括在读)是："
                    style="display: block">
        <br>
        <el-radio-group v-model="queryForm.thirty"
                        style="float: left">
          <el-radio label=1>初中及以下</el-radio>
          <el-radio label=2>高中/中专/技校</el-radio>
          <el-radio label=3>大学专科</el-radio>
          <el-radio label=4>大学本科</el-radio>
          <el-radio label=5>硕士</el-radio>
          <el-radio label=6>博士</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-button type="primary"
                 @click="nextStep">下一步</el-button>

    </el-form>

  </el-container>

</template>

<script>
// TODO 复制粘贴问卷内容
export default {
  data () {
    return {
      year: 0,
      queryForm: {
        userId: sessionStorage.getItem('id'),
        start: (new Date()).getTime(),
        end: 0,
        time: 0,
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0,
        seven: 0,
        eight: 0,
        nine: 0,
        ten: 0,
        eleven: 0,
        twelve: 0,
        thirteen: 0.0,
        fourteen: 0.0,
        fifteen: 0.0,
        sixteen: 0.0,
        seventeen: 0.0,
        eighteen: 0.0,
        nineteen: 0.0,
        twenty: 0.0,
        twentyone: 0.0,
        twentytwo: 0.0,
        twentythree: 0.0,
        twentyfour: 0.0,
        twentyfive: '',
        twentysix: 0,
        twentyseven: 0,
        twentyeight: 0,
        twentynine_province: '',
        twentynine_city: '',
        thirty: 0
      }
    }
  },
  name: 'Query',
  methods: {
    nextStep () {
      this.queryForm.twentyseven = (new Date(this.year)).getYear()
      this.queryForm.end = (new Date()).getTime()
      this.queryForm.time = this.queryForm.end - this.queryForm.start
      if (!this.queryForm.one) {
        alert('请完成问卷')
      } else {
        let that = this
        this.$axios({
          method: 'post',
          url: 'http://localhost:8080/addQuestionNaire',
          data: that.queryForm
        }).then((res) => {
          console.log(res.data)
          if (res.data.success) {
            that.$emit('nextStep')
          } else {
            alert(res.data.content)
          }
        }).catch(function (error) {
          alert(error)
        })
      }
    }
  }
}
</script>

<style>
.el-form-item {
  text-align: left;
}
</style>
