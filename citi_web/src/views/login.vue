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
        <el-form style="padding: 16px;margin: 16px" status-icon label-width="80px" label-position="left" class="demo-ruleForm">
        <el-form-item label="用户名:" prop="username">
          <el-input  autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input type="password" autocomplete="off"></el-input>
        </el-form-item>
          <el-button type="primary">登陆</el-button>
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
      fixStyle: ''
    }
  },
  methods: {
    canplay () {
      this.videoCanPlay = true
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
