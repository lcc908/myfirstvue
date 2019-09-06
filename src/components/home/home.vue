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
          <el-aside width="200px" class="aside">

            <el-menu
              background-color="#393D49"
              text-color="#fff"
              :unique-opened="true"
            >
              <!--1-->
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                  <el-menu-item index="1-1">
                      <i class="el-icon-location"></i>
                      <span>选项1</span>
                  </el-menu-item>
                  <el-menu-item index="1-2">
                    <i class="el-icon-location"></i>
                    <span>选项2</span>
                    </el-menu-item>
              </el-submenu>
              <!--2-->
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-s-goods"></i>
                  <span>导航二</span>
                </template>
                <el-menu-item index="2-1">
                  <i class="el-icon-location"></i>
                  <span>选项1</span>
                </el-menu-item>
              </el-submenu>
              <!--3-->
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航三</span>
                </template>
                <el-menu-item index="3-1">
                  <i class="el-icon-location"></i>
                  <span>选项1</span>
                </el-menu-item>
              </el-submenu>
              <!--4-->
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航四</span>
                </template>
                <el-menu-item index="4-1">
                  <i class="el-icon-location"></i>
                  <span>选项五</span>
                </el-menu-item>
              </el-submenu>
              <!--5-->
            </el-menu>

          </el-aside>
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
  .aside ul {
    width: 200px;
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
