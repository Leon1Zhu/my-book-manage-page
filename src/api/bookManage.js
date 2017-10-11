/**
 * Created by zhuliang on 2017/10/11.
 */
import api from './index'
let bookIndex = '/book';
let loginBook = '/api';

let getRecommendBook =  bookIndex+'/getRecommendBook'
export default {
  advancedSearch : function(userid){
    var params = {
      userid:userid
    }
    return api.get(getCollectsByUserId,params)
  }
}
