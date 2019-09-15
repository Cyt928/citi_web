<template>
  <div>
    <div class="video-container">
      <video :style="fixStyle" muted autoplay="autoplay"  loop v-on:canplay="canplay">
        <source src="../assets/RainBackground.webm" type="video/webm"/>
        浏览器不支持 video 标签，建议升级浏览器。
      </video>
    </div>
    <el-card style="opacity: 0.9" shadow="hover" class="card-container">
      <h3 style="margin-bottom: 20px">登陆系统</h3>
      <el-divider></el-divider>
      <div style="display: flex; flex-direction: column;justify-content: flex-start">
        <el-form style="padding: 16px;margin: 16px" status-icon label-width="80px" label-position="left" :model="loginForm" ref="loginForm">
        <el-form-item label="用户名:" :rules="[
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ]" prop="username">
          <el-input  v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="密码:" :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' }
    ]" prop="password">
          <el-input type="password"  v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <br />
          <el-button type="primary" @click="submitLoginForm">登陆</el-button>
      </el-form>
        <p>
          没有账号?&nbsp;
          <router-link to="register">点击注册</router-link>
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      videoCanPlay: false,
      fixStyle: '',
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    canplay () {
      this.videoCanPlay = true
    },
    submitLoginForm () {
      if (!this.loginForm.username || !this.loginForm.password) {
        alert('请输入用户名和密码')
      } else {
        let that = this
        this.$axios({
          method: 'post',
          url: 'http://localhost:8080/login',
          data: {
            emailAdd: '',
            username: this.loginForm.username,
            password: this.loginForm.password,
            tag: 0
          }
        }).then((res) => {
          console.log(res.data)
          if (res.data.success) {
            // TODO 存id
            sessionStorage.setItem('id', res.data.content.id)
            sessionStorage.setItem('username', that.loginForm.username)
            that.$router.push('/introduction')
            sessionStorage.setItem('loginStatus', '1')
          } else {
            alert(res.data.message)
          }
        }).catch(function (error) {
          alert(error)
        })
      }
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
    margin:160px auto;
    width:480px;
    height: 480px;
    z-index: 1;
  }
</style>
