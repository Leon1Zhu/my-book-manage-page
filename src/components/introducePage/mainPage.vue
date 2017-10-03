<template>
    <div class="main-page-introduce">
        <swiperIntroduce></swiperIntroduce>
        <recommendCommon :recommendTilele="title1" :bookinfo="bookData"></recommendCommon>
        <div class="img-content container_12">
          <a><img class="animateClass" src="../../assets/untitled.png"></a>
          <a><img class="animateClass" src="../../assets/lexile-logo.png"></a>
        </div>
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
                  {imgUrl:IMGURL+'9780001821743.jpg',bookName:'这是第一本书',publish:"朱亮"},
                  {imgUrl:IMGURL+'0015012837889.jpg',bookName:'这是第二本书',publish:"朱亮"},
                  {imgUrl:IMGURL+'9780001953796.jpg',bookName:'这是第三本书',publish:"朱亮"},
                  {imgUrl:IMGURL+'9780002251785.jpg',bookName:'这是第四本书',publish:"朱亮"},
                  {imgUrl:IMGURL+'9780020418207.jpg',bookName:'这是第五本书',publish:"朱亮"},
                  {imgUrl:IMGURL+'9780020418306.jpg',bookName:'这是第六本书',publish:"朱亮"},
                  {imgUrl:IMGURL+'9780020420309.jpg',bookName:'这是第七本书',publish:"朱亮"},
                  {imgUrl:IMGURL+'9780020419204.jpg',bookName:'这是第八本书',publish:"朱亮"},
                  {imgUrl:IMGURL+'9780020421207.jpg',bookName:'这是第九本书',publish:"朱亮"},
                  {imgUrl:IMGURL+'9780020421504.jpg',bookName:'这是第十本书',publish:"朱亮"},

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
