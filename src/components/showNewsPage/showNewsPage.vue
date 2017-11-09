<template>
    <div class="showNewsPage">
      <div class="container_12">
        <div class="grid_12">
            <div v-for="news in newsArr"></div>
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
