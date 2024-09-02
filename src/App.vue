<template>
  <!-- 7.21-问题3：vue2里面，必须有一个根div标签，vue3可以省略 -->
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header></Header>
    <!-- 7.21-问题1：Vue.js 组件命名建议使用 PascalCase，即首字母大写，以便在模板中与 HTML 元素区分开来。 -->
    <router-view></router-view>
    <!-- 7.22-问题1：路由元信息的使用meta -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Footer from './components/footer.vue'
import Header from './components/header.vue'


export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  
}
</style>
