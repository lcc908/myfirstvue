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
                  clearable
                  @clear="delect()"
                  class="inputselect">
          <el-button
            slot="append"
            @click="searchUser"
            icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="success" @click="showAddUser">添加用户</el-button>
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
            @change="changeMgState(scope.row)"
            inactive-color="#ff4949">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="操作">
        <template slot-scope="scope">
            <el-button size="mini"
                       plain type="primary"
                       icon="el-icon-edit"
                       @click="edituser(scope.row)"
                       circle></el-button>
            <el-button size="mini"
                       plain type="danger"
                       icon="el-icon-delete"
                       @click="delectuser(scope.row.id)"
                       circle></el-button>
            <el-button size="mini"
                       plain type="success"
                       icon="el-icon-check"
                       @click="fenpeisuer(scope.row)"
                       circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[1 ,2, 3, 4]"
      :page-size="1"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  <!--添加用户对话框-->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户名称" label-width="100px">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="100px">
          <el-input v-model="form.passworld" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="100px">
          <el-input v-model="form.emile" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="100px">
          <el-input v-model="form.tel" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser()">确 定</el-button>
      </div>
    </el-dialog>
  <!--编辑用户-->
    <el-dialog title="编辑用户" :visible.sync="edit">
      <el-form :model="form">
        <el-form-item label="用户名称" label-width="100px">
          <el-input v-model="form.name" disabled autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="100px">
          <el-input v-model="form.emile" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="100px">
          <el-input v-model="form.tel" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="edit = false">取 消</el-button>
        <el-button type="primary" @click="editadduser()">确 定</el-button>
      </div>
    </el-dialog>
  <!--修改用户角色-->
    <el-dialog title="分配校色" :visible.sync="roollll">
      <el-form :model="form">
        <el-form-item label="用户名" label-width="100px">
          {{'用户名'}}
        </el-form-item>
        <el-form-item label="角色" label-width="100px">
          <!--
          如果select绑定的数据的值 如果 和option的value一样
           就会显示该option的label值,
           -->
          {{currrole}}
          <el-select v-model="currrole">
            <el-option label="请选择" :value="-1"></el-option>
            <el-option
              v-for="(item,i) in role"
              :value="item.id"
              :label="item.name"
              :key="i"
            ></el-option>
          </el-select>

        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="roollll = false">取 消</el-button>
        <el-button type="primary" @click="setRole">确 定</el-button>
      </div>
    </el-dialog>
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
                    value1:true,
                    id:1
                }, {
                    creattime: '2018-8-2',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    value1:false,
                    id:2
                }],
                //分页相关的数据
                total:50,
                pagenum:1,
                pagesize:2,
            //添加对话框
                form:{
                    creattime:'',
                    name:'',
                    passworld:'',
                    emile:'',
                    tel:''
                },
                role:[{name:'管理员',id:1},{name:'管理员2',id:2},{name:'管理员3',id:3}],
                dialogFormVisible:false,
                edit:false,
                roollll:false,
                currrole:'',// 用户id
                // curruserid:-1

            }
        },
        created(){
          // this.getuserList()
          //   const res = {
          //       'data':{
          //           'userslist':[{
          //               date: '2016-05-02',
          //               name: '王小虎',
          //               address: '上海市普陀区金沙江路 1518 弄'
          //           }, {
          //               date: '2016-05-04',
          //               name: '王小虎',
          //               address: '上海市普陀区金沙江路 1517 弄'
          //           }],
          //           'total':10
          //       }
          //   }
          //   const {data:{userslist,total,code}} = res;
          //   console.log(userslist.row);
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
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            searchUser(){
                console.log(1);
                // this.getuserList()
            },
            delect(){
                this.$message.success('清除成功');
            },
            showAddUser:function () {
                this.form = {}
                this.dialogFormVisible = true
            },
            // 添加用户发送ajax
             addUser () {
                this.dialogFormVisible = false
                this.$http.post(`api`,this.form)
                // const {data} = res.data;
                const code = 200;
                if(code == 200){
                    // 提示成功
                    this.$message.success('保存成功')
                    // 重新请求表格数据
                    this.getuserList()
                    // 清空文本框
                    this.form = {}
                }
            },
            //删除用户
            delectuser:function (userid) {
                console.log(userid);
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //发送删除请求 :id
                    // 1.
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            // 编辑用户
            edituser:function (user) {
                console.log(user);
                this.form = user
                this.edit = true
            },
            // 发送编辑用户提交
            editadduser:function () {

            },
            // 修改用户状态发送请求
            changeMgState:function (user) {
                console.log(user.value1);
            },
            // 分配角色 打开对话框
            fenpeisuer(user){
                console.log(user);
                this.roollll = true
                this.currrole = user.id  //打开对话框给roleID复制
            },
            //分配角色，发送请求
            setRole(){

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
