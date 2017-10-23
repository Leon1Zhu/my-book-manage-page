<template>
    <div class="recommend-common">
        <div class="container_12">
            <div class="recommend-content">
              <div class="title">{{recommendTilele}}</div>
              <div class="bookContent">
                <div v-for="book in bookinfo" class="book-info-content">
                  <div class="botton-content">
                    <img :src="imgurl+'9780002251785.jpg'">
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
            this.$reserveBook(data);
          },
          collectBook(data){
            this.$collectBook(data);
          },
        }
    }
</script>
