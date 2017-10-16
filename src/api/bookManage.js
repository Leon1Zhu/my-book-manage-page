/**
 * Created by zhuliang on 2017/10/11.
 */
import api from './index'
let bookIndex = '/book';
let loginBook = '/api';

let getRecommendBook =  bookIndex+'/getRecommendBook'
export default {
  getRecommendBook : function(){
    return api.get(getRecommendBook,{})
  },
  collectBook : function(){
    if(ISLOGIN){
      return Promise.reject({message:"请先登录再进行收藏操作！"})
    }
  }
}
