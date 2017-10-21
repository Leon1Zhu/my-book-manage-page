<template>
    <div class="book-list">
        <div class="">
          <div class=" book-list-content">
            <div class="result-size">
              <span  v-if="total>0">
                {{total}}条结果
              </span>
              <div class="no-book-class"  v-if="total==0">
                暂无对应数据结果!
              </div>
             <!-- <span  v-if="list_type=='collect'">
                {{total}}条收藏记录
              </span>
              <span  v-if="list_type=='reserve'">
                 {{total}}条预定记录
              </span>
              <span  v-if="list_type=='history'">
                 {{total}}条借阅历史记录
              </span>

              <span  v-if="list_type=='reading'">
                 {{total}}条已借书籍记录
              </span>-->

              <Page  v-if="list_type==''" :total="total" size="small" show-total :page-size="pageSize" @on-change="changepage"></Page>
            </div>
            <div class="book-item" v-for="data in content">
              <div class="book-img"><div class="bottom-content"><img :src="imgUrl+'9780001821743.jpg'"></div></div>
              <div class="book-introduce-content">
                  <div class="book-name">{{data.name}}</div>
                  <div class="book-item-info">
                    <div class="left-info">作者:{{data.author}}</div>
                    <div class="right-info">BL值:{{data.bl}}</div>
                  </div>
                  <div class="book-item-info">
                    <div class="left-info">ISBN13:{{data.iSBN13}}</div>
                    <div class="right-info">兴趣值:{{data.il}}</div>
                  </div>
                  <div class="book-item-info">
                    <div class="left-info">ISBN10:{{data.iSBN10}}</div>
                    <div class="right-info">积分点:{{data.arpoints}}</div>
                  </div>
                  <div class="book-item-info">
                    <div class="left-info">类型:{{data.docType}}</div>
                    <div class="right-info">评分值:{{data.arrating}}</div>
                  </div>
                  <div class="book-item-info">
                    <div class="left-info">页数:{{data.pages}}</div>
                    <div class="right-info">测试号:{{data.quizNo}}</div>
                  </div>
                  <div class="book-item-info">
                    <div class="left-info">版本:{{data.bookType}}</div>
                    <div class="right-info">蓝思值:{{data.lexileCombined}}</div>
                  </div>
                  <div class="book-item-info">
                    <div class="left-info">重量:{{data.weight}}</div>
                    <div class="right-info">系列IS:{{data.series}}</div>
                  </div>
                  <div class="book-item-info">
                    <div class="left-info">尺寸:{{data.diamension}}</div>
                    <div class="right-info">价格:{{data.book_type}}</div>
                  </div>
                <div class="book-item-info">
                  <div class="left-info" v-if="list_type!='reserve' && list_type!='reading'">
                    <Button type="info" >预定</Button>
                  </div>
                  <div class="right-info" v-if="roterType=='search' || roterType=='advancedSearch' || list_type=='reserve' || list_type=='reading'">
                    <Button type="success" >收藏</Button>
                  </div>
                  <div class="right-info" v-if="list_type=='collect'">
                    <Button type="error" >删除</Button>
                  </div>
                </div>
              </div>
              <div class="book-sign-img">
                 <div class="sign-img-content" v-if="data.artag">
                   <img src="../../assets/ARLogo.png">
                 </div>
                  <div class="sign-img-content" v-if="data.lexile_tag">
                    <img src="../../assets/lexile.png">
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import './book-list.scss'
import bookManageApi from '../../api/bookManage'
    export default{
        props: {
          list_type: {
            default: '',
          },
        },
        data(){
            return {
              roterType:LISTTYPE,
              imgUrl:IMGURL,
              index:0,
              total:0,
              pageSize:5,
              content:[],
            }
        },
        components: {},
        created(){
          var vm = this;
          vm.handleSpinCustom();
        },
        mounted(){
        },
        methods: {
          handleSpinCustom () {
            var that =this;
            this.$Spin.show({
              render: (h) => {
                return h('div', [
                  h('Icon', {
                    'class': 'demo-spin-icon-load',
                    props: {
                      type: 'load-c',
                      size: 28
                    }
                  }),
                  h('div', '拼命加载中')
                ])
              }
            });
            let type = that.list_type == '' ? LISTTYPE :that.list_type;
            switch(type){
              case 'advancedSearch' :  that.advancedSearch();break;
              case 'search' :  that.searchBook();break;
              case 'collect' :  that.getSaveInfo();break;
              case 'reserve' :  that.getOrderBookList();break;
              case 'history' :  that.getHARBook('historyBook');break;
              case 'reading' :  that.getHARBook('readingBook');break;

            }
            this.$Spin.hide();
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
              if(isNull(USERINFO))return;
              let orderBookInfo = USERINFO.orderInfo;
              this.setContent(orderBookInfo,"orderBookInfo");
          },
          getSaveInfo(){
              if(isNull(USERINFO))return;
              let orderBookInfo = USERINFO.saveInfos;
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
          }
        }
    }
</script>
