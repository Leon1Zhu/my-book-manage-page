<template>
  <div class="main">
    <img src="../../assets/img/forth.png" style="margin-left: 20% ; margin-top: 54px">
    <div class="nr">
      <img src="../../assets/img/greendraw.jpg" class="lsg">
      <div class="wzzu">
        <span class="wz">设置密码成功！</span><br>
        <span class="wz1">请牢记你新设置的密码</span>
      </div>


    </div>
  </div>
</template>
<style>
  .lsg{
    margin-left: 33%;
    margin-top:5%;
    width: 60px ;
    height: 60px ;
    float: left;

  }
  .wz{

    font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
    font-size: 20px;
    margin-top: 10%;
    margin-left: 30px;
    color: green;
  }
  .wz1{

    font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
    font-size: 20px;
    margin-top: 10%;
    margin-left: 30px;

  }
  .nr{
    height:200px;
  }
  .wzzu{
    float: left;
    margin-top: 5%;
  }
</style>
<script>
  export default {
    data () {
      return {
        username1: '',
        checkCode: ''

      }
    },
    methods: {
    }
  }
</script>
