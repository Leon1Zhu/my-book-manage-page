/**
 * Created by zhuliang on 2017/5/6.
 */
import Vue from 'vue'
import api from './index'

var getCollectsByUserId = "/api/alinews-collects";
let getBookSeries = '/book/getBookSeries'

let getARBookSeries = '/book/getARBookSeries'

let SearchArBookList = '/book/listArBookSearch'

let SearchLexBookList = '/book/listLexBookSearch'
export default {
  getBookSeries(){
    return api.get(getBookSeries,null)
  },
  getARBookSeries(){
    return api.get(getARBookSeries,null)
  },
  advancedSearch : function(userid){
    var params = {
      userid:userid
    }
    return api.get(getCollectsByUserId,params)
  },
  arBookSearchList : function(searchContet){
    var params = {
      searchData:searchContet
    }
    return api.get(SearchArBookList,params)
  },
  lexBookSearchList : function(searchContet){
    var params = {
      searchData:searchContet
    }
    return api.get(SearchLexBookList,params)
  },
}
