/**
 * Created by zhuliang on 2017/10/20.
 */
import api from './index'

let bookIndex = '/book';
let loginBook = '/api';

let login = bookIndex+"/userLogin";
let getCode = bookIndex+'/getUserYzNumber'
let regist = bookIndex+'/regist'
export  default {
  login(userphoe,password){
    let params={
      userphone:userphoe,
      password:password
    }
    return api.get(login,params);
  },
  sendCode(userPhone,userCode){
    let params={
      userPhone:userPhone,
      userCode:userCode
    }
    return api.post(getCode,"",params);
  },
  regist(userInfo){
    return api.post(regist,userInfo,"");
  }
}
