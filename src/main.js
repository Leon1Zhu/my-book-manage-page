import Vue from 'vue'
import App from './App'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import router from './router'
import './common/css/reset.css'
import './filter'
import './common/css/style.scss'
import './common/css/iconFont.css'
import './common/css/function.scss'
import './mainFun'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import './common/css/swiper-3.4.2.min.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(iView);



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


router.beforeEach((to, from, next) => {
  console.log(to)
  if(to.name.indexOf("login") > -1 || to.name.indexOf("首页") > -1 ){
    for(let i=0;i<MAINBREADCRUMB.length;i++){
        MAINBREADCRUMB.splice(i,1);
        i--;
    }
    MAINBREADCRUMB.push({name:'首页',url:'/index',level:1,query:null});
    sessionStorage.setItem("MAINBREADCRUMB", JSON.stringify(MAINBREADCRUMB));
    next();
    return;
  }
  if(to.name == '' || to.name==null ){
    next();return;
  }
  let toArr = to.name.split('#');
  let fromArr = from.name.split('#');
  let toLeavl = toArr[1],fromLeavl = fromArr[1],toName = toArr[0],fromName = fromArr[0];
  let level = toLeavl-fromLeavl;
    if(level<=0){
      let i=0;
      for(i;i<MAINBREADCRUMB.length;i++){
        if(MAINBREADCRUMB[i].level >= toLeavl){
          MAINBREADCRUMB.splice(i,1);
          i--;
        }
      }
    }
  MAINBREADCRUMB.push({name: toName, url: to.path, level: toLeavl,query:to.query})
  sessionStorage.setItem("MAINBREADCRUMB", JSON.stringify(MAINBREADCRUMB));
  next()
})




