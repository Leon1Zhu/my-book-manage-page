<template>
    <div class="ExtraSearchResult">
      <div class="book-introduce-content" v-for="data in searchResult">
        <div class="book-name">书名:{{data.name | filterNull}}</div>
        <div class="book-item-info">
          <div  class="left-info">作者:{{data.author  | filterNull}}</div>
          <div class="left-info">文档类型:{{data.docType  | filterNull}}</div>

        </div>
        <div class="book-item-info">
          <div   v-if=" searchType === 'LEX'" class="right-info">蓝思值:{{data.lexileCombined  | filterNull}}</div>
          <div  v-if=" searchType === 'ARSEARCH'" class="right-info">AR积分值:{{data.arpoints  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div  v-if=" searchType === 'ARSEARCH'" class="right-info">BL值:{{data.bl  | filterNull}}</div>
          <div v-if=" searchType === 'LEX'" class="right-info">图书系列:{{data.series  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div  v-if=" searchType === 'ARSEARCH'" class="right-info">兴趣值:{{data.il  | filterNull}}</div>
          <div v-if=" searchType === 'LEX'" class="left-info">页数:{{data.pages  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div v-if=" searchType === 'ARSEARCH'" class="right-info">AR测试号:{{data.quizNo  | filterNull}}</div>
        </div>
      </div>
    </div>
</template>

<script>
import './searchResult.scss'
import searchApi from '../../../api/advancedSearch'
    export default{
        data(){
            return {
                searchData:null,
                searchType:null,
                searchResult:null,
            }
        },
        components: {},
        created(){
            var vm = this;
            vm.searchData =JSON.parse(vm.$route.query.searchContent);
            vm.searchType = vm.$route.query.type;
            if(vm.searchType=="ARSEARCH"){
              vm.ARSEARCH();
            }else if(vm.searchType=="LEX"){
              vm.LEXSEARCH();
            }
        },
        mounted(){
        },
        methods: {
            ARSEARCH(){
                searchApi.arBookSearchList(this.searchData).then((response)=>{
                    this.searchResult = response.data.content
                }).catch((response) => {

                })
            },
            LEXSEARCH(){
              searchApi.lexBookSearchList(this.searchData).then((response)=>{
                this.searchResult = response.data.content
              }).catch((response) => {

              })
            }
        }
    }
</script>
