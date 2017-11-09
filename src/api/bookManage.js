/**
 * Created by zhuliang on 2017/10/11.
 */
import api from './index'
let bookIndex = '/book';
let loginBook = '/api';

let getRecommendBook =  bookIndex+'/getRecommendBook'
let advancedSearch = bookIndex+'/advancedSearch'
let searchBook = bookIndex+'/searchBook'
let reserveBook = loginBook+'/reserveBook'
let collectBook = loginBook+'/collectBook'
let deleteSaveBook = loginBook+'/deleteSaveBook'
let deleteOrderBook = loginBook+'/deleteOrderBook'
let findOneBook =  bookIndex+'/getBookDetailInfo'
let getBookNews = bookIndex+'/getAllBookNews'
export default {
  getBookkNews(newsType){
    let params={
      newsType:newsType
    }
    return api.get(getBookNews,params);
  },
  deleteSaveBook(readerId,bookId){
    let params={
      readerId:readerId,
      bookId:bookId,
    }
    return api.delete(deleteSaveBook,params)
  },
  deleteOrderBook(readerId,bookId){
    let params={
      readerId:readerId,
      bookId:bookId,
    }
    return api.delete(deleteOrderBook,params)
  },
  getRecommendBook : function(){
    return api.get(getRecommendBook,{})
  },
  reserveBook : function(readerId,bookId,limit){
    let params={
      readerId:readerId,
      bookId:bookId,
      limit:limit
    }
    return api.post(reserveBook,{},params)

  },
  collectBook : function(readerId,bookId){

    let params={
      readerId:readerId,
      bookId:bookId,
    }
    return api.post(collectBook,{},params)
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
  },
  findOneBook(bookid){
    let params={
      bookid:bookid
    }
    return api.get(findOneBook,params)
  }
}
