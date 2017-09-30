/**
 * Created by zhuliang on 2017/9/30.
 */
const mainPage = resolve => require(['@/components/mainPage/mainPage'], resolve);
const mainPageRouter= {
    path: '/index',
    component:mainPage,
    children: [

    ]
}

export default mainPageRouter
