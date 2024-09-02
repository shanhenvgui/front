<template>
  <div class="home">
    <!-- 我是home页面 -->
    <!-- 7.21-问题4：声明式导航router-link,可以进行路由的跳转
          编程式导航push()|replace，可以进行路由跳转 this.$router.push('/about');
          编程式导航:声明式导航能做的，编程式导航都能，
          但是编程式导航除了可以进行路由跳转，还可以做一些其他的业务逻辑 -->
    <!-- <router-link to="/my">我的</router-link>
    <router-link to="/Teacher">教师</router-link>
    <router-link to="/Course">课程</router-link> -->

    <div class="carousel-container">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="banner in bannerData" :key="banner.id">
          <!-- <el-image :src="banner.imageUrl" fit="cover" class="banner-img" /> -->
          <img :src="banner.imageUrl" alt="" class="banner-img" />
          <!-- <el-image :src="encodeOssFileUri(banner.imageUrl)" fit="cover" class="banner-img" /> -->
        </el-carousel-item>
      </el-carousel>
    </div>


    <!-- <image v-for="banner in bannerData" :key="banner.id" :src="banner.imageUrl" class="img"></image> -->
    
    <button title="Click me to submit">Submit</button>

    <div class="container">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
        <div class="card">Card 4</div>
        <div class="card">Card 4</div>
        <div class="card">Card 4</div>
        <div class="card">Card 4</div>
        <!-- Add more cards as needed -->
    </div>
  </div>
  <!-- <a href="http://localhost:8081/#/my">我的</a> -->
  
</template>

<script>
import {getBanners} from '@/api'
export default {
  name:'Home',
  data(){
    return{
      bannerData:[]
    }
  },
  created() {
    // this.getSubjects()
    this.getBanners()
   
  

  },
  methods:{
    getBanners() {
      getBanners().then(resp => {
        this.bannerData = resp.data
       
      })
    },
    // encodeOssFileUri(ossUri) {
    //   return encodeOssFileUri(ossUri)
    // },
  }

}
</script>

<style>
 .container {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        .card {
            flex: 1 ; /* Grow, shrink, and initial basis */
            background: #f8f9fa;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 16px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            text-align: center;
        }
  .carousel-container {
  position: absolute;
  top: 150px;
  left: 300px;
  right: 0;
  z-index: 10; /* 确保轮播图在布局之上 */
  height: 150px;
  width: 500px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 100px;
    margin: 0;
  
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #0961dc;
    /* height: 200px; */
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #11de2c;
    /* height: 200px; */
  }
  /* .el-carousel {
    position: absolute;
    top: 200px;
    left: 200px;
    width: 200px; 
    height: 100px; 
  }  */
    .banner-img{
      z-index: 0;
    }
   
</style>