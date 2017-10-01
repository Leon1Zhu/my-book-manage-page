import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/reset.css'
import './filter'
import './common/css/style.scss'
import './common/css/iconFont.css'
import './common/css/function.scss'
import './globalFun'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
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


