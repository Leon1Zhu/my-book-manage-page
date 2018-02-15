<template>
    <div id="library-mainpage">
      <topContent></topContent>
      <div class="container_12 flex-content">
        <div class="grid_12">
          <router-view name="main"></router-view>
        </div>
      </div>
     <footer>
        <div class="container_12">
          <p class="company-info ">美原英文图书馆&nbsp;&nbsp;@2017&nbsp;ALL&nbsp;Right&nbsp;Reserved&nbsp;备案/许可证编号：苏ICP备17064227号-1</p>
        </div>
      </footer>
    </div>
</template>

<script>
import './mainPage.scss'
import topContent from './topContent/topContent.vue'
import userApi from '../../api/userService'
    export default{
        data(){
            return {}
        },
        components: {
            'topContent':topContent,
        },
        created(){
          this.$store.getters.getLoginStatus && this.login()
        },
        mounted(){

        },
        methods: {
          login(){
            userApi.login(this.$store.getters.getUserInfo.phoneNo, this.$store.getters.getUserInfo.password).then((response)=>{
              this.$store.commit('setLoginStatus',true)
              this.$store.commit('setUserInfo',response.data.userInfo)
              this.$store.commit('setRAHBook',response.data.bookInfo)
            }).catch((response)=>{
              this.$Notice.error(setNoticConfig(response.message,null,null,"error"));
            })
          }
        }
    }
</script>
