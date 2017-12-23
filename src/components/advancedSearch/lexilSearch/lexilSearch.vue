<template>
  <div class="advanced-search">
    <div class="container_12 search-content">
      <div class="grid_12">
        <!--<Tabs type="card">
          <TabPane label="基础信息查书">-->
        <div class="search-input"><div class="word">书名</div><Input v-model="LEXSearch.title" placeholder="请输入书名" style=""></Input></div>
        <div class="search-input"><div class="word">作者</div><Input v-model="LEXSearch.author" placeholder="请输入作者名称" style=""></Input></div>
        <div class="search-input"><div class="word">获奖查询</div><Input v-model="LEXSearch.award" placeholder="请输入书籍获奖情况" style=""></Input></div>
        <div class="search-input"><div class="word">书号</div><Input v-model="LEXSearch.ISBN" placeholder="请输入书籍的ISBN编号" style=""></Input></div>
        <div class="search-input">
          <div class="word double">蓝思值阅读范围</div><Input v-model="LEXSearch.LLV" placeholder="请输入蓝思值的阅读范围" style=""></Input>
          <span class="tilde">~</span><Input   v-model="LEXSearch.LLVT"  style=""></Input>
        </div>

        <div class="search-input">
          <div class="word">图书系列</div>
          <Select v-model="LEXSearch.publisher"   placeholder="请选择图书系列">
            <Option v-for="item in publisher" :value="item.series" :key="item.series">{{ item.series }}</Option>
          </Select>
        </div>

        <div class="search-input ">
          <div class="word">文档类型</div>
          <Select v-model="LEXSearch.docType"   placeholder="请选择书籍文档类型">
            <Option v-for="item in docType" :value="item.label" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>


        <div  class="basics-search-button-group">
          <div class="search-btn">
            <Button type="info" @click="getLEXSearchInfo">搜索</Button>
          </div>
          <div class="empty-btn">
            <Button type="info" @click="emptyBasic()">清空</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../advancedSearch.scss'
  import './lexilSearch.scss'
  import  searchApi from '../../../api/advancedSearch'

  export default{
    data(){
      return {
        publisher:[],
        docType:DOCTYPE,
        LEXSearch:{
          title:'',
          author:'',
          award:'',
          LLV:'',
          LLVT:'',
          ISBN:'',
          publisher:'',
          docType:'',
        },
      }
    },
    components: {},
    created(){
        this.getBookSeries();
    },
    mounted(){
    },
    methods: {
      getBookSeries(){
        searchApi.getBookSeries().then((response)=>{
          this.publisher = response.data
        }).catch((response)=>{

        })
      },
      emptyBasic(){
        this.LEXSearch={
          title:'',
          author:'',
          award:'',
          LLV:'',
          LLVT:'',
          ISBN:'',
          publisher:'',
          docType:'',
        }
      },
      getLEXSearchInfo(){
        this.$router.push({path : '/LEXSearchResult',query: {searchContent:JSON.stringify(this.LEXSearch),type:'LEX'}});
      },
    }
  }
</script>
