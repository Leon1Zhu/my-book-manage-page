/**
 * Created by zhuliang on 2017/9/30.
 */
const index = resolve => require(['@/components/mainPage/mainPage'], resolve);
const mainPage = resolve => require(['@/components/introducePage/mainPage'], resolve);
const mainPageRouter= {
    path: '/index',
    component:index,
    children: [
      {path:'/',component:mainPage}
    ]
}

export default mainPageRouter
