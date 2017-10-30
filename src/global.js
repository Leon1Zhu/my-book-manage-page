/**
 * Created by zhuliang on 2017/4/6.
 */
global.MAINBREADCRUMB= JSON.parse(sessionStorage.getItem("MAINBREADCRUMB")) ?  JSON.parse(sessionStorage.getItem("MAINBREADCRUMB")): [{name:'首页',url:'/index',level:1}]
global.SERVICEURL="http://localhost:8090";
/*global.tokenUrl="http://localhost:8090/getToken"
global.TOKENTIME=new Date();
global.TOKEN="";*/
//登陆状态
global.ISLOGIN=sessionStorage.getItem("LOGINSTATUS") ? sessionStorage.getItem("LOGINSTATUS") : false;
//登陆用户信息
global.USERINFO=sessionStorage.getItem("LOGINSTATUS") ?  JSON.parse(sessionStorage.getItem("USERINFO")) : null;
global.ORDERINFO = sessionStorage.getItem("ORDERINFO") ?  JSON.parse(sessionStorage.getItem("ORDERINFO")) : [{id:-1}];
global.SAVEINFO = sessionStorage.getItem("SAVEINFO") ?  JSON.parse(sessionStorage.getItem("SAVEINFO")) : [{id:-1}];

//登陆用户信息
global.RAHBOOK=sessionStorage.getItem("LOGINSTATUS") ?  JSON.parse(sessionStorage.getItem("RAHBOOK")) : null;
//图书封面url
global.IMGURL='http://106.15.90.228:8090/dummyPath/'
//高级搜索的基础信息搜索
global.BASICSEARCH= JSON.parse(sessionStorage.getItem("BASICSEARCH")) ?  JSON.parse(sessionStorage.getItem("BASICSEARCH")): null;
//高级搜索的ar搜索
global.ARSEARCH=JSON.parse(sessionStorage.getItem("ARSEARCH")) ?  JSON.parse(sessionStorage.getItem("ARSEARCH")): null;;
//高级搜索的蓝思值搜索
global.LLSEARCH=JSON.parse(sessionStorage.getItem("LLSEARCH")) ?  JSON.parse(sessionStorage.getItem("LLSEARCH")): null;;
//book-list列表页的类型参数
global.LISTTYPE=sessionStorage.getItem("LISTTYPE") ? sessionStorage.getItem("LISTTYPE") : null;
//搜索信息
global.SEARCHINFO = sessionStorage.getItem("SEARCHINFO") ? sessionStorage.getItem("SEARCHINFO") : null;

if(process.env.NODE_ENV=="production"){
  global.tokenUrl="http://119.23.40.120:9091/getToken"
  global.SERVICEURL="http://119.23.40.120:9091"
}










