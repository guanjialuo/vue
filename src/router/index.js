import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import home from '../components/home.vue'


Vue.use(VueRouter)

// const routes = [
 
// ]

// const router = new VueRouter({
//   routes:[]
// })

const router=new VueRouter({

  routes:[
     {path:'/',redirect:'/login'},//重定向
    {path:'/login', component:Login},
    {path:'/home', component:home}

  ]
})
router.beforeEach((to,from,next)=>{
//to将要访问的路径
//from从哪个路径跳转过来
//next是一个函数表示放行
//()next 放行 ('/login')next 强制跳转
if(to.path=='/login'){ next();}
else{
  const res=window.sessionStorage.getItem('token');
  if(res){
    next();
  }else{
    next('/login');
  }
}
})

export default router