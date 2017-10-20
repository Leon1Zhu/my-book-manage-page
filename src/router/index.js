import Vue from 'vue'
import Router from 'vue-router'
import mainPageRouter from './mainPageRouter'

Vue.use(Router)

const notFound = resolve => require(['@/components/404'], resolve);


const login = resolve => require(['@/components/signinAndUp/login'], resolve);
const regist = resolve => require(['@/components/signinAndUp/regist'], resolve);
const xgpassword = resolve => require(['@/components/signinAndUp/xgpassword'], resolve);
const first = resolve => require(['@/components/signinAndUp/first'], resolve);
const second= resolve => require(['@/components/signinAndUp/second'], resolve);
const third = resolve => require(['@/components/signinAndUp/third'], resolve);
const forth = resolve => require(['@/components/signinAndUp/forth'], resolve);


export default new Router({
  /*mode: 'history',*/
  base: __dirname,
  routes: [
    mainPageRouter,
    {
      path: '/login',
      component: login,
      name:"login"
    }, {
      path: '/regist',
      component: regist,
      name:"login1"
    }, {
      path: '/xgpassword',
      component: xgpassword,
      name:"login2",
      children: [
        {
          path: '/xgpassword/first',
          component: first,
          name:"login3"
        },
        {
          path: '/xgpassword/second',
          component: second,
          name:"login4"
        },
        {
          path: '/xgpassword/third',
          component: third,
          name:"login5"
        },
        {
          path: '/xgpassword/forth',
          component: forth,
          name:"login6"
        }
      ]

    },
    {path: '*', component: notFound},
  ]
})
