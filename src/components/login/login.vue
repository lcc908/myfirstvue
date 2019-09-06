<template>
    <div class="lgoin-warp">
      <el-form
        class="login-form"
        label-position="top"
        label-width="80px"
        :model="formdata">
        <h2>用户登陆</h2>
        <el-form-item label="用户名">
          <el-input v-model="formdata.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formdata.password"></el-input>
        </el-form-item>
        <el-button @click="handleLogin" class="login-buttom" type="primary">登陆</el-button>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                formdata:{
                    username:'',
                    password:''
                }
            }
        },
        methods:{
            //登陆请求
            handleLogin(){
                if(this.formdata.username == "" || this.formdata.password == ""){
                    this.$message.error('账号密码不可为空');
                }else {
                    this.$message.success('登陆成功');
                    localStorage.setItem('token','7393006')
                    this.$router.push('/')
                }

                // this.$http.post('login',this.formdata).then(res =>{
                //     if(res.code == 200){
                //         localStorage.setItem('token','7393006')
                //     }
                // })


            },

//es7 a       //sync+await
            //让异步操作代码，看起来像同步代码
            //1.找到异步操作有结果的代码  前面加上await 同事用一个变量接受
            // 2. 找到距离异步操作有结果的dai'ma
            // async handleLogin(){
            //     if(this.formdata.username == "" || this.formdata.password == ""){
            //         this.$message.error('账号密码不可为空');
            //     }else {
            //         this.$message.success('登陆成功');
            //         this.$router.push('/')
            //     }
            //     //让异步操作代码，看起来像同步代码
            //     //es7 async+await
            //     const res = await this.$http.post('login',this.formdata)
            //
            //     if(res.code == 200 ){
            //
            //     }
            //
            // },
        }
    }
</script>

<style scoped>
.lgoin-warp {
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .login-form {
    width: 400px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
  }
  .login-buttom {
    width: 100%;
  }
</style>
