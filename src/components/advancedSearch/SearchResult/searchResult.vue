<template>
    <div class="ExtraSearchResult">
      <Table stripe border :columns="columns1" :data="searchResult" ></Table>
     <!-- <div class="book-introduce-content" v-for="data in searchResult">
        <div class="book-name">书名:{{data.name | filterNull}}</div>
        <div class="book-item-info">
          <div  class="left-info">作者:{{data.author  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div class="left-info">文档类型:{{data.docType  | filterNull}}</div>
        </div>
        <div class="book-item-info"  v-if=" searchType === 'LEX'">
          <div   class="left-info">蓝思值:{{data.lexileCombined  | filterNull}}</div>
        </div>

        <div class="book-item-info" v-if=" searchType === 'ARSEARCH'">
          <div   class="left-info">AR积分值:{{data.arpoints  | filterNull}}</div>
        </div>
        <div class="book-item-info" v-if=" searchType === 'ARSEARCH'">
          <div   class="left-info">BL值:{{data.bl  | filterNull}}</div>
        </div>

        <div class="book-item-info" v-if=" searchType === 'LEX'" >
          <div class="left-info">图书系列:{{data.serise  | filterNull}}</div>
        </div>
        <div class="book-item-info" v-if=" searchType === 'ARSEARCH'">
          <div   class="left-info">兴趣值:{{data.il  | filterNull}}</div>
        </div>

        <div class="book-item-info" v-if=" searchType === 'LEX'" >
          <div class="left-info">页数:{{data.pages  | filterNull}}</div>
        </div>
        <div class="book-item-info" v-if=" searchType === 'ARSEARCH'">
          <div  class="left-info">AR测试号:{{data.quizNo  | filterNull}}</div>
        </div>
      </div>-->
    </div>
</template>

<script>
import './searchResult.scss'
import searchApi from '../../../api/advancedSearch'
    export default{
        data(){
            return {
                columns1: [
                  {
                    title: '书名',
                    key: 'name'
                  },
                  {
                    title: '作者',
                    key: 'author'
                  },
                  {
                    title: '文档类型',
                    key: 'docType',
                  },
                  {
                    title: 'AR积分值',
                    key: 'arpoints'
                  },
                  {
                    title: 'BL值',
                    key: 'bl'
                  },
                  {
                    title: '兴趣值',
                    key: 'il'
                  },
                  {
                    title: 'AR测试号',
                    key: 'quizNo',
                  },
                  {
                    title: '图书系列',
                    key: 'serise'
                  }
                ],
                searchData:null,
               /* searchType:null,*/
                searchResult:[],
            }
        },
        components: {},
        created(){
            var vm = this;
            vm.searchData =JSON.parse(vm.$route.query.searchContent);
            vm.searchType = vm.$route.query.type;
            vm.ARSEARCH();
           /* if(vm.searchType=="ARSEARCH"){
              vm.ARSEARCH();
            }else if(vm.searchType=="LEX"){
              vm.LEXSEARCH();
            }*/
        },
        mounted(){
        },
        methods: {
            ARSEARCH(){
                var that = this;
                searchApi.arBookSearchList(this.searchData).then((response)=>{
                    this.searchResult = response.data.content
                    this.searchResult.forEach((item,index)=>{
                       item.docType = this.$filterDocType(item.docType)
                    })
                }).catch((response) => {

                })
            },
            LEXSEARCH(){
              searchApi.lexBookSearchList(this.searchData).then((response)=>{
                this.searchResult = response.data.content
              }).catch((response) => {

              })
            }
        },
    }
</script>
