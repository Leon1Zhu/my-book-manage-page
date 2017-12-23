<template>
  <div class="ExtraSearchResult">
    <Table stripe border :columns="columns1" :data="searchResult"  ></Table>
    <!-- <div class="book-introduce-content" v-for="data in searchResult">



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
            title: '蓝思值',
            key: 'lexileCombined'
          },
          {
            title: '图书系列',
            key: 'serise'
          },
          {
            title: '页数',
            key: 'pages'
          }
        ],
        searchData:null,
        searchResult:[],
      }
    },
    components: {},
    created(){
      var vm = this;
      vm.searchData =JSON.parse(vm.$route.query.searchContent);
      vm.searchType = vm.$route.query.type;
      vm.LEXSEARCH();
    },
    mounted(){
    },
    methods: {
      LEXSEARCH(){
        searchApi.lexBookSearchList(this.searchData).then((response)=>{
          this.searchResult = response.data.content
        }).catch((response) => {

        })
      }
    },
  }
</script>
