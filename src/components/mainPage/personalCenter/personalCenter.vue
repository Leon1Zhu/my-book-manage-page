<template>
    <div class="personal-center">
      <div class="menu-content">
        <Tabs>
          <TabPane label="我的信息" icon="ios-person-outline">
            <userIfno></userIfno>
          </TabPane>
          <TabPane label="我的收藏" icon="star">
            <book_list list_type="collect"></book_list>
          </TabPane>
          <TabPane label="我的预定" icon="ios-clock-outline">
            <book_list list_type="reserve"></book_list>
          </TabPane>
          <TabPane label="已借书籍" icon="ios-paper">
            <book_list list_type="reading"></book_list>
          </TabPane>
          <TabPane label="借阅历史" icon="android-time">
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
    export default{
        data(){
            return {}
        },
        components: {
            'userIfno':userIfno,
            'book_list': book_list,
        },
        created(){
        },
        mounted(){
        },
        methods: {}
    }
</script>
