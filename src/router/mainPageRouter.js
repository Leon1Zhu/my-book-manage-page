/**
 * Created by zhuliang on 2017/9/30.
 */
const index = resolve => require(['@/components/mainPage/mainPage'], resolve);
const mainPage = resolve => require(['@/components/introducePage/mainPage'], resolve);

const advancedSearch = resolve => require(['@/components/advancedSearch/advancedSearch'], resolve);

const book_list = resolve => require(['@/components/book-list/book-list'], resolve);

const book_detail = resolve => require(['@/components/book-list/book-detail/book-detail'], resolve);

const about = resolve => require(['@/components/about/about'], resolve);

const activityCenter = resolve => require(['@/components/activityCenter/activityCenter'], resolve);

const commonQuestion = resolve => require(['@/components/commonQuestion/commonQuestion'], resolve);

const joinUs = resolve => require(['@/components/joinUs/joinUs'], resolve);

const knowlwdgeShare = resolve => require(['@/components/knowlwdgeShare/knowlwdgeShare'], resolve);

const leixiReading = resolve => require(['@/components/leixiReading/leixiReading'], resolve);

const speedReading = resolve => require(['@/components/speedReading/speedReading'], resolve);

const partners = resolve => require(['@/components/partners/partners'], resolve);

const newsDetail = resolve => require(['@/components/showNewsPage/showNewsDetail/showNewsDetail'], resolve);

const login = resolve => require(['@/components/signinAndUp/login1'], resolve);

const regist = resolve => require(['@/components/signinAndUp/regist1'], resolve);

const xgpassword = resolve => require(['@/components/signinAndUp/xgpassword'], resolve);

const first = resolve => require(['@/components/signinAndUp/first'], resolve);

const second= resolve => require(['@/components/signinAndUp/second'], resolve);

const third = resolve => require(['@/components/signinAndUp/third'], resolve);

const forth = resolve => require(['@/components/signinAndUp/forth'], resolve);

const personalCenter = resolve => require(['@/components/mainPage/personalCenter/personalCenter.vue'], resolve);



const mainPageRouter= {
    path: '/',
    component:index,
    children: [
      {path:'/',components:{main:mainPage},name:"首页#1"},
      {path:'advancedsearch',components:{main:advancedSearch},name:"高级搜索#2"},
      {path:'book_list',components:{main:book_list},name:"搜索结果#3"},
      {path:'book_detail',components:{main:book_detail},name:"图书详情#4"},
      {path: 'about', components: {main:about}, name:"关于我们#2"}, {
        path: 'activityCenter',
        components: {main:activityCenter},
        name:"活动中心#2"
      }, {
        path: 'commonQuestion',
        components: {main:commonQuestion},
        name:"常见问题#2"
      }, {
        path: 'joinUs',
        components: {main:joinUs},
        name:"加入我们#2"
      }, {
        path: 'knowlwdgeShare',
        components: {main:knowlwdgeShare},
        name:"知识分享#2"
      }, {
        path: 'leixiReading',
        components: {main:leixiReading},
        name:"蓝思阅读#2"
      }, {
        path: 'speedReading',
        components:{ main:speedReading},
        name:"加速阅读#2"
      }, {
        path: 'partners',
        components: {main:partners},
        name:"合作伙伴#2"
      },{
        path: 'newsDetail',
        components: {main:newsDetail},
        name:"新闻详情#3"
      },
      {
        path: '/login',
        components: {main:login},
        name:"用户登陆#2"
      }, {
        path: '/regist',
        components: {main:regist},
        name:"用户注册#2"
      }, {
        path: '/xgpassword',
        components: {main:xgpassword},
        name:"修改密码#2",
        children: [
          {
            path: '/xgpassword/first',
            component: first,
            name:"填写账户名#2"
          },
          {
            path: '/xgpassword/second',
            component: second,
            name:"验证身份#3"
          },
          {
            path: '/xgpassword/third',
            component: third,
            name:"设置新密码#4"
          },
          {
            path: '/xgpassword/forth',
            component: forth,
            name:"完成#5"
          }
        ]

      },
      {
        path: '/personalCenter',
        components: {main:personalCenter},
        name:"个人中心#2"
      }
    ]
}

export default mainPageRouter
