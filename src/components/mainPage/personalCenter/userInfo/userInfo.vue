<template>
    <div class="user-info">
      <div class="user-info-content">
        <div class="search-input">
          <div class="search-input-sec">
            <div class="word">用户名:<span class="user-info-detail">{{userinfo.phoneNo}}</span></div>
          </div>
          <div class="search-input-sec">
            <div class="word">昵称:<span class="user-info-detail">{{userinfo.nickName}}</span></div>
          </div>
        </div>


        <div class="search-input">
          <div class="search-input-sec">
            <div class="word">姓名:<span class="user-info-detail">{{userinfo.rName}}</span></div>
          </div>
          <div class="search-input-sec">
            <div class="word">宝宝姓名:<span class="user-info-detail">{{userinfo.rName}}</span></div>
          </div>
        </div>


        <div class="search-input">
          <div class="search-input-sec">
            <div class="word">手机号:<span class="user-info-detail">{{userinfo.phoneNo}}</span></div>
          </div>
          <div class="search-input-sec">
            <div class="word">联系地址:<span class="user-info-detail">{{userinfo.address}}</span></div>
          </div>
        </div>


        <div class="search-input">
          <div class="search-input-sec">
            <div class="word">邮箱:<span class="user-info-detail">{{userinfo.email}}</span></div>
          </div>
          <div class="search-input-sec">
            <div class="word">性别:<span class="user-info-detail">{{userinfo.rSex}}</span></div>
          </div>
        </div>



        <div class="search-input">
          <div class="search-input-sec">
            <div class="word">缴费信息:<span class="user-info-detail">{{userinfo.paidInfo}}</span></div>
          </div>
          <div class="search-input-sec">
            <div class="word">缴费金额:<span class="user-info-detail">{{userinfo.bmoney}}</span></div>
          </div>
        </div>



        <div class="search-input">
          <div class="search-input-sec">
            <div class="word">会员开始日期:<span class="user-info-detail">{{userinfo.memStart}}</span></div>
          </div>
          <div class="search-input-sec">
            <div class="word">会员截止日期:<span class="user-info-detail">{{userinfo.memEnd}}</span></div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
import './userInfo.scss'
    export default{
        data(){
            return {
                userinfo:USERINFO
            }
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {}
    }
</script>
