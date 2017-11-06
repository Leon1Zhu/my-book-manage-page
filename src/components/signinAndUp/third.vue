<template>
  <div class="main">
    <img src="../../assets/img/third.png" style="margin-left: 25% ; margin-top: 46.4px">
    <br>
    <div style="margin-left: 35%; margin-top: 5%">
      <div class="inputzu3" style="margin-top: 10px">
        <span class="spa3" slot="prepend">新密码</span><input type="password" v-model="password2" v-on:blur="losepassword2"
                                                           v-on:focus="getpassword2" class="inp3"
                                                           placeholder="请输入新密码"/>
      </div>
      <p class="usernamewarning1" v-bind:class="{passwordcolor1:ispasswordcolor1}">{{passwordwarning1}}</p>
      <div class="inputzu3" style="margin-top: 10px">
        <span class="spa3" slot="prepend">重复新密码</span><input type="password" v-model="repassword2"
                                                             v-on:blur="loserepassword3" v-on:focus="getrepassword3"
                                                             class="inp3"
                                                             placeholder="请再次新密码"/>
      </div>
      <p class="usernamewarning1" v-bind:class="{repasswordcolor1:isrepasswordcolor1}">{{repasswordwarning1}}</p>
      <Button type="ghost" @click="tj3" style="margin-left:10%; width: 20% ; margin-top: 5%">提交</Button>

    </div>

  </div>
</template>
<style>
  .main {
    width: 1350px;
    height: 650px;
    MARGIN-RIGHT: auto;
    MARGIN-LEFT: auto;
  }

  .spa3 {
    font-family: "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
    font-size: 15px;
    margin-left: 10px;
    float: left;
    margin-top: 13px;
    width: 80px;

  }

  .inp3 {
    width: 50%;
    border: none;
    height: 50px;
    outline: none;
    margin-left: 40px;

  }

  .btn {
    height: 40px;
    width: 100px;
    border: none;
    outline: none;
  }

  .repasswordcolor1 {
    color: red;
  }

  .passwordcolor1 {
    color: red;
  }

  .inputzu3 {
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
        vm.phone = this.$route.params.phone
    },
    methods: {
      getpassword2: function () {
        this.ispasswordcolor1 = false
        this.grtr12 = false
        this.grtr13 = false
        this.passwordwarning1 = '建议使用数字、字母、符号俩种及以上的组合，6-12个字符'
      },
      losepassword2: function () {
        if (this.password2.length > 5 && this.password2.length < 13) {
          if (this.password2 === this.repassword2) {
            this.repasswordwarning1 = ''
            this.passwordwarning1 = ''
            this.isrepasswordcolor1 = true
          } else if (this.password2.length > 5 && this.password2.length < 13 && this.repassword2.length === 0) {
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
          this.passwordwarning1 = '长度只能在6-12之间'
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
            apiUser.changePassword(phone).then((response)=>{
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
