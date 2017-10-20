/**
 * Created by zhuliang on 2017/10/11.
 */
import api from './index'
let bookIndex = '/book';
let loginBook = '/api';

let getRecommendBook =  bookIndex+'/getRecommendBook'
let advancedSearch = bookIndex+'/advancedSearch'
let searchBook = bookIndex+'/searchBook'
export default {
  getRecommendBook : function(){
    return api.get(getRecommendBook,{})
  },
  collectBook : function(){
    if(ISLOGIN){
      return Promise.reject({message:"请先登录再进行收藏操作！"})
    }
  },
  advancedSearch : function(index,length){
      let params={
        basicSearch:JSON.stringify(BASICSEARCH),
        arSearch:JSON.stringify(ARSEARCH),
        LLsearch:JSON.stringify(LLSEARCH),
        index:parseInt(index),
        length:parseInt(length)
      }
      return api.post(advancedSearch,{},params)
  },
  searchBook(type,value,index,length){
    let params={
      type:type,
      value:value,
      index:parseInt(index),
      length:parseInt(length)
    }
    return api.get(searchBook,params)
  }
}
