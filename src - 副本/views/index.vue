<template>
  <div>
    欢迎{{name}}登录,{{pass}}
  </div>
</template>
<script>
export default{
    data(){
        return{
            name:this.$route.query.userName,
            pass:this.$route.query.passworld
        }
    },
    mounted:function () {

    }
}
</script>
<style>

</style>
