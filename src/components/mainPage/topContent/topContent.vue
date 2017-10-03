<template>
    <div class="top-content">
      <div class="header-bar">
          <div class="container_12">
              <div class="grid_6">
                <i class="iconfont icon-yaochi"></i>
                <span class="">&nbsp;登&nbsp;陆&nbsp;</span>
                <i  style="margin-left: 4px;" class="iconfont icon-Ankerwebicon-"></i>
                <span class="">&nbsp;注&nbsp;册&nbsp;</span>
              </div>
              <div class="grid_6">
                <div class="headRight">
                  <i class="iconfont icon-gouwuche"></i>
                  <span>购物车：<span class="basketCount">0</span></span>
                  <span>金额：<span class="book-money">¥&nbsp;0</span></span>
                </div>
              </div>
          </div>
      </div>
      <div class="top-topcontent">
           <div class="container_12">
             <div class="grid_6 book-info">
               <div class="img-logo"></div>
               <div class="all-book-content">
                 <animatedInteger class="" :value="value"></animatedInteger>
                 <div class="all-book-item">书籍总库存数</div>
               </div>
             </div>
             <div class="grid_6 select-info">
               <div class="select-input">
                   <Input v-model="searchBookInput" size="large" placeholder="输入书名，作者，ISBN">
                   <Select v-model="searchBookSelect" slot="prepend" style="width: 80px">
                     <Option value="all">所有书籍</Option>
                     <Option value="ar">AR书籍</Option>
                     <Option value="lexile">Lexile书籍</Option>
                   </Select>
                   <Button slot="append" icon="ios-search"></Button>
                   </Input>
               </div>
               <router-link :to="{ path: '/index/advancedsearch' }" > <div class="advanced-search animateClass" >高级搜索</div></router-link>
             </div>
           </div>
      </div>
      <div class="top-centercontent">
        <div class="nav">
          <div class="container_12">
              <div class="grid_12 nav-inner">
                  <ul>
                    <li  :class="{'active': liActive[0]}"   @click="chooseLi(0,'/index')">主页</li>
                    <li :class="{'active': liActive[1]}" @click="chooseLi(1)">活动中心</li>
                    <li :class="{'active': liActive[2]}" @click="chooseLi(2)">加速阅读</li>
                    <li :class="{'active': liActive[3]}" @click="chooseLi(3)">蓝思阅读</li>
                    <li :class="{'active': liActive[4]}" @click="chooseLi(4)">知识分享</li>
                    <li :class="{'active': liActive[5]}" @click="chooseLi(5)">加入我们</li>
                    <li :class="{'active': liActive[6]}" @click="chooseLi(6)">常见问题</li>
                    <li :class="{'active': liActive[7]}" @click="chooseLi(7)">合作伙伴</li>
                    <li :class="{'active': liActive[8]}" @click="chooseLi(8)">关于我们</li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
      <div class="top-bottomcontent">
        <div class="container_12">
          <div class="grid_12 contact-content">
            <div class="nav-info">
              <div class="layout-breadcrumb">
               <Breadcrumb separator="->" >
                 <BreadcrumbItem  v-for=" (bread,index) in  mainBreadcrumb"  :key="index" :href="bread.url">{{bread.name}}</BreadcrumbItem>
               </Breadcrumb>
             </div>
            </div>
            <div class="contact-info title-font">
              联系我们:&nbsp;&nbsp;&nbsp;025-84860000
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import './topContent.scss'
import  animatedInteger from '../../../common/animated-integer/animated-integer.vue'
    export default{
        data(){
            return {
                searchBookSelect:'all',
                searchBookInput:null,
                value:6791002,
              mainBreadcrumb:MAINBREADCRUMB,
              liActive:[true,false,false,false,false,false,false,false,false],
            }
        },
        components: {
            'animatedInteger':animatedInteger,
        },
        created(){
        },
        mounted(){
        },
        methods: {
          chooseLi(val,path){
              for(let i=0;i<this.liActive.length;i++){
                  this.$set(this.liActive,i,false)
              }
            this.liActive[val]=true;
            this.$router.push({ path: path })

          }
        },
        computed:{
        },
        watch:{

        }
    }
</script>
