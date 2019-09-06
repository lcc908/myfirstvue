<template>
      <el-container class="container">
        <el-header class="heder">
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <img src="../../assets/mylove.jpg" alt="无法显示图片">
              </div>
            </el-col>
            <el-col :span="12" class="exit">
              <a href="">退出</a>
            </el-col>
          </el-row>
        </el-header>
        <el-container>
          <el-aside width="200px" class="aside">Aside</el-aside>
          <el-main class="main">Main</el-main>
        </el-container>
      </el-container>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
  .container {
    height: 100%;
  }
  .heder {
    background-color: #23262E;
    width: 100%;
  }
  .aside {
    background-color: #393D49;
    /*height: 100%;*/
  }
  .main {
    background-color: #e9eef3;
  }
  .footer {
    background-color: #eee;
  }
  img {
    width:60px;
    height: 60px;
    border-radius: 50%;
  }
  .exit {
    text-align: right;
  }
  .exit a {
    text-decoration: none;
    line-height: 60px;
    color: #fff;
  }
</style>
