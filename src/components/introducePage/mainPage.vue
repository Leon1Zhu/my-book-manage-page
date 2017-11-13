<template>
    <div class="main-page-introduce">
        <swiperIntroduce></swiperIntroduce>
        <recommendCommon :recommendTilele="title1" :bookinfo="bookData"></recommendCommon>
      <!--  <div class="img-content container_12">
          <a><img style="height: 84px;width: 42%;" class="animateClass" src="../../assets/untitled.png"></a>
          <a><img class="animateClass" src="../../assets/lexile-logo.png"></a>
        </div>-->
        <recommendCommon :recommendTilele="title2" :bookinfo="borrowData"></recommendCommon>
    </div>
</template>

<script>
import swiperIntroduce from './swiperIntroduce/swiperIntroduce.vue'
import recommendCommon from '../../common/recommendCommon/recommendCommon.vue'
import bookMangeApi from '../../api/bookManage'
import './mainPage.scss'
    export default{
        data(){
            return {
                title1:"本馆推荐",
                title2:"借阅排行",
                bookData:null,
                borrowData:null,
            }
        },
        components: {
            'swiperIntroduce':swiperIntroduce,
             'recommendCommon':recommendCommon,
        },
        created(){
            var vm= this;
            vm.getRecommendBook();
        },
        mounted(){
        },
        methods: {
            getRecommendBook(){
                var that =this;
                 bookMangeApi.getRecommendBook().then((response)=>{
                    that.bookData = response.data.recommendList.content;
                    that.borrowData = response.data.borrowList
                }).catch((response)=>{
                   this.$Notice.error(setNoticConfig(response.message,null,null,"error"));
                })
            },
        }
    }
</script>
