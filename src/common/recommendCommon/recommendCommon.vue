<template>
    <div class="recommend-common">
        <div class="container_12">
            <div class="recommend-content">
              <div class="title">{{recommendTilele}}</div>
              <div class="bookContent">
                <div v-for="book in bookinfo" class="book-info-content">
                  <div class="botton-content">
                    <img v-if="book.iSBN13!=0 && book.iSBN13!=null" :src="imgurl+book.iSBN13+'.jpg'">
                    <img v-if="book.iSBN10!=0 && book.iSBN10!=null" :src="imgurl+book.iSBN10+'.jpg'">
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
        props:['recommendTilele','bookinfo'],
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
