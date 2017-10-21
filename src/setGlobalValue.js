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


