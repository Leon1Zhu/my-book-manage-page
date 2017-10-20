/**
 * Created by zhuliang on 2017/10/20.
 */
import api from './index'

let bookIndex = '/book';
let loginBook = '/api';

let login = bookIndex+"/userLogin";
export  default {
  login(userphoe,password){
    let params={
      userphone:userphoe,
      password:password
    }
    return api.get(login,params);
  }
}
