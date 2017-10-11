<template>
    <div class="user-info">
      <div class="user-info-content">
        <div class="search-input">
          <div class="search-input-sec">
            <div class="word">用户名:<span class="user-info-detail">{{userinfo.rname}}</span></div>
          </div>
          <div class="search-input-sec">
            <div class="word">昵称:<span class="user-info-detail">{{userinfo.nickname}}</span></div>
          </div>
        </div>


        <div class="search-input">
          <div class="search-input-sec">
            <div class="word">姓名:{{userinfo.rname}}<span class="user-info-detail"></span></div>
          </div>
          <div class="search-input-sec">
            <div class="word">宝宝姓名:<span class="user-info-detail">{{userinfo.rname}}</span></div>
          </div>
        </div>


        <div class="search-input">
          <div class="search-input-sec">
            <div class="word">手机号:{{userinfo.phoneno}}<span class="user-info-detail"></span></div>
          </div>
          <div class="search-input-sec">
            <div class="word">联系地址:<span class="user-info-detail">{{userinfo.adress}}</span></div>
          </div>
        </div>


        <div class="search-input">
          <div class="search-input-sec">
            <div class="word">邮箱:{{userinfo.email}}<span class="user-info-detail"></span></div>
          </div>
          <div class="search-input-sec">
            <div class="word">性别:<span class="user-info-detail">{{userinfo.rsex}}</span></div>
          </div>
        </div>



        <div class="search-input">
          <div class="search-input-sec">
            <div class="word">缴费信息:{{userinfo.paidinfo}}<span class="user-info-detail"></span></div>
          </div>
          <div class="search-input-sec">
            <div class="word">缴费金额:<span class="user-info-detail">{{userinfo.bmoney}}</span></div>
          </div>
        </div>



        <div class="search-input">
          <div class="search-input-sec">
            <div class="word">会员开始日期:{{userinfo.memstart}}<span class="user-info-detail"></span></div>
          </div>
          <div class="search-input-sec">
            <div class="word">会员截止日期:<span class="user-info-detail">{{userinfo.memend}}</span></div>
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
                userinfo:{
                   name:"张三父",
                   rname:'张三',
                   nickname:'Alada',
                   phoneno:'13376068569',
                   rsex:"男",
                   adress:'南京市玄武区',
                   email:'zhangsan@126.com',
                   paidinfo:'网络支付宝自动付款',
                   bmoney:'1000',
                   memstart:'9/20/17',
                   memend:'9/19/18',
                }
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
