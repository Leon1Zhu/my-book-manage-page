/**
 * Created by zhuliang on 2017/3/6.
 * 登陆的相关数据的store
 */
import * as types  from '../mutations-types'

const  state = {
  ISLOGIN: sessionStorage.getItem("LOGINSTATUS") ? sessionStorage.getItem("LOGINSTATUS") : false,
  USERINFO: sessionStorage.getItem("LOGINSTATUS") ?  JSON.parse(sessionStorage.getItem("USERINFO")) : null,
  ORDERINFO:sessionStorage.getItem("ORDERINFO") ?  JSON.parse(sessionStorage.getItem("ORDERINFO")) : [],
  SAVEINFO: sessionStorage.getItem("SAVEINFO") ?  JSON.parse(sessionStorage.getItem("SAVEINFO")) : [],
  RAHBOOK: sessionStorage.getItem("LOGINSTATUS") ?  JSON.parse(sessionStorage.getItem("RAHBOOK")) : null,

}


const getters = {
  getLoginStatus: state => state.ISLOGIN,
  getUserInfo: state => state.USERINFO,
  //开始获取orderInfo
  getOrderInfo: state => state.ORDERINFO,
  getSaveInfo: state => state.SAVEINFO,
  getRahBook : state =>state.RAHBOOK,
}

const mutations = {
  setRAHBook(state,value){
    state.RAHBOOK = value
    sessionStorage.setItem("RAHBOOK",JSON.stringify(value));
  },
  LoginOut(state){
    state.USERINFO = null;
    state.LOGINSTATUS = false;
    sessionStorage.setItem("USERINFO",null);
    sessionStorage.setItem("LOGINSTATUS", false);
    sessionStorage.setItem("RAHBOOK", null);
  },
  setLoginStatus(state,flag){
    state.ISLOGIN = flag;
    sessionStorage.setItem("LOGINSTATUS",state.ISLOGIN);
  },
  setUserInfo(state,userInfo){
    debugger
    state.USERINFO = userInfo
    state.ORDERINFO = userInfo.orderInfo
    state.SAVEINFO = userInfo.saveInfos
    state.USERINFO.saveInfos = null;
    state.USERINFO.orderInfo = null;
    sessionStorage.setItem("USERINFO",JSON.stringify(state.USERINFO));
    sessionStorage.setItem("ORDERINFO",JSON.stringify(state.ORDERINFO));
    sessionStorage.setItem("SAVEINFO",JSON.stringify(state.SAVEINFO));
  },
  orderNewBook(state,val){
   /* if(isNull(state.ORDERINFO))state.ORDERINFO = [];
    let temp = ORDERINFO;
    temp.push(val);*/
    state.ORDERINFO.push(val);
    sessionStorage.setItem("ORDERINFO",JSON.stringify(state.ORDERINFO));
  },

  saveNewBook(state,val){
    /*if(isNull(SAVEINFO))SAVEINFO = [];
    var temp = SAVEINFO
    temp.push(val)*/
    state.SAVEINFO.push(val)
    sessionStorage.setItem("SAVEINFO",JSON.stringify(state.SAVEINFO));
  },
  removeSaveBook(state,val){
    let saveList =  state.SAVEINFO
    for(let i =1;i< saveList.length;i++){
      if(saveList[i].saveBookInfo.id == val){
        state.SAVEINFO.splice(i--,1);
      }
    }
    if(state.SAVEINFO.length==0){
      sessionStorage.removeItem("SAVEINFO")
    }else{
      sessionStorage.setItem("SAVEINFO",JSON.stringify(state.SAVEINFO) );
    }
  },

  removeOrderBook(state,val){
    let temp = state.ORDERINFO;
    for(let i =1;i< temp.length;i++){
      if(temp[i].orderBookInfo.id == val){
        temp.splice(i--,1);
      }
    }
    state.ORDERINFO = temp;
    if(state.ORDERINFO.length==0){
      sessionStorage.removeItem("ORDERINFO")
    }else{
      sessionStorage.setItem("ORDERINFO",JSON.stringify(state.ORDERINFO) );
    }
  }
}

const actions = {
  setLoginStatus ({ commit },flag) {
      commit('setLoginStatus',flag)
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}

