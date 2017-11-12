<template>

<div class="main">
  <div class="header">
    <img style="float:left;width:250px;height: 50px;margin-top: 16px;margin-left: 10px;" src="../../assets/logo.png">
    <span class="tb2">修改密码</span>
    <div style="position: absolute;right: 20px;top: 0px;">
      <span class="tb3">已完成修改？</span>
      <router-link to="/login" class="tb4" >前往登录</router-link>
    </div>

  </div>
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
    height: 90px;
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
    margin-top: 35px;
    margin-left: 5%;
    font-family: "Microsoft Yahei";
    font-size: 30px;
  }

  .tb3 {

  }
  .tb4 {
    float: left;
    margin-top: 40px;
    font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
  }
</style>

