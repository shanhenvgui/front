<template>
  <div>
    我是教师页面
    <router-link to="/">返回</router-link>
    <!-- 7.23 问题3-路由传参成果 -->
    <h1>param 参数{{$route.params.input}}</h1>
    <h1>param 参数{{$route.params.input}}</h1>
    <h1>query 参数{{$route.query.k}} </h1>
    <div class="a">
      浮动会把字数甩出来
    </div>
    <div class="a">
      
    </div>
    <div class="b">
      b被甩出来了
    </div>
    <div class="c">
      ccccccccccc被覆盖ccccccccccccccc被覆盖
    </div>
    <div class="d">
      定位脱标会覆盖原有字母
    </div>
    <hr>
    <br>
   <textarea name="" id="" cols="30" rows="10" v-model="newComment" placeholder="请输入评论"></textarea>
   <button @click="addComment">提交评论</button>

    <div v-for="(comment,index) in comments" :key="index" >
      <p >
        {{comment.text.length>20?cut(index):comment.text}}
      </p>
       
        <span  @click="toggle(index)" v-if="comment.text.length>20">{{comment.show?'收起':'展开'}}</span>
    </div>
  </div>
  
</template>

<script>
export default{

  data(){
    return{
      comments:[
        {
          text : '',
          show : false
        }
        
      ],
      newComment : ''
    }
  },
  methods:{
    addComment(){
      this.comments.push({text:this.newComment,show:false});
      this.newComment = '';

    },
    toggle(index){

      this.comments[index].show = !this.comments[index].show;
     
    },
    cut(index){
    
      const comment = this.comments[index];
      return comment.show ? comment.text : comment.text.substring(0, 20) + '...';
    }

    
  }
};


</script>

<style>
textarea{
  float: left;
}
span{

  display: inline-block;
  width: 200px;
}

p.expanded {
  white-space: normal;
  text-overflow: clip;
}
  .pinglun{
    display: inline-block;
    width: 100px;
    overflow: hidden;
  }
  .a{
    float: left;
    width: 100px;
    height: 100px;
    background-color: pink;
  }
  .c{
    float: left;
    width: 150px;
    height: 150px;
    background-color: rgb(97, 210, 11);
  }
  .b{
    /* float: left; */
    /* overflow: auto; */
    /* display: inline-block; */
    /* position: absolute; */
    /* display: table; */
    /* top: 10px; */
    width: 150px;
    height: 150px;
    background-color: rgb(227, 9, 46);
  }
  .d{
    /* float: left; */
    /* overflow: auto; */
    /* display: inline-block; */
    position: absolute;
    /* display: table; */
    /* top: 10px; */
    width: 50px;
    height: 150px;
    /* opacity: 0.5; */
    background-color: rgb(24, 60, 202);
  }
</style>