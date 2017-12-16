<template>
    <div class="advanced-search">
      <div class="container_12 search-content">
        <div class="grid_12">
          <!--<Tabs type="card">
            <TabPane label="基础信息查书">-->
          <div class="search-input"><div class="word">书名</div><Input v-model="ARSearch.title" placeholder="请输入书名" style=""></Input></div>
          <div class="search-input"><div class="word">作者</div><Input v-model="ARSearch.author" placeholder="请输入作者名称" style=""></Input></div>
          <div class="search-input"><div class="word">获奖查询</div><Input v-model="ARSearch.award" placeholder="请输入书籍获奖情况" style=""></Input></div>

          <div class="search-input">
            <div class="word">
              <Tooltip content="这里是提示文字" placement="top">
                <i  class="iconfont icon-wenhao"></i>
              </Tooltip>
              AR兴趣等级
            </div>
            <Select v-model="ARSearch.interestLevel"   placeholder="请选择书籍的兴趣等级" >
              <Option v-for="item in interestLevel" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>


          <div class="search-input" >
            <div class="word">AR测试号</div><InputNumber   v-model="ARSearch.QN" placeholder="请输入搜索的测试号" style="width: 100%;"></InputNumber>
          </div>

          <div class="search-input">
            <div class=" word double">
              <Tooltip content="这里是提示文字" placement="top">
                <i  class="iconfont icon-wenhao"></i>
              </Tooltip>BL值范围</div><Input   v-model="ARSearch.ABLev" placeholder="请输入搜索书籍的BL值范围"></Input>
            <span class="tilde">~</span><Input  v-model="ARSearch.ABLevT"  ></Input>
          </div>
          <div class="search-input ">
            <div class="word double">AR阅读分值范围</div><Input   v-model="ARSearch.ARP" placeholder="请输入搜索书籍阅读分值范围" style=""></Input>
            <span class="tilde">~</span><Input  v-model="ARSearch.ARPT"  style=""></Input>
          </div>


          <div  class="basics-search-button-group">
            <div class="search-btn">
              <Button type="info" @click="getARSearchInfo">搜索</Button>
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
import './ARSearch.scss'
    export default{
        data(){
            return {
              ARSearch:{
                title:'',
                author:'',
                award:'',
                QN:'',
                ABLev:'',
                ABLevT:'',
                ARP:null,
                ARPT:'',
                interestLevel:'',
            },
              interestLevel:INTERESTLEVEL,
            }
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {
          emptyBasic(){
            this.ARSearch={
              title:'',
              author:'',
              award:'',
              QN:'',
              ABLev:'',
              ABLevT:'',
              ARP:'',
              ARPT:'',
              interestLevel:'',
            }
          },
          getARSearchInfo(){
             this.$router.push({path : '/SearchResult',query: {searchContent:JSON.stringify(this.ARSearch),type:'ARSEARCH'}});
          },
        }
    }
</script>
