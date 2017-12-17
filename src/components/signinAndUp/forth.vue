<template >
  <div class="forthmain" >
      <img src="../../assets/img/success1.png" class="lsg">
      <div class="wzzu">
        <span class="wz">设置密码成功！</span><br>
        <span class="wz1">请牢记你新设置的密码</span>&nbsp&nbsp
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
  window.load = function () {
    let time = 3 ;
    setInterval( () => {//es6中这个this指向的是这些方法，若setInterval(function(){ this.getData(today)})中的this指向的真个windows，这样写是会报错的，所以最好用es6来调用getData里的方法
      time--
      if(time === 0){
        this.$router.push({path: '/login'})
      }
    }, 10000)
  }
  export default {
    data () {
      return {
        username1: '',
        checkCode: '',
        modify_returntime: 3 ,

      }
    },

    methods: {

    /*  initSetTimeout() {//每隔10秒刷新数据，也就是每隔10秒向后台请求一次数据
        alert("sds")
        setInterval( () => {//es6中这个this指向的是这些方法，若setInterval(function(){ this.getData(today)})中的this指向的真个windows，这样写是会报错的，所以最好用es6来调用getData里的方法
          this.modify_returntime--
          if(this.modify_returntime === 0){
            this.$router.push({path: '/xgpassword/second'})
          }
        }, 10000)
      },
    } ,*/
  },

  }
</script>
