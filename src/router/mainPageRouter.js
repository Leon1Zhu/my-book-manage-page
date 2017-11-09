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

const mainPageRouter= {
    path: '/',
    component:index,
    children: [
      {path:'/',components:{main:mainPage},name:"首页#1"},
      {path:'advancedsearch',components:{main:advancedSearch},name:"高级搜索#2"},
      {path:'book_list',components:{main:book_list},name:"搜索结果#3"},
      {path:'book_detail',components:{main:book_detail},name:"图书详情#4"},
      {
        path: '/about',
        component: about,
        name:"关于我们#2"
      }, {
        path: '/activityCenter',
        component: activityCenter,
        name:"活动中心#2"
      }, {
        path: '/commonQuestion',
        component: commonQuestion,
        name:"常见问题#2"
      }, {
        path: '/joinUs',
        component: joinUs,
        name:"加入我们#2"
      }, {
        path: '/knowlwdgeShare',
        component: knowlwdgeShare,
        name:"知识分享#2"
      }, {
        path: '/leixiReading',
        component: leixiReading,
        name:"蓝思阅读#2"
      }, {
        path: '/speedReading',
        component: speedReading,
        name:"加速阅读#2"
      }, {
        path: '/partners',
        component: partners,
        name:"合作伙伴#2"
      },
    ]
}

export default mainPageRouter
