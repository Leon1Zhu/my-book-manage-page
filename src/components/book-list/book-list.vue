<template>
    <div class="book-list">
        <div class="container_12">
          <div class="grid_12 book-list-content">
            <div class="result-size">
               {{resultData.length}}条匹配结果
            </div>
            <div class="book-item" v-for="data in resultData">
              <div class="book-img"><div class="bottom-content"><img :src="imgUrl+'9780001821743.jpg'"></div></div>
              <div class="book-introduce-content">
                  <div class="book-name">Don't Let The Pigeon Drive The Bus! </div>
                  <div class="book-item-info">
                    <div class="left-info">作者:Wllems,Mo</div>
                    <div class="right-info">BL纳:3.4</div>
                  </div>
                  <div class="book-item-info">
                    <div class="left-info">ISBN13:97812345678</div>
                    <div class="right-info">兴趣值:LG(k-3)</div>
                  </div>
                  <div class="book-item-info">
                    <div class="left-info">ISBN10:1234567890</div>
                    <div class="right-info">积分点:15.0</div>
                  </div>
                  <div class="book-item-info">
                    <div class="left-info">类型:Flctiono</div>
                    <div class="right-info">评分值:3.5</div>
                  </div>
                  <div class="book-item-info">
                    <div class="left-info">页数:576</div>
                    <div class="right-info">测试号:98765</div>
                  </div>
                  <div class="book-item-info">
                    <div class="left-info">版本:精装版本</div>
                    <div class="right-info">蓝思值:IG1035L</div>
                  </div>
                  <div class="book-item-info">
                    <div class="left-info">重量:850克</div>
                    <div class="right-info">系列IS:</div>
                  </div>
                  <div class="book-item-info">
                    <div class="left-info">尺寸:12.9cm*13.0cm*1.5cm</div>
                    <div class="right-info">价格:￥13.5</div>
                  </div>
                <div class="book-item-info">
                  <div class="left-info">
                    <Button type="info" >预定</Button>
                  </div>
                  <div class="right-info">
                    <Button type="success" >收藏</Button>
                  </div>
                </div>
              </div>
              <div class="book-sign-img">
                 <div class="sign-img-content">
                   <img src="../../assets/ARLogo.png">
                 </div>
                  <div class="sign-img-content">
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
    export default{
        data(){
            return {
                resultData:SEARCHRESULT,
                imgUrl:IMGURL,
            }
        },
        components: {},
        created(){
            var vm = this;

        },
        mounted(){
        },
        methods: {}
    }
</script>
