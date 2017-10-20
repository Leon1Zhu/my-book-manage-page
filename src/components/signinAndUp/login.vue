<template xmlns="http://www.w3.org/1999/html">
  <div id="main" class="main">
    <div class="top">
      <div class="icon">
        <h1 class='stroke'>美原图书馆</h1>
      </div>
    </div>
    <div class="center">
      <div class="mdl">
        <div class="zhdl">
          <span style="margin-left:38% ;font-size:20px;color: white;">账户登陆</span>
        </div>

        <div id="inputvalue">
          <div class="inputgroup">
            <Icon class="ivu-icon ivu-icon-person" style="margin-left: 18%;margin-top: 8%;" size="25"></Icon>
            <Input type="text" class="inputtext" v-model="username" id="username" placeholder="邮箱/手机号"/>
            <br>
            <Icon class="ivu-icon ivu-icon-locked" style="margin-left: 18%;margin-top: 8%;" size="25"></Icon>
            <Input type="password" style="margin-bottom:5%;" class="inputtext" v-model="password" id="password"
                   placeholder="密码"/>
          </div>

          <div class="wjmm">
            <router-link to="/xgpassword/first"  style="margin-left: 62%;">忘记密码</router-link>
          </div>
          <Button v-on:click="login" class="btn1" id="dl" style="width:180px; background: #BADCDB; color: white; font-size:15px;">登录
          </Button>
          <div class="registmdl">
            <img class="jt" src="../../assets/img/redarrow.jpg"/>
            <router-link to="/regist" class="regist">前往注册</router-link>
          </div>
        </div>


      </div>
    </div>
    <div id="bottom" style="margin-left: 40% ; margin-top: 2%">
      <a href="">关于我们&nbsp&nbsp&nbsp&nbsp&nbsp</a>
      <a href="">联系我们&nbsp&nbsp&nbsp&nbsp</a>
      <a href="">广告服务&nbsp&nbsp&nbsp&nbsp</a>
      <a href="">美原公益&nbsp&nbsp&nbsp&nbsp</a>
      <a href="">美原社区</a>
    </div>
  </div>
</template>

<style>
  .top {
    height: 15%;
    width: 100%;

  }

  .center {
    height: 70%;
    width: 100%;
    background: url(../../assets/img/book2_rep.png) no-repeat;
    background-size: 100%;

  }

  #main {
    width: 100%;
    height: 100%;
    background: #ffffff;
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
       margin-left: 18%;
       margin-top: 8%;
  }
  .ivu-icon ivu-icon-locked myicon1 {
    margin-left: 18%;
    margin-top: 8%;

  }

  .stroke {
    margin-left: 30px;
    color: transparent;
    -webkit-text-stroke: 1px black;
    letter-spacing: 0.04em;
    color: orange;

  }

  .mdl {
    float: left;
    height: 80%;
    width: 23%;
    background: white;
    margin-left: 70%;
    margin-top: 40px;
  }

  .zhdl {
    padding:10px 15px ;
    width: 100%;
    height: 10%;
    background: #BADCDB;
  }

  .username {
    width: 80%;
    margin-top: 2px;
    height: 35px;
  }

  .inputgroup {
    margin-top: 1%;
  }

  .inputtext {
    width: 50%;
    margin-bottom: 3%;
    margin-left: 3%;
  }

  .ivu-icon ivu-icon-locked {
    margin-left: 2%;
  }

  .btn1 {
    margin-left: 20%;
    margin-top: 5%;
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
    margin-left: 35%;
    float: left;
    width: 25px;
    height: 25px;
  }

  .registmdl {
    width: 100%;
    height: 10%;
    margin-top: 40px;

  }
</style>

<script>
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login: function () {
        if (this.password === '111' && this.username === '222') {
          alert('登录成功')
        } else {
          alert('登录失败')
        }
      }
    }
  }
</script>


