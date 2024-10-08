import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

//仓库
import store from './store';
import { getBanners } from './api';
getBanners();

Vue.config.productionTip = false
Vue.use(ElementUI)


new Vue({
  router,
  store,
  render: h => h(App)
  
}).$mount('#app')
