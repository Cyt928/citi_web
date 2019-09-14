<template>
  <div>
    <div class="video-container">
      <video :style="fixStyle" muted autoplay="autoplay"  loop v-on:canplay="canplay">
        <source src="../assets/RainBackground.webm" type="video/webm"/>
        浏览器不支持 video 标签，建议升级浏览器。
      </video>
    </div>
    <el-card style="opacity: 0.9" shadow="hover" class="card-container">
      <h3 style="margin-bottom: 20px">填写注册信息</h3>
      <el-divider></el-divider>
      <div>
        <el-form :model="registerForm" ref="registerForm" label-width="120px" style="margin: 12px;width: 480px" label-position="right">
          <el-form-item prop="email" label="邮箱" :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]">
            <el-input style="width:280px;float: left" v-model="registerForm.email"></el-input>
            <el-button type="primary" :disabled="sendButtonDisabled" @click="sendCode">{{sendButtonText}}</el-button>
          </el-form-item>
          <el-form-item prop="code" label="验证码" :rules="[
      { required: true, message: '请输入验证码', trigger: 'blur' }
    ]"> <el-input style="width:280px;float: left" v-model="checkCode"></el-input>
          </el-form-item>
          <el-form-item prop="username" label="用户名" :rules="[
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ]"> <el-input style="width:280px;float: left" v-model="registerForm.username"></el-input>
        </el-form-item>
          <el-form-item prop="password" label="密码" :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' }
    ]"> <el-input style="width:280px;float: left" v-model="registerForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item prop="checkPassword"  label="确认密码" :rules="rulePass">
            <el-input style="width:280px;float: left" type="password" v-model="registerForm.checkPassword" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="compareCode()">提交</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    let checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      sendButtonDisabled: false,
      time_count: 60,
      videoCanPlay: false,
      fixStyle: '',
      sendButtonText: '发送',
      registerForm: {
        email: '',
        username: '',
        password: '',
        tag: 0,
        checkPassword: ''
      },
      checkCode: '',
      rulePass: [
        {validator: checkPass, trigger: 'blur'}
      ]
    }
  },
  methods: {
    canplay () {
      this.videoCanPlay = true
    },
    sendCode () {
      this.time_count = 60
      let clock = window.setInterval(() => {
        this.sendButtonDisabled = true
        if (this.time_count > 0) {
          this.time_count--
          this.sendButtonText = this.time_count + 's'
        } else {
          this.sendButtonDisabled = false
          this.sendButtonText = '发送'
          clearInterval(clock)
        }
      }, 1000)
      this.$axios({
        method: 'get',
        url: 'http://localhost:8080/SendVerfCode?email=' + this.registerForm.email
      }).then((res) => {
      }).catch(function (error) {
        alert(error)
      })
    },
    compareCode () {
      if (!this.registerForm.checkPassword || !this.registerForm.password || !this.registerForm.username || !this.registerForm.email) {
        alert('请完成表单')
      } else {
        let that = this
        this.$axios({
          method: 'post',
          url: 'http://localhost:8080/CompareVerfCode',
          data: {
            email: this.registerForm.email,
            code: this.checkCode
          }
        }).then((res) => {
          console.log(res)
          if (res.data.success) {
            if (res.data.content === '验证成功') {
              that.submitForm()
            } else {
              alert(res.data.content)
            }
          }
        }).catch(function (error) {
          alert(error)
        })
      }
    },
    submitForm () {
      let that = this
      this.$axios({
        method: 'post',
        url: 'http://localhost:8080/register',
        data: {
          emailAdd: this.registerForm.email,
          username: this.registerForm.username,
          password: this.registerForm.password,
          tag: 0
        }
      }).then((res) => {
        if (res.data.success) {
          alert('注册成功')
          that.$router.push('/login')
        }
      }).catch(function (error) {
        alert(error)
      })
    }
  },
  mounted: function () {
    window.onresize = () => {
      const windowWidth = document.body.clientWidth
      const windowHeight = document.body.clientHeight
      const windowAspectRatio = windowHeight / windowWidth
      let videoWidth
      let videoHeight
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth
        videoHeight = videoWidth * 0.5625
        this.fixStyle = {
          height: windowWidth * 0.5625 + 'px',
          width: windowWidth + 'px'
        }
      } else {
        videoHeight = windowHeight
        videoWidth = videoHeight / 0.5625
        this.fixStyle = {
          height: windowHeight + 'px',
          width: windowHeight / 0.5625 + 'px'
        }
      }
    }
    window.onresize()
  }
}
</script>
<style scoped>
  .video-container {
    z-index: 0;
    position:  fixed;
    overflow: hidden;
  }
  .card-container {
    position: fixed;
    left: 0;
    right: 0;
    margin:48px auto;
    width:600px;
    height: 600px;
    z-index: 1;
  }
</style>
