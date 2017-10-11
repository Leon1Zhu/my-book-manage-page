/**
 * Created by zhuliang on 2017/9/30.
 */
const index = resolve => require(['@/components/mainPage/mainPage'], resolve);
const mainPage = resolve => require(['@/components/introducePage/mainPage'], resolve);

const advancedSearch = resolve => require(['@/components/advancedSearch/advancedSearch'], resolve);

const book_list = resolve => require(['@/components/book-list/book-list'], resolve);

const mainPageRouter= {
    path: '/index',
    component:index,
    children: [
      {path:'/',components:{main:mainPage},name:"首页#1"},
      {path:'advancedsearch',components:{main:advancedSearch},name:"高级搜索#2"},
      {path:'book_list',components:{main:book_list},name:"搜索结果#3"},
    ]
}

export default mainPageRouter
