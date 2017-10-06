/**
 * Created by zhuliang on 2017/5/6.
 */
import Vue from 'vue'
import api from './index'

var getCollectsByUserId = "/api/alinews-collects";

export default {
  advancedSearch : function(userid){
    var params = {
      userid:userid
    }
    return api.get(getCollectsByUserId,params)
  }
}
