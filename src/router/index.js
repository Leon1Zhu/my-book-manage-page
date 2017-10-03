import Vue from 'vue'
import Router from 'vue-router'
import mainPageRouter from './mainPageRouter'

Vue.use(Router)

const notFound = resolve => require(['@/components/404'], resolve);
export default new Router({
  /*mode: 'history',*/
  base: __dirname,
  routes: [
    mainPageRouter,
    {path: '*', component: notFound},
  ]
})
