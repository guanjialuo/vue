<template>
    <div class="login_container">
        <div class="login_box">
            <!--头像区域-->
            <div class="avatar-box">
                <img src="../assets/logo.png" alt="">
            </div>
            <!--登陆表单区域-->
            <el-form :model="LoginForm" :rules="LoginFormRules" class="login_form">
            <!--用户名-->
              <el-form-item prop="username"> 
                <el-input v-model="LoginForm.username" prefix-icon="iconfont icon-user"></el-input>
              </el-form-item>
             <!--密码-->
             <el-form-item prop="password">
                <el-input type="password" v-model="LoginForm.password" prefix-icon="iconfont icon-3702mima"></el-input>
              </el-form-item>  
              <!--按钮区域-->
              <el-form-item class="btns">  
                <el-button type="primary">登陆</el-button>
                <el-button type="info">重置</el-button>
              </el-form-item>               
            </el-form>                     
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        //登陆表单的数据绑定对象
        LoginForm:{
            username:'zs',
            password:'123'
        },
        //表单的验证规则
        LoginFormRules:{
            username:[
                { required: true, message: '请输入登陆名称', trigger: 'blur' },
                { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
            ],
            password:[
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
            ]
        }
    } 
    }
   
    
}
</script>
<style lang="less" scoped>
.login_container{
    background-color: #2b4b6b;
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);//位移将盒子放在页面正中心

    .avatar-box{
        width: 130px;
        height: 130px;
        border: 3px solid #eee;
        border-radius: 50%; 
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
      img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #eee;
      }
    }
   
}
 .btns{
        display: flex;
        justify-content: flex-end;//盒模型水平方向右对齐
    }
.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;//padding、border不会加宽加高盒子
}
</style>