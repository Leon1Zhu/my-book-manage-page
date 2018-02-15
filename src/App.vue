<template>
  <div id="app">
    <router-view>
      <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
    </router-view>
  </div>
</template>

<script>
  import userApi from './api/userService'
export default {
  name: 'app',
  created(){

  },
  methods: {
    login(){

      userApi.login(this.$store.getters.getUserInfo.phoneNo, this.$store.getters.getUserInfo.password).then((response)=>{
        /*setLoginStatus(true);
        setUserInfo( response.data.userInfo,response.data.userInfo.orderInfo,response.data.userInfo.saveInfos)
        setRAHBook(response.data.bookInfo)*/
      /*  this.$router.go(0)*/
      }).catch((response)=>{
        this.$Notice.error(setNoticConfig(response.message,null,null,"error"));
      })
    }
  }
}
</script>

<style>
</style>
