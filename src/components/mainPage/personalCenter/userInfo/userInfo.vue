<template>
    <div class="user-info">
      <div class="user-info-content">
        <div class="search-input">
          <div class="search-input-sec">
            <div class="word">昵称:<span class="user-info-detail">{{userinfo.name}}</span></div>
          </div>
          <div class="search-input-sec">
            <Poptip  class="sign-img-content"  trigger="hover" content="快递用户请务必提供准确的收件信息" >
              <div class="word">真实姓名:<span class="user-info-detail">{{userinfo.rName}}</span></div>
            </Poptip>
          </div>
        </div>


        <div class="search-input">
          <div class="search-input-sec">
            <Poptip  class="sign-img-content"  trigger="hover" content="快递用户请务必提供准确的收件信息" >
              <div class="word">手机号:<span class="user-info-detail">{{userinfo.phoneNo}}</span></div>
            </Poptip>
          </div>
          <div class="search-input-sec">
            <div class="word">邮箱:<span class="user-info-detail">{{userinfo.email}}</span></div>
          </div>
        </div>


        <div class="search-input">
          <div class="search-input-sec">
            <div class="word">性别:<span class="user-info-detail">{{userinfo.rSex | filterSex }}</span></div>
          </div>
          <div class="search-input-sec">
            <Poptip  class="sign-img-content"  trigger="hover" content="快递用户请务必提供准确的收件信息" >
              <div class="word">联系地址:<span class="user-info-detail">{{userinfo.address}}</span></div>
            </Poptip>
          </div>
        </div>


        <div class="search-input">
          <div class="search-input-sec">
            <div class="word">押金:<span class="user-info-detail"></span></div>
          </div>
          <div class="search-input-sec">
            <div class="word">会员类型:<span class="user-info-detail">{{userinfo.paidInfo}}</span></div>
          </div>
        </div>



        <div class="search-input">
          <div class="search-input-sec">
            <div class="word">阅读总本数:<span class="user-info-detail">{{readBookCount}}</span></div>
          </div>
          <div class="search-input-sec">
            <div class="word">阅读总字数:<span class="user-info-detail">{{readBookWord}}</span></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import './userInfo.scss'
import userApi from '../../../../api/userService'
    export default{
        data(){
          return {
            readBookCount: null,
            readBookWord: null,
          }
        },
        components: {

        },
        computed:{
          userinfo(){
            return this.$store.getters.getUserInfo
          }
        },
        created(){
          this.getUserWord()
        },
        mounted(){
        },
        methods: {
            getUserWord(){
                userApi.getUserWord(this.$store.getters.getUserInfo).then((response) => {
                  this.readBookCount=response.data.readBookCount
                  this.readBookWord=response.data.readBookWord
                }).catch((response) => {

                })
            }
        }
    }
</script>
