<template>

<div class="main">
  <div class="header">
    <h1 class="tb1">美原图书馆</h1>
    <span class="tb2">修改密码</span>
    <span class="tb3">已完成修改？</span>
    <router-link to="/" class="tb4" >前往登录</router-link>
  </div>
  <hr>
  <div class="center1">
    <router-view/>
  </div>
</div>
</template>

<style>
  .main {
    width: 100%;
    height: 100%;
    position: relative;
    background: #ffffff;
    MARGIN-RIGHT: auto;
    MARGIN-LEFT: auto;
  }

  .header {
    height: 15%;
    width: 100%;
  }
  .tb1 {
    float: left;
    margin-top: 23px;
    margin-left: 20px;
    color: transparent;
    -webkit-text-stroke: 1px black;
    letter-spacing: 0.04em;
    color: orange;
  }

  .tb2 {
    float: left;
    margin-top: 18px;
    margin-left: 5%;
    font-family: "Microsoft Yahei";
    font-size: 30px;
  }

  .tb3 {
    float: left;
    margin-left: 60%;
    margin-top: 40px;

  }
  .tb4 {
    float: left;
    margin-top: 40px;
    font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
  }
</style>

