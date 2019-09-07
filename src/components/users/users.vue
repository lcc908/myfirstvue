<template>
  <el-card class="box-card">
  <!--面包屑-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
  <!--搜索框-->
    <el-row class="serchrow">
      <el-col>
        <el-input placeholder="请输入内容"
                  v-model="input3"
                  class="inputselect">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="success">添加用户</el-button>
      </el-col>
    </el-row>
  <!--表格-->
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="index"
        label="#"
        width="60">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="80">
      </el-table-column>
      <el-table-column
        prop="address"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="name"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="creattime"
        label="创建时间">
    <!-- 入股过单元格显示的内容不是字符串（文本），
    需要给被显示的内容外层包裹一个template -->

    <!--template内部需要用数据设置slot-scope属性，
    该属性的值要用数据date的源数据tableData-->
<!--tableData.row指的是数组中的每个对象-->
<!--        slot-scope的值会自动去上一级找最外层标签el-table所绑定的组件tableData-->
<!--        <template slot-scope="scope">-->
<!--          {{scope.creattime | fmtdate}}-->
<!--          {{scope.row.creattime | fmtdate}}-->
<!--        </template>-->
      </el-table-column>
      <el-table-column
        label="用户状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.value1"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="操作">
        <template slot-scope="scope">
            <el-button size="mini" plain="true" type="primary" icon="el-icon-edit" circle></el-button>
          <el-button size="mini" plain="true" type="danger" icon="el-icon-delete" circle></el-button>
            <el-button size="mini" plain="true" type="success" icon="el-icon-check" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
    export default {
        name: "users",
        data(){
            return {
                input3:'',
                //表格绑定的数据
                tableData: [{
                    creattime: '2018-8-1',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    value1:true
                }, {
                    creattime: '2018-8-2',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    value1:false
                }],
                //分页相关的数据
                total:0,
                pagenum:1,
                pagesize:2
            }
        },
        created(){
          // this.getuserList()
            const res = {
                'data':{
                    'userslist':[{
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄'
                    }],
                    'total':10
                }
            }
            const {data:{userslist,total,code}} = res;
            console.log(userslist.row);
        },
        methods:{
            async getuserList () {
                // this.$http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
                const res = await this.$http.get('user/api')
                const {meta:{userslist,total,code}} = res.data;
                if(code == 200){
                    this.tableData = userslist
                    this.total = total
                }

            }
        }
    }
</script>

<style scoped>
.box-card {
  height: 100%;
}
  .inputselect {
    width: 400px;
  }
  .serchrow {
    margin-top: 20px;
  }
</style>
