/**
 * Created by zhuliang on 2017/10/16.
 */
import  './global'
import Vue from 'vue'

global.setSearchResult=function(val){
  if(isNull(val)){
    SEARCHRESULT ="";
  }else{
    SEARCHRESULT =val;
  }
}

global.setAdvancedSearchInfo = function(basicSearch,arSearch,LLsearch){
  BASICSEARCH = basicSearch;
  ARSEARCH = arSearch;
  LLSEARCH = LLsearch;
  LISTTYPE = 'advancedSearch';
  sessionStorage.setItem("BASICSEARCH",JSON.stringify(basicSearch));
  sessionStorage.setItem("ARSEARCH",JSON.stringify(arSearch));
  sessionStorage.setItem("LLSEARCH",JSON.stringify(LLsearch));
  sessionStorage.setItem("LISTTYPE","advancedSearch");
  console.log(sessionStorage.getItem("LISTTYPE"))

}
global.outAdvancedSearchInfo = function(){
  BASICSEARCH = null;
  ARSEARCH = null;
  LLSEARCH = null;
  LISTTYPE = null;
  sessionStorage.setItem("BASICSEARCH",null);
  sessionStorage.setItem("ARSEARCH",null);
  sessionStorage.setItem("LLSEARCH",null);
  sessionStorage.setItem("LISTTYPE",null);
}

global.setMAINBREADCRUMB = function(val){
  sessionStorage.setItem("MAINBREADCRUMB",JSON.stringify(val));
}
global.unsetMAINBREADCRUMB = function(){
  sessionStorage.setItem("MAINBREADCRUMB",null);
}


global.setBookListType = function(val){
  LISTTYPE = val;
  sessionStorage.setItem("LISTTYPE",val);
}

global.setSearchInfo = function(val){
  sessionStorage.setItem("SEARCHINFO",val);

}

global.unSetSearchInfo = function(){
  sessionStorage.setItem("SEARCHINFO",null);
  sessionStorage.setItem("LISTTYPE",null);
}

global.setLoginStatus = function(loginVaule){
  if(typeof loginVaule == "boolean"){
    global.ISLOGIN = loginVaule;
    sessionStorage.setItem("LOGINSTATUS",loginVaule);
  }
}
global.getLoginStatus=function(){
  return ISLOGIN;
}


global.setUserInfo = function(userinfo){
  global.USERINFO = userinfo
  sessionStorage.setItem("USERINFO",JSON.stringify(userinfo));
}


global.setRAHBook = function(val){
  global.RAHBOOK = val
  sessionStorage.setItem("RAHBOOK",JSON.stringify(val));
}


global.LoginOut = function(){
  global.USERINFO = null;
  global.LOGINSTATUS = false;
  sessionStorage.setItem("USERINFO",null);
  sessionStorage.setItem("LOGINSTATUS", false);
  sessionStorage.setItem("RAHBOOK", null);
}

global.orderNewBook = function(val){
  USERINFO.orderInfo.push(val);
  sessionStorage.setItem("USERINFO",JSON.stringify(USERINFO));
}

global.saveNewBook = function(val){
  USERINFO.saveInfos.push(val);
  sessionStorage.setItem("USERINFO",JSON.stringify(USERINFO));
}
global.removeSaveBook = function(val){
  let saveList =  USERINFO.saveInfos
  for(let i =0;i< saveList.length;i++){
    if(saveList[i].id = val.id){
      USERINFO.saveInfos.splice(i,1);
    }
  }
  sessionStorage.setItem("USERINFO",JSON.stringify(USERINFO));
}


global.removeSaveBook = function(val){
  let saveList =  USERINFO.saveInfos
  for(let i =0;i< saveList.length;i++){
    if(saveList[i].saveBookInfo.id == val){
      USERINFO.saveInfos.splice(i,1);
    }
  }
  sessionStorage.setItem("USERINFO",JSON.stringify(USERINFO));
}


global.removeOrderBook = function(val){
  for(let i =0;i< USERINFO.orderInfo.length;i++){
    if(USERINFO.orderInfo[i].orderBookInfo.id == val){
      USERINFO.orderInfo.splice(i,1);
    }
  }
  sessionStorage.setItem("USERINFO",JSON.stringify(USERINFO));
}


