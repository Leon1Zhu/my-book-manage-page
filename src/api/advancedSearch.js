/**
 * Created by zhuliang on 2017/5/6.
 */
import Vue from 'vue'
import api from './index'

var getCollectsByUserId = "/api/alinews-collects";
let getBookSeries = '/book/getBookSeries'
export default {
  getBookSeries(){
    return api.get(getBookSeries,null)
  },
  advancedSearch : function(userid){
    var params = {
      userid:userid
    }
    return api.get(getCollectsByUserId,params)
  }
}
