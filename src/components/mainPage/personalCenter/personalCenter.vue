<template>
    <div class="personal-center">
      <div class="menu-content">
        <Tabs @on-click="changeVal">
          <TabPane name="userInfo" label="我的信息" icon="ios-person-outline">
            <userIfno></userIfno>
          </TabPane>
          <TabPane  name="history" label="信息完善" icon="clipboard">
            <prefectInfo></prefectInfo>
          </TabPane>
          <TabPane  name="collect" label="我的收藏" icon="star">
            <book_list list_type="collect"></book_list>
          </TabPane>
          <TabPane  name="reserve" label="我的预定" icon="ios-clock-outline">
            <book_list list_type="reserve"></book_list>
          </TabPane>
          <TabPane  name="reading" label="已借书籍" icon="ios-paper">
            <book_list list_type="reading"></book_list>
          </TabPane>
          <TabPane  name="history" label="借阅历史" icon="android-time">
            <book_list list_type="history"></book_list>
          </TabPane>

        </Tabs>
      </div>
      <div>
      </div>
    </div>
</template>

<script>
import './personalCenter.scss'
import userIfno from './userInfo/userInfo.vue'
import book_list from '../../book-list/book-list.vue'
import prefectInfo from '../../signinAndUp/regist_sec.vue'
    export default{
        data(){
            return {
                ss:SAVEINFO
            }
        },
        computed:{
        },
        components: {
            'userIfno':userIfno,
            'book_list': book_list,
            'prefectInfo':prefectInfo,
        },
        created(){
        },
        mounted(){


        },
        methods: {
          changeVal(val){
              if(val==='collect'){
                  console.log(SAVEINFO)
              }
          }
        }
    }
</script>
