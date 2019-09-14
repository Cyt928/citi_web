<template>
  <el-container style="display: flex;flex-direction: column;align-items: center">
    <h3>填写信息以计算</h3>
    <el-form v-model="queryForm" style="display: flex;flex-direction: column;">
      <el-form-item label="1.问题1" style="display: block">
        <br>
        <el-radio-group v-model="queryForm.one" style="float: left">
          <el-radio label=1 >备选项1</el-radio>
          <el-radio label=2 >备选项2</el-radio>
          <el-radio label=3 >备选项3</el-radio>
          <el-radio label=4 >备选项4</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-radio-group v-model="queryForm.two" style="float: left">
          <el-radio label=1 border>备选项1</el-radio>
          <el-radio label=2 border>备选项2</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="3.问题3" style="display: block">
        <br>
        <el-radio-group v-model="queryForm.three" style="float: left">
          <el-radio label=1 border>备选项1</el-radio>
          <el-radio label=2 border>备选项2</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="4.问题4" style="display: block">
        <br>
        <el-radio-group v-model="queryForm.four" style="float: left">
          <el-radio label=1 border>备选项1</el-radio>
          <el-radio label=2 border>备选项2</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-radio-group v-model="queryForm.five" style="float: left">
          <el-radio label=1 border>备选项1</el-radio>
          <el-radio label=2 border>备选项2</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-radio-group v-model="queryForm.six" style="float: left">
          <el-radio label=1 border>备选项1</el-radio>
          <el-radio label=2 border>备选项2</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-radio-group v-model="queryForm.seven" style="float: left">
          <el-radio label=1 border>备选项1</el-radio>
          <el-radio label=2 border>备选项2</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-radio-group v-model="queryForm.eight" style="float: left">
          <el-radio label=1 border>备选项1</el-radio>
          <el-radio label=2 border>备选项2</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-radio-group v-model="queryForm.nine" style="float: left">
          <el-radio label=1 border>备选项1</el-radio>
          <el-radio label=2 border>备选项2</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-radio-group v-model="queryForm.ten" style="float: left">
          <el-radio label=1 border>备选项1</el-radio>
          <el-radio label=2 border>备选项2</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-radio-group v-model="queryForm.eleven" style="float: left">
          <el-radio label=1 border>备选项1</el-radio>
          <el-radio label=2 border>备选项2</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-radio-group v-model="queryForm.twelve" style="float: left">
          <el-radio label=1 border>备选项1</el-radio>
          <el-radio label=2 border>备选项2</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.thirteen"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.fourteen"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.fifteen"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.sixteen"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.seventeen"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.eighteen"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.nineteen"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.twenty"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.twentyone"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.twentytwo"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.twentythree"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.twentyfour"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.twentyfive"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.twentysix"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.twentyseven"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.twentyeight"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.twentynine"></el-input>
      </el-form-item>
      <el-form-item label="2.问题2" style="display: block">
        <br>
        <el-input v-model="queryForm.thirty"></el-input>
      </el-form-item>
      <el-button type="primary" @click="nextStep">下一步</el-button>

    </el-form>

  </el-container>

</template>

<script>
export default {
  data () {
    return {
      queryForm: {
        userId: 0, // TODO 这个userId要么放在登陆成功的data里返回给我，要么后端改一下这边改成传username
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
        twentynine: 0,
        thirty: 0
      }
    }
  },
  name: 'Query',
  methods: {
    nextStep () {
      // TODO 加判断是否为空
      if (!this.queryForm.one) {
        alert('请完成问卷')
      } else {
        let that = this
        this.$axios({
          method: 'post',
          url: 'http://localhost:8080/addQustionNaire',
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

<style scoped>

</style>
