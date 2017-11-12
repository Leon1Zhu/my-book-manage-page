<template>
    <div class="showNewsPage">
      <div class="container_12">
        <div class="grid_12">
          <div class="no-news-content" v-if="newsArr == null || newsArr.length == 0">
              <div class="content" >
                <Icon type="sad-outline"></Icon>
                <span>空空如也哦~</span>
              </div>
          </div>
            <div v-for="news in newsArr" v-else>
              <div class="tempContent">
                <div class="newTitle" @click="readNews(news.news_content)"> {{news.news_title}}</div>
                <div class="newTime">{{news.news_time | folterData}}</div>
              </div>
              <hr>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
    import './showNewsPage.scss'
    import bookManageApi from '../../api/bookManage'
    export default{
        props:{
          newsType:{
              default:""
          }
        },
        data(){
            return {
                newsArr:null,
            }
        },
        components: {},
        created(){
            var vm = this;
            vm.getAllNews();
        },
        mounted(){
        },
        methods: {
          readNews(con){
            this.$router.push({ path: '/newsDetail', query: { content: con}})
          },
            getAllNews(){
                let that = this;
                bookManageApi.getBookkNews(this.newsType).then((response)=>{
                    that.newsArr = response.data
                }).catch((response)=>{
                  that.$Notice.error(setNoticConfig("获取消息列表出错！",null,null,"error"));
                })
            }
        }
    }
</script>
