<template>
    <div class="recommend-common">
        <div class="container_12">
            <div class="recommend-content">
              <div class="title">{{recommendTilele}}</div>
              <div class="bookContent">
                <div v-for="book in bookinfo" class="book-info-content">
                  <div class="botton-content">
                    <img :src="book.imgUrl">
                    <div class="book-info book-name">{{book.bookName}}</div>
                    <div class="book-info book-publish">{{book.publish}}</div>
                    <div class="book-info"><Button type="info" size="small">预定</Button> <Button type="success" size="small">收藏</Button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </div>
</template>

<script>
import './recommendCommon.scss'
    export default{
        props:['recommendTilele','bookinfo'],
        data(){
            return {}
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {}
    }
</script>
