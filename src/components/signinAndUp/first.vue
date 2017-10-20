<template>
  <div class="main">
    <img src="../../assets/img/second.png" style="margin-left: 25% ; margin-top: 50px">
    <br>
    <div style="margin-left: 35%; margin-top: 5%">
      <div class="inputzu1" style="margin-top: 10px">
        <span class="spa1" slot="prepend">用户名</span><input type="text" v-model="username1" class="inp1"
                                                           placeholder="输入您的用户名"/>
      </div>
      <div class="inputzu1" style="margin-top: 10px">
        <span class="spa1" slot="prepend">验证码</span><input type="text" style="width: 110px;" v-model="yzm1"
                                                           class="inp1"
                                                           placeholder="输入验证码"/>
        <Button type="ghost" style="font-size:20px;width:120px;width: 100px;border: none;outline: none;" id="code"
                @click="createCode"
                class="verification1">{{checkCode}}
        </Button>
      </div>
      <Button type="ghost" @click="tj1" style="margin-left:10%; width: 20% ; margin-top: 5%">提交
      </Button>


    </div>
  </div>


</template>

<style scoped>
  .main {
    width: 1350px;
    height: 650px;
    MARGIN-RIGHT: auto;
    MARGIN-LEFT: auto;
  }

  .spa1 {
    font-family: "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
    font-size: 15px;
    margin-left: 10px;
    float: left;
    margin-top: 13px;
    width: 50px;

  }

  .inp1 {
    width: 50%;
    border: none;
    height: 50px;
    outline: none;
    margin-left: 40px;

  }

  .btn2 {
    height: 40px;

  }

  .inputzu1 {
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
        username1: '',
        checkCode: '',
        yzm1: ''

      }
    },
    created () {
      this.createCode();
    },
    methods: {
      createCode: function () {
        var code = ''
        var codeLength = 4// 验证码的长度
        var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
          's', 't', 'u', 'v', 'w', 'x', 'y', 'z')// 随机数
        for (var i = 0; i < codeLength; i++) {
          // 循环操作
          var index = Math.floor(Math.random() * 36)// 取得随机数的索引（0~35）
          code += random[index]// 根据索引取得随机数加到code上
        }
        this.checkCode = code// 把code值赋给验证码
      },
      tj1: function () {
        if (this.username1 != 1 && this.yzm1 == this.checkCode) {
          this.$router.push({path: '/xgpassword/second'})
        } else if (this.username1 == 1) {
          this.$Message.error('不存在该用户')
        } else if (this.username1 != 1 || this.yzm1 != this.checkCode) {
          this.$Message.error({
            content: '验证码输入错误'
          })
        }
      }
    }
  }
</script>
