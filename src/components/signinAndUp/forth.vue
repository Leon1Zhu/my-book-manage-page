<template>
  <div class="forthmain">
      <img src="../../assets/img/success1.png" class="lsg">
      <div class="wzzu">
        <span class="wz">设置密码成功！</span><br>
        <span class="wz1">请牢记你新设置的密码</span>


    </div>
    </div>
</template>
<style>
  .forthmain{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .lsg{

    width: 60px ;
    height: 60px ;
    margin-left: 42%;
    margin-top: 10%;
  }
  .wzzu{

    font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
    font-size: 20px;
    color: green;
    margin-right: 32%;
    margin-top: 10%;
  }
  .wz1{

    font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
    font-size: 20px;

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
