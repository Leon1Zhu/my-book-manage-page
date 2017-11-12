<template>
  <div id="main">
    <div class="header">
      <img style="float:left;width:250px;height: 50px;margin-top: 18px;margin-left: 10px;" src="../../assets/logo.png">
      <span class="tb2">欢迎注册</span>
      <div style="position: absolute;right: 20px;top: 0px;">
      <span class="tb3">已有账户？</span>
      <router-link to="/login" class="tb4">前往登录</router-link>
      </div>
    </div>
    <form style="display: flex; margin-bottom: 10px;background: #fff;position: relative;">

      <div class="inputvalue" id="usernamegrp" v-cloak>
        <p class="zt" style="margin-left: 39% ;font-size: 20px;">个人信息</p>
        <div class="inputzu" style="margin-top: 10px">
          <span class="spa" slot="prepend">姓&nbsp&nbsp&nbsp&nbsp名</span><input type="text" v-model="name" class="inp"
                                                                               v-on:blur="losename" v-on:focus="getname"
                                                                               placeholder="请输入姓名"/>

        </div>
        <div style="float:left; margin-top: 30px ; margin-left: 20px ; text-align:center "><img src="../../assets/img/greenarrow.jpg"   v-if="grtr3" class="lsjt"/></div>

        <p class="usernamewarning" v-bind:class="{namecolor:isnamecolor}">{{namewarning}}</p>
        <br>


        <div class="inputzu" style="margin-top: 7px">
          <span class="spa" slot="prepend">性&nbsp&nbsp&nbsp&nbsp别</span>
          <RadioGroup class="radiogp" v-model="sex" @on-change="sexchange">
            <Radio label="男"></Radio>
            <Radio label="女"></Radio>
          </RadioGroup>


        </div>
        <div style="float:left; margin-top: 18px ; margin-left: 20px ; text-align:center "><img src="../../assets/img/greenarrow.jpg"  v-if="grtr7"  class="lsjt"/></div>

        <br>
        <div class="inputzu" style="line-height: 20px">
          <span class="spa" slot="prepend">生&nbsp&nbsp&nbsp&nbsp日</span>
          <DatePicker format="yyyy年MM月dd" value="new data()" v-model="birthdate" @on-change="datechange" class="dp"
                      type="date"
                      placeholder="选择日期"></DatePicker>
        </div>

        <div style="float:left; margin-top: 18px ; margin-left: 20px ; text-align:center "><img  src="../../assets/img/greenarrow.jpg" v-if="grtr6"  class="lsjt"/></div>
        <br>
        <div class="inputzu" style="margin-top: 7px">
          <span class="spa" slot="prepend">联&nbsp系&nbsp人</span><input type="text" v-model="contact" class="inp"
                                                                      v-on:blur="losecontact" v-on:focus="getcontact"
                                                                      placeholder="请输入联系人姓名"/>

        </div>
        <div style="float:left; margin-top: 20px ; margin-left: 20px ; text-align:center "><img  src="../../assets/img/greenarrow.jpg" v-if="grtr4"  class="lsjt"/></div>
        <p class="usernamewarning" v-bind:class="{contactcolor:iscontactcolor}">{{contactwarning}}</p>
        <br>
        <div class="inputzu" style="margin-top: 7px">
          <span class="spa" slot="prepend" style="float: left;">联系地址</span>
          <Cascader class="cd" :data="data" @on-change="addresschange" v-model="value1"></Cascader>
        </div>
        <div style="float:left; margin-top: 22px ; margin-left: 20px ; text-align:center "><img  src="../../assets/img/greenarrow.jpg"  v-if="grtr11" class="lsjt"/></div>
        <br>
        <div class="inputzu" style="margin-top: 7px">
          <span class="spa" slot="prepend">详细地址</span><input type="text" v-model="detailaddress1" class="inp"
                                                             v-on:blur="losedetailaddress" v-on:focus="getdetailaddress"
                                                             placeholder="请输入详细地址"/>

        </div>
        <div style="float:left; margin-top: 25px ; margin-left: 20px ; text-align:center "><img  src="../../assets/img/greenarrow.jpg"  v-if="grtr9"  class="lsjt"/></div>

        <br>

        <div class="inputzu" style="margin-bottom: 7px; margin-top: 7px">
          <span class="spa" slot="prepend">邮箱地址</span><input type="text" v-model="mail" class="inp"
                                                             v-on:blur="losemail" v-on:focus="getmail"
                                                             placeholder="请输入邮箱地址"/>

        </div>
        <div style="float:left; margin-top: 20px ; margin-left: 20px ; text-align:center "><img  src="../../assets/img/greenarrow.jpg" v-if="grtr5" class="lsjt"/></div>
        <p class="usernamewarning" v-bind:class="{mailcolor:ismailcolor}">{{mailwarning}}</p>
        <br>
        <div style="clear:both"></div>
        <hr style="color: #ccc;width: 60%;margin:2% 0 2% 15%;">
        <p class="zt" style="margin-left: 39% ;font-size: 20px;">账户信息</p>

        <div class="inputzu" style="margin-top: 7px">
          <span class="spa" slot="prepend">手&nbsp机&nbsp号</span><input type="text" v-model="phone" class="inp"
                                                                      v-on:blur="losephone" v-on:focus="getphone"
                                                                      placeholder="手机号"/>
        </div>
        <p class="usernamewarning" v-bind:class="{phonecolor:isphonecolor}">{{phonewarning}}</p>
        <!--<div class="inputzu" style="margin-top: 7px">
          <span class="spa" slot="prepend">用&nbsp户&nbsp名</span><input type="text" v-model="username" class="inp"
                                                                      v-on:blur="loseusername" v-on:focus="getusername"
                                                                      placeholder="用户名"/>

        </div>-->
        <div style="float:left; margin-top: 28px ; margin-left: 20px ; text-align:center "><img  src="../../assets/img/greenarrow.jpg" v-if="grtr"  class="lsjt"/></div>
        <p class="usernamewarning" v-bind:class="{usernamecolor:isusernamecolor}">{{usernamewarning}}</p>
        <br>

        <div class="inputzu" style="margin-top: 7px">
          <span class="spa" slot="prepend">密&nbsp&nbsp&nbsp&nbsp码</span><input type="password" v-model="password1"
                                                                               class="inp"
                                                                               v-on:blur="losepassword"
                                                                               v-on:focus="getpassword"
                                                                               placeholder="密码"/>

        </div>
        <div style="float:left; margin-top: 19px ; margin-left: 20px ; text-align:center "><img  src="../../assets/img/greenarrow.jpg"  v-if="grtr1"  class="lsjt"/></div>
        <p class="usernamewarning" v-bind:class="{passwordcolor:ispasswordcolor}">{{passwordwarning}}</p>
        <br>

        <div class="inputzu" style="margin-top: 7px">
          <span class="spa" slot="prepend">重复密码</span><input type="password" v-model="repassword" class="inp"
                                                             v-on:blur="loserepassword" v-on:focus="getrepassword"
                                                             placeholder="密码确认"/>

        </div>
        <div style="float:left; margin-top: 20px ; margin-left: 20px ; text-align:center "><img  src="../../assets/img/greenarrow.jpg"   v-if="grtr2"  class="lsjt"/></div>
        <p class="usernamewarning" v-bind:class="{repasswordcolor:isrepasswordcolor}">{{repasswordwarning}}</p>
        <br>


        <!--<div style="float:left; margin-top: 20px ; margin-left: 20px ; text-align:center "><img  src="../../assets/img/greenarrow.jpg"   v-if="grtr8"  class="lsjt"/></div>-->
       <!-- <br>-->

        <div class="inputzu" style="margin-top: 7px">
          <n class="spa" slot="prepend">验&nbsp证&nbsp码</n>
          <input type="text" maxlength="6" style="width:70px;" v-model="inputyzm" class="inp"
                 v-on:change="yzmchange"
                 placeholder="验证码"/>
          <Button class="btn" type="ghost"   v-bind:disabled="dis" v-on:click="getyzm">
            {{yzm}}
          </Button>


        </div>
        <div style="float:left; margin-top: 22px ; margin-left: 20px ; text-align:center "><img  src="../../assets/img/greenarrow.jpg" v-if="grtr10"  class="lsjt"/></div>
        <!--        <p class="usernamewarning" v-bind:class="{yzmcolor:isyzmcolor}">{{yzmwarning}}</p>-->
        <br style="margin-top: 10px">
        <Button type="ghost" v-on:click="regist"
                style="width:200px;margin-left:28%;margin-top: 3%;,margin-bottom: 2%; background: orange; height:40px; color: white; font-size: 20px;">
          注册
        </Button>
      </div>

      <div class="rightmdl" style="">
        <img src="../../assets/img/bz.jpg" style="margin-left:22% ; margin-top:2%;height:200px ; width: 300px;"/>
        <img src="../../assets/img/book.jpg" style="margin-left:22% ;height:200px ; width: 300px;"/>
      </div>

    </form>
  </div>
</template>

<style>
  #main {
    width: 100%;
    height: 100%;
    position: relative;
    MARGIN-RIGHT: auto;
    MARGIN-LEFT: auto;
    background: #ffffff;
  }
  #usernamegrp,.header{
    background: #ffffff;
  }
  .header {
    height: 90px;
    width: 100%;
    box-shadow: 0 5px 4px -4px rgba(0,0,0,0.1);
    margin-bottom:10px;
  }

  .ivu-icon-ios-calendar-outline {
    margin-top: 8px;
  }

  .spa {
    font-family: "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
    font-size: 15px;
    margin-left: 10px;
    margin-top: 18px;
    width: 70px;
    float:left;



  }

  .btn {
    height: 40px;
    width: 100px;
    border: none;
    outline: none;
  }

  .cd {
    width: 45%;
    height: 50px;
    float: left;
    line-height: 50px;
    margin-left: 40px;

  }

  .dp {
    border: none;
    outline: medium;
    width:45% ;
    margin-left: 40px;
    line-height: 50px;
    height: 50px;

  }

  /*  .dp:focus {
      border-shadow: 0px;
    }
    .ivu-input:focus {
      border-shadow: 0px;
      border: 0px;
    }*/

  .radiogp {
    width: 50%;
    height: 50px;
    margin-left: 40px;
    line-height: 50px;
  }

  .tb1 {
    float: left;
    margin-top: 23px;
    margin-left: 20px;
    color: transparent;
    -webkit-text-stroke: 1px black;
    letter-spacing: 0.04em;
    color: orange;
  }

  .tb2 {
    float: left;
    margin-top: 32px;
    margin-left: 5%;
    font-family: "Microsoft Yahei";
    font-size: 30px;
  }

  .tb3 {
    float: left;
    margin-top: 40px;

  }

  .lsjt {
    height: 20px;
    width: 20px
  }

  .tb4 {
    float: left;
    margin-top: 40px;
    font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
  }

  .zt {
    font-family: "Microsoft YaHei";
    color: grey;
  }

  .inp {
    width: 50%;
    border: none;
    height: 50px;
    outline: none;
    margin-left: 40px;

  }

  .inputzu {
    width: 60%;
    heigth: 50px;
    border: 1px solid #f6f6f6;
    box-shadow: 5px 5px 5px #f6f6f6;
    margin-left: 15%;
    float: left;
  }

  .inputvalue {
    width: 40%;
    height: 70%;
    float: left;
    margin-bottom: 2%;
    margin-left: 10%;

  }

  .input-group {
    margin-top: 2%;
    margin-left: 20%;
  }

  .usernamewarning {
    margin-left: 16%;
    font-size: 10px;
    color: gray;
    float: left;
  }

  .usernamecolor {
    color: red;
  }

  .passwordcolor {
    color: red;
  }

  .phonecolor {
    color: red;
  }

  .repasswordcolor {
    color: red;
  }

  .namecolor {
    color: red;
  }

  .rightmdl {
    width: 40%;
    height: 800px;
    margin-left: 5%;


  }
  .rightmdl:before{
    content: ' ';
    width:1px;
    height:90%;
    background: #ccc;
    position: absolute;
    top:5%;
  }

  .bottom {
    height: 13%;
    width: 100%;
  }

  .form-control {
    float: left;
    width: 180px;
  }

  .input-group-addon {
    width: 130px;
    background: orange;
    color: white;
  }

  .contactcolor {
    color: red;
  }

  .mailcolor {
    color: red;
  }

  [v-cloak] {
    display: none;
  }
</style>
<script>
  import area from '../../assets/json/area.json'
  import userApi from '../../api/userService'
  function tranData (val) {
    val = val || []
    let data = []
    // 解析val对象
    for (let i = 0; i < val.length; i++) {
      let temp_data = {}
      let temp_val = val[i]
      if (typeof temp_val === 'string') {
        temp_data.value = temp_data.label = temp_val
      } else {
        if (temp_val.name) {
          temp_data.value = temp_data.label = temp_val.name
        }
        let children = tranData(temp_val.children)
        temp_data.children = children
      }
      data.push(temp_data)
    }
    return data
  }

  export default {
    name: 'regist',
    data () {
      return {
        phonewarning: '',
        usernamewarning: '',
        passwordwarning: '',
        repasswordwarning: '',
        contactwarning: '',
        namewarning: '',
        mailwarning: '',
        repassword: '',
        username: '',
        password1: '',
        phone: '',
        yzm4: '',
        dis: true,
        yzm: '获取验证码',
        isusernamecolor: false,
        ispasswordcolor: false,
        isrepasswordcolor: false,
        isnamecolor: false,
        iscontactcolor: false,
        ismailcolor: false,
        isphonecolor: false,
        grtr: false,
        grtr1: false,
        grtr2: false,
        grtr3: false,
        grtr4: false,
        grtr5: false,
        grtr6: false,
        grtr8: false,
        grtr9: false,
        grtr10: false,
        grtr11: false,
        inputyzm: '',
        val: '获取验证码',
        detailaddress1: '',
        name: '',

        contact: '',
        mail: '',
        sex: '',
        grtr7: false,
        birthdate: '',
        value1: [],
        data: tranData(area)
      }
    },
    methods: {
      losename: function () {
        if (/^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\\s]{1,20})$/.test(this.name)) {
          this.grtr3 = true
          this.namewarning = ''
        } else if (this.name.length === 0) {
          this.namewarning = ''
          this.grtr3 = false
        } else {
          this.grtr3 = false
          this.isnamecolor = true
          this.namewarning = '请输入正确的姓名'
        }
      },
      getname: function () {
        this.namewarning = ''
        this.grtr3 = false
      },
      sexchange: function () {
        if (this.sex === '男' || this.sex === '女') {
          this.grtr7 = true
        } else {
          this.grtr7 = false
        }
      },
      datechange: function () {
        if (this.birthdate.length === 0) {
          this.grtr6 = true
        } else {
          this.grtr6 = false
        }
      },
      addresschange: function () {
        if (this.value1.length === 0) {
          this.grtr11 = true
        } else {
          this.grtr11 = false
        }
      },
      getcontact: function () {
        this.contactwarning = ''
        this.grtr4 = false
      },

      losecontact: function () {
        if (/^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\s]{1,20})$/.test(this.contact)) {
          this.grtr4 = true
          this.contactwarning = ''
        } else if (this.contact.length === 0) {
          this.contactwarning = ''
          this.grtr4 = false
        } else {
          this.iscontactcolor = true
          this.contactwarning = '输入正确的联系人名字'
          this.grtr4 = false
        }
      },

      getdetailaddress: function () {
        this.grtr9 = false
      },

      losedetailaddress: function () {
        if (this.detailaddress1.length === 0) {
          this.grtr9 = false
        } else {
          this.grtr9 = true
        }
      },
      losemail: function () {
        if (/^[a-z0-9]+@\w+\.(com|cn)$/.test(this.mail)) {
          this.grtr5 = true
          this.mailwarning = ''
        } else if (this.mail.length === 0) {
          this.mailwarning = ''
          this.grtr5 = false
        } else {
          this.grtr5 = false
          this.ismailcolor = true
          this.mailwarning = '请输入正确的邮箱地址'
        }
      },
      getmail: function () {
        this.mailwarning = ''
        this.grtr5 = false
      },
    /*  loseusername: function () {
        if (this.username.length > 3 && this.username.length < 13 && /^[0-9]*$/.test(this.username) === false) {
          this.usernamewarning = ''
          this.grtr = true
        } else if (this.username.length === 0) {
          this.usernamewarning = ''
          this.grtr = false
        } else if (this.username.length > 3 && this.username.length < 13 && /^[0-9]*$/.test(this.username) === true) {
          this.isusernamecolor = true
          this.grtr = false
          this.usernamewarning = '用户名不能为纯数字，请重新输入'
        } else {
          this.isusernamecolor = true
          this.grtr = false
          this.usernamewarning = '长度只能在4-12之间'
        }
      },*/
      getusername: function () {
        this.isusernamecolor = false
        this.grtr = false
        this.usernamewarning = '支持中文、字母、数字、"-"、"_"的组合，4-12个字符'
      },
      getpassword: function () {
        this.ispasswordcolor = false
        this.grtr1 = false
        this.grtr2 = false
        this.passwordwarning = '建议使用数字、字母、符号俩种及以上的组合，6-20个字符'
      },
      losepassword: function () {
        if (this.password1.length > 5 && this.password1.length < 21) {
          if (this.password1 === this.repassword) {
            this.repasswordwarning = ''
            this.passwordwarning = ''
            this.isrepasswordcolor = true
            this.grtr1 = true
            this.grtr2 = true
          } else {
            this.repasswordwarning = ''
            this.passwordwarning = ''
            this.grtr1 = true
            this.grtr2 = false
            this.isrepasswordcolor = true
            this.repasswordwarning = '俩次密码输入不一致'
          }
        } else if (this.password1.length === 0) {
          this.passwordwarning = ''
          this.grtr1 = false
          this.isrepasswordcolor = false
        } else {
          this.ispasswordcolor = true
          this.grtr1 = false
          this.passwordwarning = '长度只能在6-20之间'
        }
      },
      loserepassword: function () {
        if (this.password1 === this.repassword && this.repassword.length !== 0) {
          this.repasswordwarning = ''
          this.isrepasswordcolor = false
          this.grtr2 = true
        } else if (this.repassword.length === 0) {
          this.repasswordwarning = ''
          this.grtr2 = false
        } else {
          this.isrepasswordcolor = true
          this.grtr2 = false
          this.repasswordwarning = '俩次密码输入不一致'
        }
      },
      getrepassword: function () {
        this.isrepasswordcolor = false
        this.grtr2 = false
        this.repasswordwarning = ''
      },
      getphone: function () {
        this.grtr8 = false
        this.phonewarning = ''
      },
      losephone: function () {
        if (/^1[34578]\d{9}$/.test(this.phone) === true) {
          this.grtr8 = true
          this.ispasswordcolor = false
          this.phonewarning = ''
          this.dis = false
        } else if (this.phone.length === 0) {
          this.dis = true
          this.phonewarning = ''
          this.ispasswordcolor = false
          this.grtr8 = false
        } else {
          this.grtr8 = false
          this.dis = true
          this.isphonecolor = true
          this.phonewarning = '请正确输入手机号码'
        }
      },
      getyzm: function () {
        let $vm = this
        if($vm.dis)return;
        $vm.dis = true;
        var a = Math.random()*900000|0+100000;
        this.yzm4 = parseInt(a)
        var num = 60
        var timer = setInterval(function () {
          num--
          if (num === 0) {
            clearInterval(timer)
            $vm.yzm = '获取验证码'
            $vm.dis = false;
          } else {
            $vm.yzm = num + '秒后重新获取'
          }
        }, 1000)
        //alert($vm.yzm4)
        userApi.sendCode($vm.phone,$vm.yzm4).then((response)=>{
          this.$Message.info('验证码已成功发送，注意查收！')
        }).catch((response)=>{
          this.$Message.error('验证码发送失败，请检查手机号！')
         })

      },
      yzmchange: function () {
        if (this.inputyzm.length > 5) {
          this.grtr10 = true
        } else {
          this.grtr10 = false
        }
      },

      regist: function () {
        if (this.name.length === 0 || this.sex.length === 0 || this.birthdate.length === 0 || this.value1.length === 0
          || this.detailaddress1.length === 0 || this.mail.length === 0 || this.password1.length === 0
          || this.repassword.length === 0 || this.phone.length === 0 || this.inputyzm.length === 0) {
          this.$Message.error('请确认信息不为空！')
        } else {
          let date = ''
          if (this.birthdate !== 0) {
            let y = this.birthdate.getFullYear()
            let m = this.birthdate.getMonth() + 1
            m = m < 10 ? ('0' + m) : m
            let d = this.birthdate.getDate()
            d = d < 10 ? ('0' + d) : d
            date = y + '-' + m + '-' + d
          }
          if(!(parseInt(this.inputyzm) === this.yzm4)){
            this.$Message.error('验证码错误！')
          }

          if (/^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\\s]{1,20})$/.test(this.name) === true
            && /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\\s]{1,20})$/.test(this.contact)
           && /^[a-z0-9]+@\w+\.(com|cn)$/.test(this.mail)
          && this.password1.length > 5 && this.password1.length < 21 && /^1[34578]\d{9}$/.test(this.phone) === true) {
            let regdata = {
              phoneNo: this.phone,
              password: this.password1,
              rName: this.name,
              rSex: this.sex,
              rBirthday: date,
              name: this.contact,
              address: this.value1 + this.detailaddress1,
              email: this.mail,
            }
            var that = this;
            userApi.regist(regdata).then((response)=>{
              this.$Message.success("注册成功！")
              that.$router.push( {path:'/login'} )
            }).catch((response)=>{
              this.$Message.error(response.message)
            })
          } else {
            this.$Message.error('请检查信息的正确性！')
          }
        }
      }
    }
  }
</script>
