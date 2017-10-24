<template>


    <div class="temp_class" >
      <div class="book-img"><div class="bottom-content"><img :src="imgUrl+'9780001821743.jpg'"></div></div>

      <div class="book-introduce-content">
        <div class="book-name">{{data.name | filterNull}}</div>
        <div class="book-item-info">
          <div class="left-info">作者:{{data.author  | filterNull}}</div>
          <div class="right-info">BL值:{{data.bl  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div class="left-info">ISBN13:{{data.iSBN13  | filterNull}}</div>
          <div class="right-info">兴趣值:{{data.il  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div class="left-info">ISBN10:{{data.iSBN10  | filterNull}}</div>
          <div class="right-info">积分点:{{data.arpoints  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div class="left-info">类型:{{data.docType  | filterNull}}</div>
          <div class="right-info">评分值:{{data.arrating  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div class="left-info">页数:{{data.pages  | filterNull}}</div>
          <div class="right-info">测试号:{{data.quizNo  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div class="left-info">版本:{{data.bookType  | filterNull}}</div>
          <div class="right-info">蓝思值:{{data.lexileCombined  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div class="left-info">重量:{{data.weight | filterNull}}</div>
          <div class="right-info">系列IS:{{data.series  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div class="left-info">尺寸:{{data.diamension  | filterNull}}</div>
          <div class="right-info">价格:{{data.book_type  | filterNull}}</div>
        </div>
        <div class="book-item-info">
          <div class="left-info" v-if="list_type!='reserve' && list_type!='reading'">
            <Button type="info"  @click="reserveBook(data)">预定</Button>
          </div>
          <div class="right-info" v-if="list_type!='collect'">
            <Button type="success"  @click="collectBook(data)">收藏</Button>
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
        <div class="sign-img-content" v-if="data.artag">
          <img src="../../assets/ARLogo.png">
        </div>
        <div class="sign-img-content" v-if="data.lexile_tag">
          <img src="../../assets/lexile.png">
        </div>
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
          reserveBook(data){
            this.$reserveBook(data)
           /* let that = this;
            if(!isLoginFun())return;
            this.$Modal.confirm({
              title: '书记收藏确认',
              content: '确认预定书籍['+data.name+']吗？',
              onOk: () => {
                  bookManageApi.reserveBook(USERINFO.id,data.id,this.limit).then((response)=>{
                    orderNewBook(response.data);
                    that.$Notice.success(setNoticConfig('预定成功！',null,null,"success"));
                    this.$emit('reservBook',response.data)
                  }).catch((response)=>{
                    that.$Notice.error(setNoticConfig(response.message,null,null,"error"));
                  })

              }
            });*/



          },
          collectBook(data){
            this.$collectBook(data)
            /*let that = this;
            if(!isLoginFun())return;
            this.$Modal.confirm({
              title: '书记预定确认',
              content: '确认收藏书籍['+data.name+']吗？',
              onOk: () => {
                bookManageApi.collectBook(USERINFO.id,data.id).then((response)=>{
                  saveNewBook(response.data);
                  that.$Notice.success(setNoticConfig('收藏成功！',null,null,"success"));
                  this.$emit('collectBook',response.data)
                }).catch((response)=>{
                  that.$Notice.error(setNoticConfig(response.message,null,null,"error"));
                })
              }
            });*/

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
