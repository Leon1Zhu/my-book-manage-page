/**
 * Created by zhuliang on 2017/4/6.
 */
global.MAINBREADCRUMB= JSON.parse(sessionStorage.getItem("MAINBREADCRUMB")) ?  JSON.parse(sessionStorage.getItem("MAINBREADCRUMB")): [{name:'首页',url:'/index',level:1}]
global.SERVICEURL="http://localhost:8090";
global.tokenUrl="http://localhost:8090/getToken"
global.TOKENTIME=new Date();
global.TOKEN="";
global.ISLOGIN=false;
global.IMGURL='http://106.15.90.228:8090/dummyPath/'
//搜索看结果
global.SEARCHRESULT=[{},{},{},{}];


if(process.env.NODE_ENV=="production"){
  global.tokenUrl="http://119.23.40.120:9091/getToken"
  global.SERVICEURL="http://119.23.40.120:9091"
}










