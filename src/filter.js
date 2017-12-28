/**
 * Created by zhuliang on 2017/5/3.
 */
import Vue from 'vue'
Vue.filter( 'filterTopNewsData' , function(value,discount) {
  if(value=="" || value==null)
    return "";
  else{
    return value.substring(5,10)
  }
});
Vue.filter('folterData',function(data){
  return new Date(data).Format('yyyy-MM-dd hh:mm:ss');
});

Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}


Vue.filter( 'filterNull' , function(value) {
  if(value==="" || value===null || value==="NULL" || value==="null")
    return '无';
  else{
    return value
  }
});

Vue.filter('filterAge',function(value){
  if(value==="" || value===null || value==="NULL" || value==="null")
    return 0+'岁';
  else{
    return value+'岁'
  }
})
Vue.filter('filterGrade',function(start,end){
  if(isNull(start) && isNull(end)){
    return "没有相关数据"
  } else if( ( parseInt(start,10) <0 || 19 <  parseInt(start,10)) ||  (19 < parseInt(end,10) || parseInt(end,10)<0  ) ){
    return '年级信息错误！';
  }else if(isNull(start)){
    return GRADELIST[parseInt(end,10)-1]['label']+'以下学生';
  }else if(isNull(end)){
    return GRADELIST[parseInt(start,10)-1]['label']+'以上学生';
  }
  else{
    return GRADELIST[parseInt(start,10)-1]['label']+'~' +GRADELIST[parseInt(end,10)-1]['label'];
  }
})

Vue.filter('filterSex',function(value){
  if(value === '1'){
    return '女'
  }else if(value === '0'){
    return '男'
  }else{
     return '';
  }
})



