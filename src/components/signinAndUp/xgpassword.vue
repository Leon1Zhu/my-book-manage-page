<template>

<div class="xgmain">
  <div class="bar" v-on:getbar="onSelectType">
    <Steps :current="current">
      <Step title="填写账户名"></Step>
      <Step title="验证身份"></Step>
      <Step title="设置新密码"></Step>
      <Step title="完成"></Step>
    </Steps>
  </div>
  <div class="center1">
    <router-view/>
  </div>
</div>
</template>

<style>
  .bar{
    margin-left: 10%;
  }
</style>
<script>
  export default {
    data () {
      return {
        current: 0,
        user : '11' ,
      }
    },
    methods: {
      onSelectType(step) {
       if(step === 1){
         current = 1 ;
       }else if(step === 2){
         current = 2 ;
       }else if(step === 3){
         current = 3 ;
       }
      }
    } ,
/*    components:{
      first
    }*/
  }
</script>

