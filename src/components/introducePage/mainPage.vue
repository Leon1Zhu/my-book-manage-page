<template>
    <div class="main-page-introduce">
        <swiperIntroduce></swiperIntroduce>
        <recommendCommon :showpage="showpage" :index="index" :total="total" :pageSize="pageSize"  :recommendTilele="title1" :bookinfo="bookData" @changepage="changepageRecommend"></recommendCommon>
      <!--  <div class="img-content container_12">
          <a><img style="height: 84px;width: 42%;" class="animateClass" src="../../assets/untitled.png"></a>
          <a><img class="animateClass" src="../../assets/lexile-logo.png"></a>
        </div>-->
        <recommendCommon :showpage="showpage"  :index="indexBorrow" :total="totalBorrow" :pageSize="pageSizeBorrow" :recommendTilele="title2" :bookinfo="borrowData"  @changepage="changepageBorrow"></recommendCommon>
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
                index:0,
                total:0,
                pageSize:10,
                showpage:true,
                indexBorrow:0,
                totalBorrow:0,
                pageSizeBorrow:10,
            }
        },
        components: {
            'swiperIntroduce':swiperIntroduce,
             'recommendCommon':recommendCommon,
        },
        created(){
            var vm= this;
            vm.getRecommendBook();
            vm.getBorrowCount();
        },
        mounted(){
        },
        methods: {
          changepageRecommend(val){
            this.index = val;
            this.getRecommendBook()
          },
          changepageBorrow(val){
              this.indexBorrow = val;
              this.getBorrowCount()
          },
          getRecommendBook(){
                let that =this;
                 bookMangeApi.getRecommendBook(that.index,that.pageSize).then((response)=>{
                    that.bookData = response.data.content;
                    that.total = response.data.totalElements
                })
            },
            getBorrowCount(){
               let that = this;
               bookMangeApi.getBorrowRecomend(that.indexBorrow,that.pageSizeBorrow).then((response) => {
                   that.borrowData = response.data.borrowRecommendList
                   that.totalBorrow = response.data.total

               })
            }
        }
    }
</script>
