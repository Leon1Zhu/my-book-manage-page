<template>
  <div class="center">
    <div class="inputgroup">
      <span class="regist_bq">读者姓名</span>
      <Input class="regist_inp" v-model="name"  @on-blur="losename"  @on-focus="getname" placeholder="请输入姓名"/>&nbsp&nbsp
      <img class="greenarrow" src="../../assets/img/greenarrow.png" v-if="grtr3"   />
    </div>
    <p class="regist_warning" v-bind:class="{namecolor:isnamecolor}">{{namewarning}}</p>
    <div class="inputgroup">
      <span class="regist_bq" >性&nbsp&nbsp&nbsp&nbsp&nbsp别</span>
      <RadioGroup style="width: 300px ;margin-top: 1.2% " v-model="sex" @on-change="sexchange">
        <Radio label="男"></Radio>
        <Radio label="女"></Radio>
      </RadioGroup>&nbsp&nbsp
<!--      <img class="greenarrow" src="../../assets/img/greenarrow.png" v-if="grtr7"   />-->
    </div>
    <div class="inputgroup">
      <span class="regist_bq">生&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp日</span>
      <DatePicker format="yyyy年MM月dd" class="regist_spe" value="new data()" @on-clear="cleardate " v-model="birthdate" @on-change="datechange"
                  type="date"
                  placeholder="选择日期"></DatePicker>&nbsp&nbsp
<!--      <img class="greenarrow" src="../../assets/img/greenarrow.png" v-if="grtr6"   />-->
    </div>

    <div class="inputgroup">
      <span class="regist_bq">联&nbsp系&nbsp人</span>
      <Input class="regist_inp" v-model="contact" @on-blur="losecontact" @on-focus="getcontact" placeholder="请输入联系人"></Input>&nbsp&nbsp
      <img class="greenarrow" src="../../assets/img/greenarrow.png" v-if="grtr4"   />
    </div>
   <!-- <p class="regist_warning" v-bind:class="{contactcolor:iscontactcolor}">{{contactwarning}}</p>-->
    <div class="inputgroup">
      <span class="regist_bq">学&nbsp&nbsp&nbsp&nbsp&nbsp校</span>
      <Input class="regist_inp" v-model="school"  @on-blur="loseschool" @on-focus="getschool"  placeholder="输入你所在学校"></Input>&nbsp&nbsp
      <img class="greenarrow" src="../../assets/img/greenarrow.png" v-if="grtr15"   />
    </div>
    <div class="inputgroup">
      <span class="regist_bq">所在年级</span>
      <Select v-model="grade" @on-change="gradechange"   style="width:300px">
      <Option   v-for="item in gradeList"   :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>&nbsp&nbsp
<!--      <img class="greenarrow" src="../../assets/img/greenarrow.png" v-if="grtr16"   />-->
    </div>
    <div class="inputgroup">
      <span class="regist_bq">联系地址</span>
      <Cascader class="regist_spe" :data="data" @on-change="addresschange" @on-query-change="addresschanged" v-model="value1"></Cascader>&nbsp&nbsp

     <!-- <img class="greenarrow" src="../../assets/img/greenarrow.png" v-if="grtr11"   />-->
    </div>
<!--    <p class="regist_warning" v-bind:class="{contactcolor:iscontactcolor}">{{contactwarning}}</p>-->
    <div class="inputgroup">
      <span class="regist_bq">详细地址</span>
      <Input class="regist_inp" v-model="detailaddress1" @on-blur="losedetailaddress" @on-focus="getdetailaddress" placeholder="请输入详细地址"></Input>&nbsp&nbsp
      <img class="greenarrow" src="../../assets/img/greenarrow.png"  v-if="grtr9" />
    </div>
    <div class="inputgroup">
      <span class="regist_bq">邮箱地址</span>
      <Input class="regist_inp"  v-model="mail"  @on-blur="losemail" @on-focus="getmail" placeholder="请输入邮箱地址"></Input>&nbsp&nbsp
      <img class="greenarrow" src="../../assets/img/greenarrow.png"   v-if="grtr5"/>
    </div>
    <p class="regist_warning" v-bind:class="{mailcolor:ismailcolor}">{{mailwarning}}</p>
    <div class="inputgroup">
      <span class="regist_bq">昵称</span>
      <Input class="regist_inp" type="text" v-model="neckname"  placeholder="输入你的昵称"></Input>&nbsp&nbsp

    </div>
    <div class="inputgroup">
      <span class="regist_bq">密&nbsp&nbsp&nbsp&nbsp&nbsp码</span>
      <Input class="regist_inp" type="password" v-model="password1" @on-blur="losepassword" @on-focus="getpassword" placeholder="输入密码"></Input>&nbsp&nbsp
      <img class="greenarrow" src="../../assets/img/greenarrow.png" v-if="grtr1"  />
    </div>
    <p class="regist_warning" v-bind:class="{passwordcolor:ispasswordcolor}">{{passwordwarning}}</p>

    <div class="inputgroup">
      <span class="regist_bq">重复密码</span>
      <Input class="regist_inp" type="password" v-model="repassword" @on-blur="loserepassword" @on-focus="getrepassword" placeholder="密码确认"></Input>&nbsp&nbsp
      <img class="greenarrow" src="../../assets/img/greenarrow.png"  v-if="grtr2"   />
    </div>
    <p class="regist_warning" v-bind:class="{repasswordcolor:isrepasswordcolor}">{{repasswordwarning}}</p>
    <div class="inputgroup">
      <span class="regist_bq">手&nbsp机&nbsp号</span>
      <Input class="regist_inp"  v-model="phone" @on-blur="losephone" @on-focus="getphone" placeholder="请输入你的手机号码"></Input>&nbsp&nbsp
      <img class="greenarrow" src="../../assets/img/greenarrow.png"   v-if="grtr8" />
    </div>
    <p class="regist_warning" v-bind:class="{phonecolor:isphonecolor}">{{phonewarning}}</p>
    <div class="inputgroup">
      <span class="regist_bq">验&nbsp证&nbsp码</span>
      <Input class="regist_inp" maxlength=6   style="width:180px;" v-model="inputyzm"  v-on:change="yzmchange" placeholder="验证码"></Input>&nbsp&nbsp
      <Button class="yzm_btn" type="ghost"   v-bind:disabled="dis" v-on:click="getyzm">
        {{yzm}}
      </Button>
      <hidden v-model="yzm4"></hidden>
      <img class="greenarrow" src="../../assets/img/greenarrow.png" v-if="grtr10"  />
    </div>
    <Button type="info" v-on:click="regist"
            style=" background: #6a4f90; height:40px; color: white; border-color: #6a4f90;margin: 0 auto;margin-top: 10px;margin-left: 38%;width: 300px;font-size: 15px;">
      注册
    </Button>


  </div>
</template>
<style>
  .center {
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  .inputgroup {
    display: flex;
    margin-top: 1%;
    padding-left: 35%;

  }

  .regist_bq {
    width: 80px;
    line-height: 30px;

  }

  .regist_inp {
    width: 300px;
  }
  .regist_spe{
    width:300px ;
  }
  .greenarrow{
    width:20px ;
    height: 20px ;
    margin-top: 0.5%;
  }
  .regist_warning{
    width: 280px;
    font-size: 10px;
    color: gray;
    margin-top: 0.5%;
    margin-left: 42.5%;
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
  .contactcolor {
    color: red;
  }

  .mailcolor {
    color: red;
  }
  .yzm_btn{
    width:110px ;
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
    name: 'regist1',
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
        school:'',
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
        grtr15: false,
        grtr16:false,
        inputyzm: '',
        val: '获取验证码',
        detailaddress1: '',
        name: '',
        grade:'',
        contact: '',
        mail: '',
        sex: '',
        grtr7: false,
        birthdate: '',
        neckname: '' ,
        value1: [],
        data: tranData(area) ,
        gradeList:GRADELIST,
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
        if (this.birthdate==="") {
          this.grtr6 = false
        } else {
          this.grtr6 = true
        }
      },
      addresschange: function () {
        if(this.value1===""){
          this.grtr11 = false
        } else{
          this.grtr11 = true
        }
      },
      addresschanged: function () {
        this.grtr11 = true ;
      } ,

     /* gradechanged: function () {
        this.grtr16 = true ;
      } ,*/
     gradechange: function () {
        if (this.grade === "") {
          this.grtr16 = false
        } else  {
          this.grtr16 = true
        }
      },
      cleardate:function () {
        this.grtr6 = false ;
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
        if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.mail)) {
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
          } else if( this.repassword.length !==0 ){
            this.repasswordwarning = ''
            this.passwordwarning = ''
            this.grtr1 = true
            this.grtr2 = false
            this.isrepasswordcolor = true
            this.repasswordwarning = '两次密码输入不一致'
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
          this.repasswordwarning = '两次密码输入不一致'
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
        if (/^1[34578]\d{9}$/.test(this.phone)) {
          if(this.yzm==="获取验证码"){
            this.grtr8 = true
            this.ispasswordcolor = false
            this.phonewarning = ''
            this.dis = false
          }else{
           this.dis=true
          }

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
        /*alert($vm.yzm4)*/
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
      getschool: function(){
        this.grtr15 = false;

      },
      loseschool: function () {
        if(this.school !== ""){
          this.grtr15 = true ;
        }else {
          this.grtr15 = false;
        }
      },

      regist: function () {
   /*     alert(this.yzm4) ;*/
       /* alert(this.name+this.birthdate+this.contact+this.grade+this.school+this.phone+this.password+this.yzm3) ;*/
        if (this.phone.length ===0||this.neckname.length ===0||this.password1.length ===0||this.repassword.length === 0/*this.name.length === 0 || this.sex.length === 0 || this.birthdate.length === 0 || this.value1.length === 0
          || this.detailaddress1.length === 0 || this.mail.length === 0 || this.password1.length === 0
          || this.repassword.length === 0 || this.phone.length === 0 || this.inputyzm.length === 0|| this.school.length === 0 || this.grade.length === 0*/) {
          this.$Notice.error({ title: '昵称、密码、重复密码、手机号为必填项'}) ;
        }else if(this.inputyzm.length===0){
          this.$Notice.error({ title: '手机验证码不能为空'}) ;
        } else if((parseInt(this.inputyzm)) !== this.yzm4){
          this.$Notice.error({ title: '验证码输入错误'}) ;
        }else if(/^1[34578]\d{9}$/.test(this.phone)===false){
          this.$Notice.error({ title: '手机号是否有误'}) ;
        }else if(this.password1.length<5&&this.password1.length>21){
          this.$Notice.error({ title: '密码长度不在6-20范围内'}) ;
        }else if(this.repassword !== this.password1){
          this.$Notice.error({ title: '两次密码不同'}) ;
        }/*else {
         */
          else if (this.mail.length === 0 || /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.mail)===true/*&& (this.password1.length === 0
              ||(this.password1.length>5&&this.password1<21))&& (this.repassword===this.password1)  && /^1[34578]\d{9}$/.test(this.phone) === true&&this.inputyzm === this.yzm4*/) {
            if(this.name.length === 0 ||/^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\s]{1,20})$/.test(this.name)) {
                  if (this.birthdate.length !== 0) {
                    let date = ''
                    let y = this.birthdate.getFullYear()
                    let m = this.birthdate.getMonth() + 1
                    m = m < 10 ? ('0' + m) : m
                    let d = this.birthdate.getDate()
                    d = d < 10 ? ('0' + d) : d
                    date = y + '-' + m + '-' + d
                    let regdata = {
                      phoneNo: this.phone,
                      password: this.password1,
                      rName: this.name,
                      rSex: this.sex,
                      rBirthday: date,
                      name: this.contact,
                      address: this.value1 + this.detailaddress1,
                      email: this.mail,
                      school: this.school,
                      grade: this.grade,
                      name: this.neckname
                    }
                    var that = this;
                    userApi.regist(regdata).then((response) => {
                      this.$Notice.success({title: '注册成功'});
                      that.$router.push({path: '/login'})
                    }).catch((response) => {
                      this.$Notice.error({ title: response.message}) ;
                    })
                  } else {
                    let regdata = {
                      phoneNo: this.phone,
                      password: this.password1,
                      rName: this.name,
                      rSex: this.sex,
                      rBirthday: this.birthdate,
                      name: this.contact,
                      address: this.value1 + this.detailaddress1,
                      email: this.mail,
                      school: this.school,
                      grade: this.grade,
                    }
                    var that = this;
                    userApi.regist(regdata).then((response) => {
                      this.$Notice.success({title: '注册成功'});
                      that.$router.push({path: '/login1'})
                    }).catch((response) => {
                      this.$Notice.error({ title: response.message}) ;
                    })
                  }




            }else{
              this.$Notice.error({title: '请输入正确的姓名'});
            }
        }else {
              this.$Notice.error({ title: '邮箱输入错误'}) ;
            }
          }


        }
/*      }*/
  }
/*  /!* *!/if (this.birthdate !== 0) {
    let date = ''
    let y = this.birthdate.getFullYear()
    let m = this.birthdate.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    let d = this.birthdate.getDate()
    d = d < 10 ? ('0' + d) : d
    date = y + '-' + m + '-' + d
  }*/
</script>
