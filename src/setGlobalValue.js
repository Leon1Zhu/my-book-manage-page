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
