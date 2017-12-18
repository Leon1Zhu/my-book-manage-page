/**
 * Created by zhuliang on 2017/4/6.
 */
global.MAINBREADCRUMB= JSON.parse(sessionStorage.getItem("MAINBREADCRUMB")) ?  JSON.parse(sessionStorage.getItem("MAINBREADCRUMB")): [{name:'首页',url:'/',level:1,query:null}]
global.SERVICEURL="http://localhost:8090";
global.HomePageSwiperImgUrlHost='http://121.43.171.195:8080/dummyPath/';
//global.SERVICEURL="http://121.43.171.195:8090"
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

//修改密码信息
global.CURRENTGL = sessionStorage.getItem("currentStep")? sessionStorage.getItem("currentStep") : 0;

global.INTERESTLEVEL=[{value:'LG',label:"Lower Grades(LG K-3)"},{value:'MG',label:"Middle Grades(MG 4-8)"},{value:'MG+',label:"Middle Grades Plus(MG+ 6 and up)"},{value:'UG',label:"Upper Grades(UG 9-12)"}],

global.DOCTYPE=[{value:1,label:"Fiction and Nonfiction"},{value:2,label:"Fiction"},{value:3,label:"Nonfiction"}],

global.GRADELIST= [{value: 1, label: '学前班'}, {value: 2, label: '幼儿园小班'}, {value: 3, label: '幼儿园中班'}, {value: 4, label: '幼儿园大班'}, {value: 5, label: '小学一年级'}, {value: 6, label: '小学二年级'}, {value: 7, label: '小学三年级'}, {value: 8, label: '小学四年级'}, {value: 9, label: '小学五年级'}, {value: 10, label: '小学六年级'}, {value: 11, label: '初中一年级'},{value: 12, label: '初中二年级'}, {value:13, label: '初中三年级'}, {value: 14, label: '高中一年级'}, {value: 15, label: '高中二年级'}, {value: 16, label: '高中三年级'}, {value: 17, label: '大学生/成人'}]
if(process.env.NODE_ENV=="production"){
  global.tokenUrl="http://119.23.40.120:9091/getToken"
  global.SERVICEURL="http://121.43.171.195:8090"
}









