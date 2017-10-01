<template>
    <div class="main-page-introduce">
        <swiperIntroduce></swiperIntroduce>
        <recommendCommon :recommendTilele="title1" :bookinfo="bookData"></recommendCommon>

        <recommendCommon :recommendTilele="title2" :bookinfo="bookData"></recommendCommon>
    </div>
</template>

<script>
import swiperIntroduce from './swiperIntroduce/swiperIntroduce.vue'
import recommendCommon from '../../common/recommendCommon/recommendCommon.vue'
    export default{
        data(){
            return {
                title1:"本馆推荐",
                title2:"借阅排行",
                bookData:[
                  {imgUrl:'http://localhost:8080/static/2.jpg',bookName:'这是第一本书',publish:"朱亮"},
                  {imgUrl:'http://localhost:8080/static/2.jpg',bookName:'这是第二本书',publish:"朱亮"},
                  {imgUrl:'http://localhost:8080/static/3.jpg',bookName:'这是第三本书',publish:"朱亮"},
                  {imgUrl:'http://localhost:8080/static/4.jpg',bookName:'这是第四本书',publish:"朱亮"},
                  {imgUrl:'http://localhost:8080/static/5.jpg',bookName:'这是第五本书',publish:"朱亮"},
                  {imgUrl:'http://localhost:8080/static/6.jpg',bookName:'这是第六本书',publish:"朱亮"},
                  {imgUrl:'http://localhost:8080/static/7.jpg',bookName:'这是第七本书',publish:"朱亮"},
                  {imgUrl:'http://localhost:8080/static/8.jpg',bookName:'这是第八本书',publish:"朱亮"},
                  {imgUrl:'http://localhost:8080/static/9.jpg',bookName:'这是第九本书',publish:"朱亮"},
                  {imgUrl:'http://localhost:8080/static/10.jpg',bookName:'这是第十本书',publish:"朱亮"},

                ]
            }
        },
        components: {
            'swiperIntroduce':swiperIntroduce,
             'recommendCommon':recommendCommon,
        },
        created(){
        },
        mounted(){
        },
        methods: {}
    }
</script>
