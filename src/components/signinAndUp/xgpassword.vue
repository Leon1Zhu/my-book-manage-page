<template>

<div class="xgmain">
  <div class="bar" >
    <Steps :current="current"  style="margin-top: 4%;">
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
  .xgmain .ivu-steps .ivu-steps-head, .xgmain .ivu-steps-item.ivu-steps-status-process .ivu-steps-title , .xgmain .ivu-steps-item.ivu-steps-status-finish .ivu-steps-title,.xgmain .ivu-steps-item.ivu-steps-status-wait .ivu-steps-title{
    background: #efefef;
  }

  .xgmain  .ivu-steps-item.ivu-steps-status-finish .ivu-steps-head-inner span, .ivu-steps-item.ivu-steps-status-finish .ivu-steps-head-inner>.ivu-steps-icon {
    color: #6a518e;
  }

  .xgmain  .ivu-steps-item.ivu-steps-status-finish .ivu-steps-head-inner {
    background-color: #fff;
    border-color: #6a518e;
  }
  .xgmain  .ivu-steps-item.ivu-steps-status-finish .ivu-steps-tail>i:after,.xgmain  .ivu-steps-item.ivu-steps-status-process .ivu-steps-head-inner{
    background: #6a518e;
    border-color: #6a518e;
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
        current: CURRENTGL,
        user : '' ,
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
        this.current = step
        setCurrent(step)

      }
    } ,
/*    components:{
      first
    }*/
  }
</script>

