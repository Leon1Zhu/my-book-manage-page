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
global.BASICSEARCH= JSON.parse(sessionStorage.getItem("BASICSEARCH")) ?  JSON.parse(sessionStorage.getItem("BASICSEARCH")): null;
global.ARSEARCH=JSON.parse(sessionStorage.getItem("ARSEARCH")) ?  JSON.parse(sessionStorage.getItem("ARSEARCH")): null;;
global.LLSEARCH=JSON.parse(sessionStorage.getItem("LLSEARCH")) ?  JSON.parse(sessionStorage.getItem("LLSEARCH")): null;;
global.LISTTYPE=sessionStorage.getItem("LISTTYPE") ? sessionStorage.getItem("LISTTYPE") : null;

global.SEARCHINFO = sessionStorage.getItem("SEARCHINFO") ? sessionStorage.getItem("SEARCHINFO") : null;

if(process.env.NODE_ENV=="production"){
  global.tokenUrl="http://119.23.40.120:9091/getToken"
  global.SERVICEURL="http://119.23.40.120:9091"
}










