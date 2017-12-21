<template>
    <div class="regist_sec_main">
        <div class="inputgroup">
          <span class="regist_bq">昵称</span>
          <Input class="regist_inp" v-model="neckname"  @on-blur="loseneckname"  @on-focus="getneckname" />&nbsp&nbsp
<!--          <img class="greenarrow" src="../../assets/img/greenarrow.png" v-if="grtr"   />-->
        </div>
      <p class="regist_warning" v-bind:class="{usernamecolor:isusernamecolor}">{{usernamewarning}}</p>
      <div class="inputgroup">
        <span class="regist_bq">手机号</span>
        <Input class="regist_inp" v-model="phone2" disabled />&nbsp&nbsp
      </div>

      <div class="inputgroup">
        <span class="regist_bq">真实姓名</span>
        <Input class="regist_inp" v-model="name"  @on-blur="losename"  @on-focus="getname" placeholder="请输入姓名"/>&nbsp&nbsp
<!--        <img class="greenarrow" src="../../assets/img/greenarrow.png" v-if="grtr3"   />-->
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
        <DatePicker format="yyyy年MM月dd" class="regist_spe" :value="birthdate" @on-clear="cleardate " v-model="birthdate"  @on-change="datechange"
                    type="date"
                    placeholder="选择日期"></DatePicker>&nbsp&nbsp
        <!--      <img class="greenarrow" src="../../assets/img/greenarrow.png" v-if="grtr6"   />-->
      </div>

<!--      <div class="inputgroup">
        <span class="regist_bq">联&nbsp系&nbsp人</span>
        <Input class="regist_inp" v-model="contact" @on-blur="losecontact" @on-focus="getcontact" placeholder="请输入联系人"></Input>&nbsp&nbsp
        <img class="greenarrow" src="../../assets/img/greenarrow.png" v-if="grtr4"   />
      </div>
      <p class="regist_warning" v-bind:class="{contactcolor:iscontactcolor}">{{contactwarning}}</p>-->
      <div class="inputgroup">
        <span class="regist_bq">学&nbsp&nbsp&nbsp&nbsp&nbsp校</span>
        <Input class="regist_inp" v-model="school"  @on-blur="loseschool" @on-focus="getschool"  placeholder="输入你所在学校"></Input>&nbsp&nbsp
<!--        <img class="greenarrow" src="../../assets/img/greenarrow.png" v-if="grtr15"   />-->
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
<!--        <img class="greenarrow" src="../../assets/img/greenarrow.png"  v-if="grtr9" />-->
      </div>
      <div class="inputgroup">
        <span class="regist_bq">邮箱地址</span>
        <Input class="regist_inp"  v-model="mail"  @on-blur="losemail" @on-focus="getmail" placeholder="请输入邮箱地址"></Input>&nbsp&nbsp
<!--        <img class="greenarrow" src="../../assets/img/greenarrow.png"   v-if="grtr5"/>-->
      </div>
      <p class="regist_warning" v-bind:class="{mailcolor:ismailcolor}">{{mailwarning}}</p>
      <Button type="info" v-on:click="info_wc"
              style=" background: #6a4f90; height:40px; color: white; border-color: #6a4f90;margin: 0 auto;margin-top: 2%;margin-left: 38%;width: 300px;font-size: 15px;">
        提交
      </Button>
    </div>
</template>

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
        name: "regist_sec" ,
      data () {
        return {
          phone2:'',
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
          grtr: true,
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
      created(){
        this.neckname = USERINFO.name
        this.name = USERINFO.rName
        this.sex = USERINFO.rSex === '1' ? '女':'男';
        this.birthdate = new Date(USERINFO.rBirthday).Format('yyyy-MM-dd');
        this.school = USERINFO.school
        this.value1 = USERINFO.address.split(',')
        this.detailaddress1 = USERINFO.detailAdressint
        this.mail = USERINFO.email;
        this.phone2 = USERINFO.phoneNo
        this.grade = USERINFO.grade
      },
      methods: {
        loseneckname: function () {
          if(this.neckname.length === 0){
            this.usernamewarning = ''
          }else if(this.neckname.length<2||this.neckname.length>12){
            this.usernamewarning = '昵称长度不在2-12范围内'
            this.isusernamecolor = true
          }else if(this.neckname.length>1&&this.neckname.length<13){
/*            this.grtr = true ;*/
            this.isusernamecolor = false
            this.usernamewarning=''

          }
        },
        getneckname: function () {
          this.isusernamecolor = false
/*          this.grtr = false*/
          this.usernamewarning = '支持中文、字母、数字、"-"、"_"的组合，2-12个字符'
        },
        losename: function () {
          if (/^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\\s]{1,20})$/.test(this.name)) {
/*            this.grtr3 = true*/
            this.namewarning = ''
          } else if (this.name.length === 0) {
            this.namewarning = ''
/*            this.grtr3 = false*/
          } else {
/*            this.grtr3 = false*/
            this.isnamecolor = true
            this.namewarning = '请输入正确的姓名'
          }
        },
        getname: function () {
          this.namewarning = ''
/*          this.grtr3 = false*/
        },
        sexchange: function () {
          if (this.sex === '男' || this.sex === '女') {
/*            this.grtr7 = true*/
          } else {
/*            this.grtr7 = false*/
          }
        },
        datechange: function () {
          if (this.birthdate === "") {
/*            this.grtr6 = false*/
          } else {
/*            this.grtr6 = true*/
          }
        },
        addresschange: function () {
          if (this.value1 === "") {
/*            this.grtr11 = false*/
          } else {
/*            this.grtr11 = true*/
          }
        },
        addresschanged: function () {
/*          this.grtr11 = true;*/
        },

        /* gradechanged: function () {
           this.grtr16 = true ;
         } ,*/
        gradechange: function () {
          if (this.grade === "") {
/*            this.grtr16 = false*/
          } else {
/*            this.grtr16 = true*/
          }
        },
        cleardate: function () {
/*          this.grtr6 = false;*/
        },
        getcontact: function () {
          this.contactwarning = ''
/*          this.grtr4 = false*/
        },

        losecontact: function () {
          if (/^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\s]{1,20})$/.test(this.contact)) {
/*            this.grtr4 = true*/
            this.contactwarning = ''
          } else if (this.contact.length === 0) {
            this.contactwarning = ''
/*            this.grtr4 = false*/
          } else {
            this.iscontactcolor = true
            this.contactwarning = '输入正确的联系人名字'
/*            this.grtr4 = false*/
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
        info_wc : function() {
          if(this.neckname.length===0){
            this.$Notice.error({title: '昵称不能为空'});
          }else if(this.neckname.length<2||this.neckname.length>12){
            this.$Notice.error({title: '昵称长度不在4-12范围内'});
          } else if (this.name.length === 0) {
            this.$Notice.error({title: '姓名不能为空'});
          } else if (/^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\s]{1,20})$/.test(this.name) === false) {
            this.$Notice.error({title: '请填写正确的姓名'});
          } else if (this.sex === "") {
            this.$Notice.error({title: '性别不能为空'});
          } else if (this.birthdate === "") {
            this.$Notice.error({title: '出生日期不能为空'});
          } else if (this.school.length === 0) {
            this.$Notice.error({title: '学校不能为空'});
          } else if (this.grade === "") {
            this.$Notice.error({title: '所在年级不能为空'});
          } else if (this.value1 === "") {
            this.$Notice.error({title: '联系地址不能为空'});
          } else if (this.detailaddress1 === "") {
            this.$Notice.error({title: '详细地址不能为空'});
          } else if (this.mail.length === 0) {
            this.$Notice.error({title: '邮箱地址不能为空'});
          } else if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.mail) === false) {
            this.$Notice.error({title: '邮箱地址填写错误'});
          }else{
        /*    let date = ''
            console.log(this.birthdate)
            let y = this.birthdate.getFullYear()
            let m = this.birthdate.getMonth() + 1
            m = m < 10 ? ('0' + m) : m
            let d = this.birthdate.getDate()
            d = d < 10 ? ('0' + d) : d
            date = y + '-' + m + '-' + d*/
            let sex = '' ;
            if(this.sex === '男'){
               sex = 0 ;
            }else if(this.sex ==='女'){
               sex = 1 ;
            }
            let regdata1 = {
              id:USERINFO.id,
              name: this.neckname,
              rName: this.name,
              rSex: sex,
              rBirthday : this.birthdate,
              school : this.school,
              grade : this.grade,
              address: this.value1.join(','),
              detailAdressint: this.detailaddress1,
              email : this.mail,
              phoneNo:this.phone2,
            }
            userApi.ChangeInfo(regdata1).then((response) =>{
              this.$Notice.success({title: '修改成功！'});
              this.$router.push({path: '/'})
              response.data.password=null;
              setUserInfo( response.data,response.data.orderInfo,response.data.saveInfos)
              setRAHBook(response.data)
            }).catch((response) =>{

            })
          }
        }
      }
    }
</script>

<style scoped>
  .regist_sec_main{
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
    margin-top: 1%;
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
