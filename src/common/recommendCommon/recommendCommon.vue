<template>
    <div class="recommend-common">
        <div class="container_12">
            <div class="recommend-content">
              <div class="title">
                <span>{{recommendTilele}}</span>
                <Page  v-if="showpage" :total="total" size="small" show-total :page-size="pageSize" @on-change="changepage"></Page>
              </div>
              <div class="bookContent">
                <div v-for="book in bookinfo" class="book-info-content">
                  <div class="botton-content">
                    <Poptip class="sign-img-content book-poptip"  trigger="hover" content="点击封面查看详情"  >
                      <img @click="getDetailInfo(book.id)" v-if="book.iSBN13" :src="imgurl+book.iSBN13+'.jpg'">
                      <img @click="getDetailInfo(book.id)" v-if="book.iSBN10 && !book.iSBN13" :src="imgurl+book.iSBN10+'.jpg'">
                    </Poptip>
                    <!--<img v-if="book.iSBN13!=0 && book.iSBN13!=null" :src="imgurl+book.iSBN13">-->
                    <div class="book-info book-name">{{book.name}}</div>
                    <div class="book-info book-publish">{{book.author}}</div>
                    <div class="book-info"><Button type="info" size="small"  @click="reserveBook(book)">预定</Button> <Button type="success" size="small" @click="collectBook(book)">收藏</Button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </div>
</template>

<script>
import './recommendCommon.scss'
import bookManageApi from '../../api/bookManage'
    export default{
        props:['recommendTilele','bookinfo','showpage','index','total','pageSize'],
        data(){
            return {
                imgurl:IMGURL,
            }
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {
          changepage(val){
              this.$emit('changepage',(parseInt(val)-1))
          },
          getDetailInfo(id){
            this.$router.push({ path: '/book_detail', query: { bookid: id }})
          },
          reserveBook(data){
            this.$reserveBook(data)/*.then((response)=>{
              this.$emit('reservBook',response)
            })*/
          },
          collectBook(data){
            this.$collectBook(data)/*.then((response)=>{
              this.$emit('collectBook',response)
            })*/
          },
        }
    }
</script>
