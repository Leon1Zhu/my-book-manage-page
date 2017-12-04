<template xmlns="http://www.w3.org/1999/html">
  <div id="main" class="main">
   <!-- <div class="top">
      <div class="icon">
       <img style="width:250px;height: 50px;" src="../../assets/logo.png">
      </div>
    </div>-->
    <div class="close-item animateClass" @click="closeLoginContent">
      <i   class=" iconfont icon-close48"></i>
    </div>
      <div class="mdl">
        <div class="zhdl">
          <span style="margin-left:38% ;font-size:20px;color: white;">账户登陆</span>
        </div>
        <div id="inputvalue" style="width: 100%">
          <div class="inputgroup">
            <div style="width: 100%;  display: flex;justify-content: center;align-items: center;margin-top: 5%">
              <Icon class="ivu-icon ivu-icon-person" size="25"></Icon>
              <Input type="text" class="inputtext" style="width: 50%" v-model="username" id="username" placeholder="手机号"/>
            </div>

            <div style="width: 100%;  display: flex;justify-content: center;align-items: center;margin-top:5% ">
            <Icon class="ivu-icon ivu-icon-locked"   size="25"></Icon>
            <Input type="password" style=" width: 50%" class="inputtext"     v-model="password" id="password"
                   placeholder="密码"/>
            </div>
          </div>

          <div class="wjmm">
            <router-link to="/xgpassword/first"  style="margin-left: 60%;margin-top: 5%">忘记密码</router-link>
          </div>
          <Button @click="login" class="btn1" id="dl" style="margin-top: 8% ;width:60%; background: #BADCDB; color: white; font-size:15px;margin-left: 22%">登录
          </Button>
          <div class="registmdl">
            <img class="jt" src="../../assets/img/redarrow.jpg"/>
            <router-link to="/regist" class="regist">前往注册</router-link>
          </div>
        </div>


      </div>
    </div>
<!--    <div id="bottom" style="margin-left: 40% ; margin-top: 2%">
      <a href="">关于我们&nbsp&nbsp&nbsp&nbsp&nbsp</a>
      <a href="">联系我们&nbsp&nbsp&nbsp&nbsp</a>
      <a href="">广告服务&nbsp&nbsp&nbsp&nbsp</a>
      <a href="">美原公益&nbsp&nbsp&nbsp&nbsp</a>
      <a href="">美原社区</a>
    </div>-->
</template>

<style>
  .top {
    height: 15%;
    width: 100%;

  }
 .close-item i{
   font-size: 30px;
   color: white;
 }
  .close-item{
    width:30px;
    position: absolute;
    top:10px;
    right: 10px;
  }
  .close-item:hover{
    transform: rotate(180deg);
  }

  #main {
    width: 100%;
    height: 100%;
    position: relative;
    MARGIN-RIGHT: auto;
    MARGIN-LEFT: auto;
  }

  .icon {
    width: 40%;
    height: 100%;
    float: left;
    margin-top: 2%;

  }

  .ivu-icon ivu-icon-person myicon1 {
       margin-left: 20%;
       margin-top: 8%;
  }
  .ivu-icon ivu-icon-locked myicon1 {
    margin-left: 20%;

  }

  .stroke {
    margin-left: 30px;
    color: transparent;
    -webkit-text-stroke: 1px black;
    letter-spacing: 0.04em;
    color: orange;

  }

  .mdl {
    height: 320px;
    width: 300px;
    background: white;
    margin:0 auto;
    position: relative;
    top:33%;
/*    display: flex;
    justify-content: center;*/
  }

  .zhdl {
    width: 100%;
    height: 10%;
    background: #BADCDB;
    padding-top: 2%;
  }

  .username {
    width: 80%;
    margin-top: 2px;
    height: 35px;
  }

  .inputgroup {
    margin-top: 1%;
    width: 100%;
  }

  .inputtext {
    width: 20%;

  }

  .ivu-icon ivu-icon-locked {
    margin-left: 2%;
    margin-top: -10%;
  }

  .btn1 {
    margin-left: 20%;
    margin-bottom: 5%;
  }

  .wjmm {
    width: 100%;
    height: 10%;
    margin-top: 10px;

  }

  .regist {
    float: left;
    margin-top: 2px;

    font-size: 20px;
    text-decoration: none;
    color: #f6387E;
  }

  .jt {
    margin-left: 48%;
    float: left;
    width: 25px;
    height: 25px;
  }

  .registmdl {
    width: 100%;
    height: 10%;
    margin-top: 5%;

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


