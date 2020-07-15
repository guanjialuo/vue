import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'


Vue.use(VueRouter)

// const routes = [
 
// ]

// const router = new VueRouter({
//   routes:[]
// })

export default new VueRouter({

  routes:[
    {path:'/',redirect:'/login'},//重定向
    {path:'/login', component:Login}

  ]
})
