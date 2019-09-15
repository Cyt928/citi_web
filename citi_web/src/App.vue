<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import index from './views/index.vue'
import login from './views/login.vue'
export default {
  name: 'App',
  components: {
    index,
    login
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  word-break: break-all;
  color: #2c3e50;
  width: 100%;
  height: auto;
}
body {
  margin: 0;
  padding: 0;
  background-color: rgb(246, 246, 246);
}
a:link {
  text-decoration: none;
  color: #409eff;
}
a:visited {
  text-decoration: none;
  color: #409eff;
}
li {
  list-style-type: none;
}
</style>
