<template>
  <div class="main_login">
    <div class="login_group" style="margin-top: 7%">
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
    <Button type="info" @click="login" class="btn1" id="dl" style="margin-left:35% ;margin-top: 3% ; font-size: 17px;width:30% ;background: #6a4f90;border-color: #6a4f90;height:40px;">登录
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
          that.$router.push( {path:'/'} )
        }).catch((response)=>{
          this.$Notice.error(setNoticConfig(response.message,null,null,"error"));
        })
      }
    }
  }
</script>
