<template>
  <div>
    <input type="text" v-model="userName" placeholder="user">
    <input type="text" v-model="passworld" placeholder="password">
    <div>
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        userName: '',
        passworld: '',
      }
    }
    ,
    methods: {
      login: function () {
        this.$router.push(
          {
            path: '/index',
            query: {
              userName: this.userName,
              passworld: this.passworld,
            }
          }
        )
      }
    }
  }
</script>
<style>

</style>
