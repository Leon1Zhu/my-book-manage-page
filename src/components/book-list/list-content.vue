<template>


    <div class="temp_class" >
      <div class="book-img">
        <div class="bottom-content">
          <Poptip class="sign-img-content book-poptip"  trigger="hover" content="点击封面查看详情"  >
            <img  @click="getDetailInfo" v-if="data.iSBN13" :src="imgUrl+  data.iSBN13+'.jpg'">
            <img  @click="getDetailInfo" v-if="data.iSBN10 && !data.iSBN13" :src="imgUrl+data.iSBN10+'.jpg'">
          </Poptip>
      </div></div>

      <div class="book-introduce-content">
        <div class="book-name">{{data.name | filterNull}}</div>
        <div class="book-item-info">
          <div class="left-info">作者:{{data.author  | filterNull}}</div>
          <div class="left-info">版本:{{data.bookType  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div class="right-info">蓝思值:{{data.lexileCombined  | filterNull}}</div>
          <div class="left-info">书籍类型:{{data.docType  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div class="right-info">BL值:{{data.bl  | filterNull}}</div>
          <div class="right-info">图书系列:{{data.series  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div class="right-info">兴趣值:{{data.il  | filterNull}}</div>
          <div class="left-info">页数:{{data.pages  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div class="right-info">AR积分点:{{data.arpoints  | filterNull}}</div>
          <div class="left-info">重量:{{data.weight | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div class="right-info">AR推荐值:{{data.arrating  | filterNull}}</div>
          <div class="left-info">在库数量:{{data.stock | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div class="right-info">AR测试号:{{data.quizNo  | filterNull}}</div>
          <div class="right-info">价格:{{data.book_type  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div class="left-info" v-if="list_type!='reserve' && list_type!='reading'">
            <Button type="info"  @click="$reserveBook(data)">预定</Button>
          </div>
          <div class="right-info" v-if="list_type!='collect'">
            <Button type="success"  @click="$collectBook(data)">收藏</Button>
          </div>
          <div class="right-info" v-if="list_type=='collect'">
            <Button type="error" @click="deletesave(data)">删除</Button>
          </div>
          <div class="right-info" v-if="list_type=='reserve'">
            <Button type="error"  @click="deleteOrder(data)" >删除</Button>
          </div>
        </div>
      </div>
      <div class="book-sign-img">
        <Poptip  class="sign-img-content"  trigger="hover" content="AR书籍" v-if="data.artag===1 || data.artag">
            <img src="../../assets/ARLogo.png">
        </Poptip>
        <Poptip class="sign-img-content"  trigger="hover" content="不具有AR属性" v-else>
            <img src="../../assets/ARlogo2.png">
        </Poptip>
        <Poptip class="sign-img-content" trigger="hover" content="蓝思书籍"  v-if="data.lexileTag===1 || data.lexileTag">
            <img src="../../assets/lexile.png">
        </Poptip>
        <Poptip class="sign-img-content"  trigger="hover" content="不具有蓝思属性"  v-else>
            <img src="../../assets/lexile2.png">
        </Poptip>
      <!--  <Poptip class="sign-img-content" trigger="hover" content="具有配套音频"  v-if="data.audio===1 || data.audio">
            <img src="../../assets/audio.jpg">
        </Poptip>
        <Poptip  class="sign-img-content"  trigger="hover" content="不具有配套音频"  v-else>
            <img src="../../assets/audio-no-color.jpg">
        </Poptip>-->
      </div>
    </div>
</template>

<script>
  import bookManageApi from '../../api/bookManage'
    export default{
       props:{
           data:{
              default:null,

           },
         list_type:{
           default:'',

         }
       },
        data(){
            return {
              roterType:LISTTYPE,
              imgUrl:IMGURL,
              limit:10
            }
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {
          getDetailInfo(){
            this.$router.push({ path: '/book_detail', query: { bookid: this.data.id }})
          },
          deletesave(data){
            let that = this;
            if(!isLoginFun())return;
            this.$Modal.confirm({
              title: '书记收藏删除确认',
              content: '确认删除对于书籍['+data.name+']的收藏吗？',
              onOk: () => {
                bookManageApi.deleteSaveBook(USERINFO.id,data.id).then((response)=>{
                  removeSaveBook(data.id);
                  /*that.content = that.filterArry(that.content,data.id);*/
                  that.total--;
                  that.$Notice.success(setNoticConfig('删除收藏成功！',null,null,"success"));
                }).catch((response)=>{
                  that.$Notice.error(setNoticConfig(response.message,null,null,"error"));
                })
              }
            });
          },
          deleteOrder(data){
            let that = this;
            if(!isLoginFun())return;
            this.$Modal.confirm({
              title: '书记预定删除确认',
              content: '确认删除对于书籍['+data.name+']的预定吗？',
              onOk: () => {
                bookManageApi.deleteOrderBook(USERINFO.id,data.id).then((response)=>{
                  removeOrderBook(data.id);
                  that.total--;
                  /*that.content = that.filterArry(that.content,data.id);*/
                  that.$Notice.success(setNoticConfig('删除预定成功！',null,null,"success"));
                }).catch((response)=>{
                  that.$Notice.error(setNoticConfig(response.message,null,null,"error"));
                })
              }
            });
          },
          filterArry(arr,value){
            let len = arr.length
            for(let i = 0 ;i<len;i++){
              if(arr[i].id == value){
                arr.splice(i,1);
              }
              break;
            }
            return arr;
          },
        }
    }
</script>
