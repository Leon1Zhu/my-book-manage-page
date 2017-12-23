<template>
    <div class="advanced-search">
      <div class="container_12 search-content">
        <div class="grid_12">
          <!--<Tabs type="card">
            <TabPane label="基础信息查书">-->
          <div class="search-input"><div class="word">书名</div><Input v-model="ARSearch.title" placeholder="请输入书名" style=""></Input></div>
          <div class="search-input"><div class="word">作者</div><Input v-model="ARSearch.author" placeholder="请输入作者名称" style=""></Input></div>
          <div class="search-input"><div class="word">获奖查询</div><Input v-model="ARSearch.award" placeholder="请输入书籍获奖情况" style=""></Input></div>
          <div class="search-input"><div class="word">出版社查询</div><Input v-model="ARSearch.publisher" placeholder="请输入出版社名称" style=""></Input></div>
          <div class="search-input">
            <div class="word">图书系列</div>
            <Select v-model="ARSearch.series"   placeholder="请选择图书系列">
              <Option v-for="item in publisher" :value="item.series" :key="item.series">{{ item.series }}</Option>
            </Select>
          </div>
          <div class="search-input ">
            <div class="word">文档类型</div>
            <Select v-model="ARSearch.doctype"   placeholder="请选择书籍文档类型">
              <Option v-for="item in docType" :value="item.label" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
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
            <div class="word">AR测试类型</div>
            <RadioGroup v-model="ARSearch.skills" style="width: 100%;margin-top: 8px;">
              <Radio label="音频"></Radio>
              <Radio label="词汇练习"></Radio>
              <Radio label="文学题"></Radio>
            </RadioGroup>
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
import searchApi from '../../../api/advancedSearch'
    export default{
        data(){
            return {
              ARSearch:{
                title:'',
                author:'',
                award:'',
                QN:null,
                ABLev:'',
                ABLevT:'',
                interestLevel:'',
                doctype:'Fiction and Nonfiction',
                series:'',
                publisher:'',
                skills:'',
            },
              interestLevel:INTERESTLEVEL,
              docType:DOCTYPE,
              publisher:'',
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
            this.ARSearch={
              title:'',
              author:'',
              award:'',
              QN:'',
              ABLev:'',
              ABLevT:'',
              interestLevel:'',
              doctype:'Fiction and Nonfiction',
              series:'',
              publisher:'',
              skills:'',
            }
          },
          getARSearchInfo(){
             this.$router.push({path : '/SearchResult',query: {searchContent:JSON.stringify(this.ARSearch),type:'ARSEARCH'}});
          },
        }
    }
</script>
