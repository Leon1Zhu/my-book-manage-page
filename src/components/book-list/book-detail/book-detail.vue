<template>
    <div id="book-detail">
      <div class="container_12">
        <div class="grid_12">
          <div class="book-info-content">
            <div class="left-img">
               <div class="bottom-content">
                 <img v-if="data.iSBN13" :src="imgUrl+data.iSBN13+'.jpg'">
                 <img v-if="data.iSBN10 && !data.iSBN13" :src="imgUrl+data.iSBN10+'.jpg'">
               </div>
            </div>
            <div class="book-introduce-content ">
              <div class="book-name font-content">{{data.name | filterNull}}</div>
              <div class="book-item-info font-content">
                <div class="left-info">作者:{{data.author  | filterNull}}</div>
                <div class="right-info">BL值:{{data.bl  | filterNull}}</div>
              </div>
              <div class="book-item-info font-content">
                <div class="left-info">ISBN13:{{data.iSBN13  | filterNull}}</div>
                <div class="right-info">兴趣值:{{data.il  | filterNull}}</div>
              </div>
              <div class="book-item-info font-content" >
                <div class="left-info">ISBN10:{{data.iSBN10  | filterNull}}</div>
                <div class="right-info">积分点:{{data.arpoints  | filterNull}}</div>
              </div>
              <div class="book-item-info font-content">
                <div class="left-info">类型:{{data.docType  | filterNull}}</div>
                <div class="right-info">评分值:{{data.arrating  | filterNull}}</div>
              </div>
              <div class="book-item-info font-content">
                <div class="left-info">页数:{{data.pages  | filterNull}}</div>
                <div class="right-info">测试号:{{data.quizNo  | filterNull}}</div>
              </div>
              <div class="book-item-info font-content">
                <div class="left-info">版本:{{data.bookType  | filterNull}}</div>
                <div class="right-info">蓝思值:{{data.lexileCombined  | filterNull}}</div>
              </div>
              <div class="book-item-info font-content">
                <div class="left-info">重量:{{data.weight | filterNull}}克</div>
                <div class="right-info">系列IS:{{data.series  | filterNull}}</div>
              </div>
              <div class="book-item-info font-content">
                <div class="left-info">尺寸:{{data.diamension  | filterNull}}</div>
                <div class="right-info">价格:{{data.book_type  | filterNull}}</div>
              </div>
              <div class="book-item-info font-content">
                <div class="left-info">是否有馆藏音频:{{data.audio ===1 ? "是":"否" }}</div>
              </div>
              <div class="book-item-info">
                <div class="left-info right-imgT">
                  <Poptip  class="sign-img-content"  trigger="hover" content="AR书籍" v-if="data.artag===1">
                      <img src="../../../assets/ARLogo.png">
                  </Poptip>
                  <Poptip class="sign-img-content"  trigger="hover" content="不具有AR属性" v-else>
                    <img src="../../../assets/ARlogo2.png">
                  </Poptip>
                </div>
                <div class="right-info left-imgT">
                  <Poptip class="sign-img-content" trigger="hover" content="蓝思书籍"  v-if="data.lexileTag===1">
                    <img src="../../../assets/lexile.png">
                  </Poptip>
                  <Poptip class="sign-img-content"  trigger="hover" content="不具有蓝思属性"  v-else>
                    <img src="../../../assets/lexile2.png">
                  </Poptip>
                </div>

                <!--<div class="right-info left-imgT">-->
                  <!--<Poptip class="sign-img-content" trigger="hover" content="具有配套音频"  v-if="data.audio===1">-->
                    <!--<img src="../../../assets/audio.jpg">-->
                  <!--</Poptip>-->
                  <!--<Poptip  class="sign-img-content"  trigger="hover" content="不具有配套音频"  v-else>-->
                    <!--<img src="../../../assets/audio-no-color.jpg">-->
                  <!--</Poptip>-->
                <!--</div>-->
              </div>


              <div class="book-item-info">
                <div class="left-info">
                  <Button type="info"  @click="$reserveBook(data)" long>预定</Button>
                </div>
                <div class="right-info">
                  <Button type="success"  @click="$collectBook(data)" long>收藏</Button>
                </div>
              </div>
            </div>

          </div>
          <div class="introduce-content">
            <Tabs type="card" >
              <TabPane label="书籍简介" >{{data.introduction | filterNull}}</TabPane>
              <TabPane label="评论1"   >{{data.review1 | filterNull}}</TabPane>
              <TabPane label="评论2"  >{{data.review2 | filterNull}}</TabPane>
            </Tabs>
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
