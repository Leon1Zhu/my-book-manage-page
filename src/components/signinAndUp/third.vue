<template>
  <div class="main">
    <div class="modify_thirdgroup" style="margin-top: 5%">
      <span class="regist_bq">新&nbsp&nbsp密&nbsp&nbsp码</span>&nbsp&nbsp&nbsp&nbsp&nbsp
      <Input class="modify_thirdinp"   type="password" v-model="password2" @on-blur="losepassword2"
            @on-focus="getpassword2" placeholder="请输入你的手机号码"></Input>
    </div>
    <p class="usernamewarning1" v-bind:class="{passwordcolor1:ispasswordcolor1}">{{passwordwarning1}}</p>
    <div class="modify_thirdgroup">
      <span class="regist_bq">重复新密码</span>&nbsp&nbsp
      <Input class="modify_thirdinp"  type="password" v-model="repassword2" @on-blur="loserepassword3" @on-focus="getrepassword3" placeholder="请输入验证码"></Input>
    </div>
    <p class="usernamewarning1" v-bind:class="{repasswordcolor1:isrepasswordcolor1}">{{repasswordwarning1}}</p>

    <Button type="info" @click="tj3" style="margin-left: 35%; font-size: 17px;width:33.5% ; margin-top:3%;background: #6a4f90;border-color: #6a4f90;height:40px;">提交
    </Button>

  </div>
</template>
<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
  }
  .modify_thirdinp{
    width: 25%;
  }
  .modify_thirdgroup{
    margin-left: 35%;
    margin-top: 2%;
    width: 100%;
  }
  .repasswordcolor1 {
    color: red;
  }

  .passwordcolor1 {
    color: red;
  }
  .usernamewarning1{
    margin-left: 43.5%;
    font-size: 10px;
    margin-top: 0.5%;
  }

  .inputzu3 {
    background: #ffffff;
    width: 40%;
    heigth: 50px;
    margin-top: 10%;
    border: 1px solid #f6f6f6;
    box-shadow: 5px 5px 5px #f6f6f6;

  }
</style>
<script>
  import apiUser from '../../api/userService'
  export default {
    data () {
      return {
        passwordwarning1: '',
        repasswordwarning1: '',
        isrepasswordcolor1: false,
        ispasswordcolor1: false,
        password2: '',
        repassword2: '',
        phone:null,
      }
    },
    created(){
        let vm = this;
        vm.phone = this.$route.query.phone
      this.$emit('getbar',2);
    },
    methods: {
      getpassword2: function () {
        this.ispasswordcolor1 = false
        this.grtr12 = false
        this.grtr13 = false
        this.passwordwarning1 = '建议使用数字、字母、符号俩种及以上的组合，6-20个字符'
      },
      losepassword2: function () {
        if (this.password2.length > 5 && this.password2.length < 21) {
          if (this.password2 === this.repassword2) {
            this.repasswordwarning1 = ''
            this.passwordwarning1 = ''
            this.isrepasswordcolor1 = true
          } else if (this.password2.length > 5 && this.password2.length < 21 && this.repassword2.length === 0) {
            this.repasswordwarning1 = ''
            this.passwordwarning1 = ''
            this.isrepasswordcolor1 = true
          } else {
            this.passwordwarning1 = ''
            this.isrepasswordcolor1 = true
            this.repasswordwarning1 = '俩次密码输入不一致'
          }
        } else if (this.password2.length === 0) {
          this.passwordwarning1 = ''
          this.isrepasswordcolor1 = false
        } else {
          this.ispasswordcolor1 = true
          this.passwordwarning1 = '长度只能在6-20之间'
        }
      },
      loserepassword3: function () {
        if (this.password2 === this.repassword2 && this.repassword2.length !== 0) {
          this.repasswordwarning1 = ''
          this.isrepasswordcolor1 = false
        } else if (this.repassword2.length === 0) {
          this.repasswordwarning1 = ''
        } else {
          this.isrepasswordcolor1 = true
          this.repasswordwarning1 = '俩次密码输入不一致'
        }
      },
      getrepassword3: function () {
        this.isrepasswordcolor1 = false
        this.repasswordwarning1 = ''
      },
      tj3: function () {
        if (this.password2.length > 5 && this.password2.length < 13 && this.password2 === this.repassword2) {
            apiUser.changePassword(this.phone,this.password2).then((response)=>{
              this.$emit('getbar' , 3)
              this.$router.push({path: '/xgpassword/forth'})
            }).catch((response)=>{
              this.$Message.error(response.data.message)
            })

        } else if (this.password2.length < 6 || this.password2.length > 12) {
          this.$Message.error('密码设置的长度不符合要求')
        } else {
          this.$Message.error('俩次密码不一致')
        }
      }
    }
  }
</script>
