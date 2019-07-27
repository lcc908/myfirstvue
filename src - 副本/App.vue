<template>
  <div id="app">
    <div v-if="login">
      <router-link to="/news">新闻1</router-link>
      <router-link to="/guanggao">广告1</router-link>
      <router-link to="/book">图书1</router-link>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return{
        login:true
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
