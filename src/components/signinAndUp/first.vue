<template>
  <div class="main">

    <div class="modify_firstgroup" style="margin-top: 5%">
      <span class="regist_bq">手机号</span>&nbsp&nbsp
      <Input class="modify_firstinp"  v-model="username1" placeholder="请输入你的手机号码"></Input>
    </div>
    <div class="modify_firstgroup">
      <span class="regist_bq">验证码</span>&nbsp&nbsp
      <Input class="modify_firstinp"  v-model="yzm1"  placeholder="请输入验证码"></Input>
      <Button type="ghost" style="font-size:20px;width:120px;width: 100px;border: none;outline: none;" id="code"
              @click="createCode"
              class="verification1">{{checkCode}}
      </Button>
    </div>
      <Button type="info" @click="tj1" style="margin-left: 35%; font-size: 17px;width:30.5% ; margin-top: 3%;background: #6a4f90;border-color: #6a4f90;height:40px;">提交
      </Button>


    </div>


</template>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  align-items: left;
}
.modify_firstinp{
  width:25% ;
}
  .modify_firstgroup{
    width: 100%;
    margin-left:35%;
    margin-top: 2%;
  }
</style>
<script>
  import apiUser from '../../api/userService'
  export default {
    data () {
      return {
        username1: '',
        checkCode: '',
        yzm1: '',

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

        let that =this;
        if (isNull(this.username1 ) ) {
          this.$Message.error('用户名不能为空！')
          return;
        }
        if(this.yzm1 != this.checkCode){
          this.$Message.error('验证码错误！')
          return;
        }else{
          alert("11");
          this.$emit('getbar',1);
        }
       /* apiUser.getUserByPhone(this.username1).then((response)=>{

          that.$router.push({path: '/xgpassword/second',query : {rName:response.data.rName,phoneNo:response.data.phoneNo}})

        }).catch((response)=>{
          that.$Notice.error(setNoticConfig(response.message,null,null,"error"));
        })*/

      }
    }
  }
</script>
