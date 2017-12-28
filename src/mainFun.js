/**
 * Created by zhuliang on 2017/4/14.
 */
import Vue from 'vue'
import './globalFun'
import './setGlobalValue'
import bookManageApi from './api/bookManage'

var limit = 20;

Vue.prototype.$collectBook = function(data){
  let that = this;
  if(!isLoginFun()){
    that.$Notice.error(setNoticConfig("请先登录再进行该操作！",null,null,"error"));
    return;
  }
  this.$Modal.confirm({
    title: '书籍收藏确认',
    content: '确认收藏书籍['+data.name+']吗？',
    onOk: () => {
        bookManageApi.collectBook(USERINFO.id,data.id).then((response)=>{
          saveNewBook(response.data);
          that.$Notice.success(setNoticConfig('收藏成功！',null,null,"success"));
        }).catch((response)=>{
          that.$Notice.error(setNoticConfig(response.message,null,null,"error"));
        })
    }
  });
}

Vue.prototype.$reserveBook = function(data){
  let that = this;
  if(!isLoginFun()){
    that.$Notice.error(setNoticConfig("请先登录再进行该操作！",null,null,"error"));
    return ;
  };
  console.log(data)
  this.$Modal.confirm({
    title: '书籍预定确认',
    content: '确认预定书籍['+data.name+']吗？',
    onOk: () => {

        bookManageApi.reserveBook(USERINFO.id,data.id,limit).then((response)=>{
          orderNewBook(response.data);
          that.$Notice.success(setNoticConfig('预定成功！',null,null,"success"));
        }).catch((response)=>{
          that.$Notice.error(setNoticConfig(response.message,null,null,"error"));
        })

    }
  });
}

Vue.prototype.$filterDocType = function(val){
  if(val === "N"){
    return "Nonfiction";
  }
  if(val === "F"){
    return "Fiction";
  }else{
    return "Fiction and Nonfiction";
  }
}

function formatComponentName(vm)
{
  if (vm.$root === vm) return 'root';

  var name = vm._isVue ? (vm.$options && vm.$options.name) || (vm.$options && vm.$options._componentTag) : vm.name;
  return (name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options && vm.$options.__file ? ' at ' + (vm.$options && vm.$options.__file) : '');

}

Vue.config.errorHandler = function(err, vm, info)
{
  var componentName = formatComponentName(vm);
  var propsData = vm.$options && vm.$options.propsData;

  fundebug.notifyError(err,
    {
      metaData:
        {
          componentName: componentName,
          propsData: propsData,
          info: info
        }
    });
};



