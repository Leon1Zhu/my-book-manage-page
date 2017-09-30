/**
 * Created by zhuliang on 2017/4/6.
 */

global.mainBreadcrumb=[{name:'首页','url':'/index'}]
global.tokenUrl="http://localhost:8011/getToken"
global.TOKENTIME=new Date();
global.TOKEN="";
global.ISLOGIN=false;
global.USERINFO=[];


if(process.env.NODE_ENV=="production"){
  global.tokenUrl="http://119.23.40.120:9091/getToken"
  global.SERVICEURL="http://119.23.40.120:9091"
}










