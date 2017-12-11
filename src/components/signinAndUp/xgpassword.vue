<template>

<div class="xgmain">
  <div class="bar" >
    <Steps :current="current" >
      <Step title="填写账户名"></Step>
      <Step title="验证身份"></Step>
      <Step title="设置新密码"></Step>
      <Step title="完成"></Step>
    </Steps>
  </div>
  <div class="center1">
    <router-view v-on:getbar="onSelectType" />
  </div>
</div>
</template>

<style>
  .bar{
    margin-left: 10%;
  }
</style>
<script>
  import first from  "./first.vue"
  import second from  "./second.vue"
  import third from  "./third.vue"
  import forth from  "./forth.vue"
  export default {
    data () {
      return {
        current: 0,
        user : '11' ,
      }
    },
    components: {
      'first':first,
      'second': second,
      'third' : third ,
      'forth' : forth
    },
    methods: {
      onSelectType(step) {
        console.log(step)
        this.current = step

      }
    } ,
/*    components:{
      first
    }*/
  }
</script>

