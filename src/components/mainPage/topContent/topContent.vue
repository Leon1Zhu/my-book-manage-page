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
                 <div class="all-book-count">6,791,092</div>
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
             </div>
           </div>
      </div>
      <div class="top-centercontent">
        <div class="nav">
          <div class="container_12">
              <div class="grid_12 nav-inner">
                  <ul>
                    <li>主页</li>
                    <li>活动中心</li>
                    <li>加速阅读</li>
                    <li>蓝思阅读</li>
                    <li>知识分享</li>
                    <li>加入我们</li>
                    <li>常见问题</li>
                    <li>合作伙伴</li>
                    <li>关于我们</li>
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
                 <BreadcrumbItem  href="/index">首页</BreadcrumbItem>
                 <BreadcrumbItem   href="#">应用中心</BreadcrumbItem>
                 <BreadcrumbItem >某应用</BreadcrumbItem>
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
    export default{
        data(){
            return {
                searchBookSelect:null,
              searchBookInput:null,
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
