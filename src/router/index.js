// 7.21-问题2：配置路由
import Vue from "vue";
import VueRouter from "vue-router"
Vue.use(VueRouter)


import Home from "@/views/home";
// import HelloWorld from "@/components/HelloWorld.vue";
import My from "@/views/my.vue";
import Course from "@/views/course.vue";
import Teacher from "@/views/teacher.vue";
import Layout from "@/layout"

// import { component } from "vue/types/umd";


export default new VueRouter({
    routes:[
        
        // 首页
        {
            path: '/',
            component: Layout,
            meta:{show:true},
            children:[
                {
                    path:'home',
                    name:'home',
                    component:Home
                },
                {
                    path:'my',
                    name:'my',
                    component:My
                }
              
            ]
        },
       
      
        {
            path:'/course',
            component:Course,
            meta:{show:false}
        },
        {
            path:'/teacher/:input',
            component:Teacher,
            meta:{show:false},
            name:'teacher'

        }
        
    ]
})
