<template>
  <div class="my">
    我是my页面
    <form>
      <label for="name">姓名</label>&nbsp;
      <input type="text" name="" id="name" v-model="login.name">
      <br>
      <label for="age">年龄</label>&nbsp;
      <input type="text" id="age" v-model.number="login.age" placeholder="请输入整数">
      <br>
      性别&nbsp;
      <input type="radio" value="male" v-model="login.gender">男
      <input type="radio" value="female" v-model="login.gender">女
      <br>
      爱好
      <input type="checkbox" v-model="login.hobby" value="swim">游泳
      <input type="checkbox" v-model="login.hobby" value="sleep">睡觉
      <input type="checkbox" v-model="login.hobby" value="eat">吃饭
      <br>
      城市
      <select name="" id="" v-model="login.city">
        <option value="">请选择城市</option>
        <option value="北京">北京</option>
        <option value="上海">上海</option>
        <option value="深圳">深圳</option>
      </select>
      <p>{{ login.name + login.age }}</p>
      <button @click.prevent="text" >提交</button>
    </form>
    <div class="father">
      <div class="son">浮动1</div>
      <div class="son">浮动2</div>
      <!-- <div style="clear: both"></div> -->
    </div>
    <div class="biao">标准文档流</div>
    <router-link to="/">返回</router-link>
    <!-- <el-tabs :tab-position="tabPosition" style="height: 200px;">
                    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
                    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
                </el-tabs> -->
  </div>
</template>

<script>

export default {

  data(){
    return{
      login:{
        name:'',
        age:'',
        gender:'',
        hobby:[],
        city:''

      }
    }
  },
  methods:{
    text(){
      console.log(this.$data);
    }
  }
}
</script>

<style>
    .my{
      z-index: 5;
      position:absolute;
    }
    .father{
      width: 200px;
      /* height: 200px; */
      background: bisque;
      /* overflow: hidden; */
    }
    .son{
      float: right;
      width: 50px;
      height: 50px;
      background: rgb(46, 33, 164);
      border: solid 1px white;
    }
    .biao{
      width: 200px;
      height: 200px;
      background: rgb(30, 180, 85);
    
    }
</style>