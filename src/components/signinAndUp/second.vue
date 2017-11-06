<template>
  <div class="main">
    <img src="../../assets/img/first.png" style="margin-left: 25% ; margin-top: 51px">
    <br>
    <div style="margin-left: 35%; margin-top: 5%">
      <div class="inputzu2" style="margin-top: 10px">
        <span class="spa2" slot="prepend">姓名</span><input type="text" readonly="readonly" class="inp2"
                                                          v-model="name" />
      </div>
      <div class="inputzu2" style="margin-top: 10px">
        <span class="spa2" slot="prepend">手机</span><input type="text" readonly="readonly" class="inp2"
                                                         v-model="phone1" value="18752001826"/>
      </div>
      <div class="inputzu2" style="margin-top: 10px">
        <span class="spa2" slot="prepend">验&nbsp证&nbsp码</span>
        <input type="text" style="width:120px;" v-model="yzm2" class="inp2"
               placeholder="输入验证码"/>
        <Button class="btn" type="ghost" style="width:120px" v-model="yzm3" v-bind:disabled="dis1" v-on:click="getyzm1">{{yzm}}
        </Button>
        </Input>

      </div>
      <Button type="ghost" @click='tj2' style="margin-left:10%; width: 20% ; margin-top: 5%">提交</Button>
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

  .spa2 {
    font-family: "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
    font-size: 15px;
    margin-left: 10px;
    float: left;
    margin-top: 13px;
    width: 50px;

  }

  .inp2 {
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

  .inputzu2 {
    width: 40%;
    heigth: 50px;
    margin-top: 10%;
    border: 1px solid #f6f6f6;
    box-shadow: 5px 5px 5px #f6f6f6;

  }
</style>
<script>
  export default {
    data () {
      return {
        name:null,
        yzm2: '',
        yzm3: '',
        dis1: false,
        yzm: '获取验证码',
        phone1: null
      }
    },
    created(){
       let vm = this;

       vm.phone1 = vm.$route.query.phoneNo
      vm.name = vm.$route.query.rName
    },
    methods: {
      getyzm1: function () {
        var a = Math.random()*900000|0+100000;
        this.yzm3 = parseInt(a)
        alert(this.yzm3)
        var num = 60
        let $vm = this
        var timer = setInterval(function () {
          num--
          if (num === 0) {
            clearInterval(timer)
            $vm.yzm = '获取验证码'
            $vm.dis1 = false
          } else {
            $vm.yzm = num + '秒后重新获取'
            $vm.dis1 = true
          }
        }, 1000)
        /*this.$http.post('' , phone1 , yzm3)*/
      },
      tj2: function () {
        if (parseInt(this.yzm2) === this.yzm3 && this.yzm2.length !== 0) {
          this.$router.push({path: '/xgpassword/third',query:{phone:this.phone1}})
        } else if (this.yzm2.length === 0 && this.yzm3.length === 0) {
          this.$Message.error('请先获取验证码')
        } else {
          this.$Message.error('验证码输入错误')
        }
      }

    }
  }
</script>
