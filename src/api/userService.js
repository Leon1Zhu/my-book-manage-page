/**
 * Created by zhuliang on 2017/10/20.
 */
import api from './index'

let bookIndex = '/book';

let loginBook = '/api';

let login = bookIndex+"/userLogin";

let getCode = bookIndex+'/getUserYzNumber'

let regist = bookIndex+'/regist'

let getUByPhone = bookIndex+'/getUserInfoByPhone'

let changepassword = bookIndex+'/changePassword'

let getUserWord = loginBook+'/getUserWord'

let ChangeInfo = loginBook+'/changeUserInfo'


export  default {
  ChangeInfo(userinfo){
    return api.post(ChangeInfo,userinfo,'');
  },
  getUserWord(){
    return api.post(getUserWord,USERINFO,'');
  },
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
    return api.get(getCode,params);
  },
  regist(userInfo){

    return api.post(regist,userInfo,"");
  },
  getUserByPhone(phone){
    let params={
      phoneno : phone
    }
    return api.get(getUByPhone,params);
  },
   changePassword(phone,password){
       var params={
         phoneno:phone,
         newpassword:password
       }
       return api.post(changepassword,"",params)
   }
}
