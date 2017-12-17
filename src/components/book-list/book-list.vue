<template>
    <div class="book-list">
        <div class="">
          <div class=" book-list-content">
            <div class="result-size">
              <span  v-if="total>0 && list_type!='collect' && list_type!='reserve' ">
                {{total}}条结果
              </span>
              <span  v-if="list_type=='collect' && saveInfo.length >1">
                {{saveInfo.length-1}}条结果
              </span>
              <span  v-if="list_type=='reserve' && orderInfo.length >1">
                {{orderInfo.length-1}}条结果
              </span>
              <div class="no-book-class"  v-if="total==0 && list_type!='collect' && list_type!='reserve' ">
                暂无对应数据结果!
              </div>
              <div  class="no-book-class" v-if="list_type=='collect' && saveInfo.length==1">
                暂无对应数据结果!
              </div>
              <div class="no-book-class" v-if="list_type=='reserve' && orderInfo.length==1">
                暂无对应数据结果!
              </div>
              <Page class="page page-top" :current="index+1"  v-if="list_type==''" :total="total" size="small" show-total :page-size="pageSize" @on-change="changepage"></Page>
            </div>
            <div class="book-item" v-for="data in saveInfo" v-if="list_type=='collect'  && saveInfo.length>1">
            <list_content v-if="data.id!=-1"  @reservBook="reservBookP" :data="data.saveBookInfo" :list_type="list_type"></list_content>
          </div>
            <div class="book-item" v-for="data in orderInfo" v-if="list_type=='reserve'  && orderInfo.length>1">
              <list_content v-if="data.id!=-1" @collectBook="collectBookP" :data="data.orderBookInfo" :list_type="list_type"></list_content>
            </div>
            <div class="book-item" v-for="data in content" v-if=" list_type!='reserve' && list_type!='collect'">
              <list_content :data="data" :list_type="list_type"></list_content>
            </div>
            <div class="page-relative">
              <Page v-if="total>0 && list_type==''" :current="index+1" class="page page-bottom"   :total="total" size="small" show-total :page-size="pageSize" @on-change="changepage"></Page>
            </div>
          </div>

        </div>
    </div>
</template>

<script>
import './book-list.scss'
import bookManageApi from '../../api/bookManage'
import list_content from './list-content.vue'
    export default{
        props: {
          list_type: {
            default: '',
          },
        },
        data(){
            return {
              index:0,
              total:0,
              pageSize:5,
              content:[],
              booklimit:10,
              saveInfo:SAVEINFO,
              orderInfo:ORDERINFO,
              searchValue:this.$route.query.searchValue,
            }
        },
      computed:{
      },
        components: {
            'list_content':list_content,
        },
        created(){
          var vm = this;
          vm.handleSpinCustom();
        },
        watch:{
          '$route.query.searchValue'(v1,v2){
              if(this.list_type == ""){
                  this.index = 0 ;
                  this.total = 0;
                  this.searchBook();
              }
          },
          '$route.query.booktype'(v1,v2){
            if(this.list_type == ""){
              this.index = 0 ;
              this.total = 0;
              this.searchBook();
            }
          }
        },
        mounted(){
        },
        methods: {
          reservBookP(val){
              if(this.orderInfo.length==0)this.orderInfo = [];
            this.$set(this.orderInfo,this.orderInfo.length,val)
          },
          collectBookP(val){
            if(this.saveInfo.length == 0)this.saveInfo = [];
            this.$set(this.saveInfo,this.saveInfo.length-1,val)
          },
          handleSpinCustom () {
            var that =this;

            let type = that.list_type == '' ? LISTTYPE :that.list_type;
            switch(type){
              case 'advancedSearch' :  that.advancedSearch();break;
              case 'search' :  that.searchBook();break;
              case 'history' :  that.getHARBook('historyBook');break;
              case 'reading' :  that.getHARBook('readingBook');break;

            }
          },
          advancedSearch(){
              var that = this;
              bookManageApi.advancedSearch(that.index,that.pageSize).then((response) =>{
                  that.total = parseInt(response.data.total);
                  that.content = response.data.content;

              }).catch((response)=>{
                that.$Notice.error(setNoticConfig("获取书籍列表出错！",null,null,"error"));
              })
          },
          searchBook(){
              var that = this;
              let type = that.$route.query.booktype
              let value = that.$route.query.searchValue ?  that.$route.query.searchValue:""
              bookManageApi.searchBook(type,value,that.index,that.pageSize).then((response) =>{
              that.total = parseInt(response.data.totalElements);
              that.content = response.data.content;
              }).catch((response)=>{
                that.$Notice.error(setNoticConfig("获取书籍列表出错！",null,null,"error"));
              })
          },
          changepage(val){
              let that = this;
              that.index = parseInt(val)-1;
              if(LISTTYPE == 'advancedSearch' )that.advancedSearch();
              else if(LISTTYPE == 'search')that.searchBook();
          },
          getOrderBookList(){
              if(isNull(this.orderInfo))return;
              let orderBookInfo = this.orderInfo;
              this.setContent(orderBookInfo,"orderBookInfo");
          },
          getSaveInfo(){
              if(isNull(this.saveInfo))return;
              let orderBookInfo = this.saveInfo;
              this.setContent(orderBookInfo,"saveBookInfo");

          },
          setContent(val,obj){
            let i =0,len = val.length;
            this.total = len;
            for(i;i<len;i++){
              this.content[i] = val[i][obj];
            }
          },
          getHARBook(val){
              if(!isNull(RAHBOOK)){
                  this.content = RAHBOOK[''+val+'']
                  this.total =  this.content.length
              }
          },
        }
    }
</script>
