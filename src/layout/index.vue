<template>
    <div class="root">
      <!-- 我是header根组件 -->
        <el-container>
          <el-header style="height: 100px;">
     
            <router-link to="/">
                <img src="@/assets/ysl.jpg" alt="" class="logo">
            </router-link>
            <router-link to="/home">首页</router-link>
            <router-link to="/my">我的</router-link>
            <router-link to="/">返回</router-link>
            <div class="custom-input">
              
                <el-input v-model="input" placeholder="猜你想搜"  ></el-input>
                <el-button type="primary" @click="goSearch">搜索</el-button>
            </div>
           
           
            <!-- <Home></Home>
            <My></My> -->
        </el-header>

          <el-container>
            <el-aside width="200px">
                <!-- Aside -->
               

                <el-tabs :tab-position="tabPosition" style="height: 200px;">
                    <el-tab-pane label="用户管理"> <router-link to="/my">我的</router-link></el-tab-pane>
                    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务">定时任务</el-tab-pane>
                </el-tabs>

            </el-aside>

              <el-container>
                <el-main>
                    Main
                    <router-view></router-view>
                </el-main>
                <el-footer>Footer</el-footer>
              </el-container> 

            </el-container>
        </el-container>
      
      
      </div>
  </template>
  
  <script>
import Home from '../views/home.vue'
import My from '../views/my.vue'


  export default {
    
  components: { 
    Home,
    My

   },
   data() {
      return {
        tabPosition: 'left',
        input: ''
      };
    },
    methods:{
        //路由传参
        //7.23-问题1 路由参数（params）
        // 使用冒号（:）定义路由参数
        // 使用路由参数
        // 路由参数通过 this.$route.params 在组件内部访问
        //==========================================================
        // 7.23-问题2 
        // 查询参数（query）
        // 查询参数是在 URL 中以 ? 开头的键值对形式的参数，用于过滤和传递非必要的路由信息
        // 使用查询参数
        // 查询参数可以通过 this.$route.query 在组件内部访问
        goSearch(){
            // 7.24-问题1-书写方式
            //1.字符串形式
            this.$router.push("/teacher/"+this.input+"?k="+this.input.toUpperCase())
            //2.模板字符串形式
            // this.$router.push(`/teacher/${this.input}`)
            //3.对象形式（推荐）
            // this.$router.push({
            //     name:'teacher',
            //     params:{input:this.input},
            //     query:{k:this.input.toUpperCase()}
            // })

        }
    }
  

  
  };
  </script>
  
  <style>
  .logo{
    width: 200px;
    opacity: 0.5;
    border-radius: 50%;
  }
  .root{
     position: relative;
  }
   

    .el-header, .el-footer {
      background-color: #7a70a3;
      color: #333;
      display: flex;
      align-items: center; 
      /* 垂直居中 */
      /* justify-content: center;  */
      /* 水平居中 */
      justify-content: space-between; /* 将内容分散放置在两侧 */

      
    }
    
    .el-aside {
      background-color: #d6d3e6;
      color: #333;
      text-align: center;
      line-height: 200px;
      height: 400px;
    }
    
    .el-main {
      background-color: #ebe9f3;
      color: #333;
      text-align: center;
      /* line-height: 260px; */
      height: 400px;
      /* opacity: 0.5; */
    }
    
    body > .el-container {
      margin-bottom: 40px;
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
      line-height: 260px;
    }
    
    .el-container:nth-child(7) .el-aside {
      line-height: 320px;
    }
    .custom-input  {
        display: flex;
        /* right: 0; */
        font-size: 14px;
        width:600px;
    }
  
  </style>