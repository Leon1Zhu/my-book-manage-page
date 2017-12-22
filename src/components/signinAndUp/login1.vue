<template>
  <div class="main_login">
    <div  class="login_ts"><p>用户登陆</p></div>
    <div class="login_group" style="margin-top: 3%">
      <Icon class="ivu-icon ivu-icon-person" size="25"></Icon>&nbsp&nbsp&nbsp&nbsp
      <Input type="text"  class="inputtext"  v-model="username" id="username" placeholder="手机号"/>
    </div>
    <div class="login_group">
      <Icon class="ivu-icon ivu-icon-locked"   size="25"></Icon>&nbsp&nbsp&nbsp&nbsp
      <Input type="password" class="inputtext"  v-model="password" id="password" placeholder="密码"/>
    </div>
    <div class="login_group">
      <router-link to="/xgpassword/first"  style="margin-top: 5% ; padding-left:37%">忘记密码</router-link>
    </div>
    <Button type="info" @click="login" class="btn1" id="dl" style="margin-left:38% ;margin-top: 2% ; font-size: 17px;width:25% ;background: #6a4f90;border-color: #6a4f90;height:40px;">登录
    </Button>
  </div>
</template>
<style>
  .main_login{
    display: flex;
    flex-direction: column;
    align-items: left;
  }
  .ivu-icon ivu-icon-person{
    margin-top: 2%;
  }
  .inputtext{
    width:40%;
    margin-bottom: 4px;
  }
  .login_group{
    margin-top: 2%;
    width: 100%;
    padding-left: 35%;
  }
  .login_ts{
    margin-left: 47%;
    margin-top:2%;
    font-size:20px;
    font-family:"微软雅黑"
  }
</style>
<script>
  import userApi from '../../api/userService'
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    created(){
        if(ISLOGIN){
          this.$router.push( {path:'/'} )
        }
    },
    methods: {
      closeLoginContent(){
        this.$emit("closeLogin");
      },
      login: function () {
        var that = this;
        if(that.username=='' || that.password==''){
          this.$Notice.warning(setNoticConfig("用户名或密码不能为空！",null,null,"error"));
          return;
        }
        userApi.login(that.username, that.password).then((response)=>{
          response.data.userInfo.password=null;
          setLoginStatus(true);
          setUserInfo( response.data.userInfo,response.data.userInfo.orderInfo,response.data.userInfo.saveInfos)
          setRAHBook(response.data.bookInfo)
          that.$router.go(0)
        }).catch((response)=>{
          this.$Notice.error(setNoticConfig(response.message,null,null,"error"));
        })
      }
    }
  }
</script>
