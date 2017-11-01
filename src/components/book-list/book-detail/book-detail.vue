<template>
    <div id="book-detail">
      <div class="container_12">
        <div class="grid_12">
          <div class="book-info-content">
            <div class="left-img">
               <div class="bottom-content"><img  :src="imgUrl+'9780001821743.jpg'"></div>
            </div>
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
                <div class="left-info">
                  <div class="sign-img-content" v-if="data.artag">
                    <img src="../../../assets/ARLogo.png">
                  </div>
                </div>
                <div class="right-info">
                  <div class="sign-img-content" v-if="data.lexileTag">
                    <img src="../../../assets/lexile.png">
                  </div>
                </div>
              </div>






              <div class="book-item-info">
                <div class="left-info">
                  <Button type="info"  @click="$reserveBook(data)">预定</Button>
                </div>
                <div class="right-info">
                  <Button type="success"  @click="$collectBook(data)">收藏</Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
import './book-detail.scss'
import bookApi from '../../../api/bookManage'
    export default{
        data(){
            return {
                data:null,
                bookid:null,
                imgUrl:IMGURL,
            }
        },
        components: {},
        created(){
            var vm = this;
            vm.bookid = vm.$route.query.bookid
            vm.getbookinfo();
        },
        mounted(){
        },
        methods: {
          getbookinfo(){
              var that = this;
              bookApi.findOneBook(that.bookid).then((response)=>{
                  that.data = response.data
              }).catch((response)=>{
                that.$Notice.error(setNoticConfig(response.message,null,null,"error"));
              })
          }
        }
    }
</script>
