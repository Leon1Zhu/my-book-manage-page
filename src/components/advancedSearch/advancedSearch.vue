<template>
    <div id="advanced-search">
      <div class="container_12 search-content">
        <div class="grid_12">
          <Tabs type="card">
            <TabPane label="基础信息查书">
              <div class="search-input"><div class="word">书名</div><Input v-model="basicSearch.title" placeholder="请输入搜索书籍的标题" style=""></Input></div>
              <div class="search-input"><div class="word">作者</div><Input v-model="basicSearch.author" placeholder="请输入搜索书籍的作者" style=""></Input></div>
              <div class="search-input"><div class="word">书号</div><Input v-model="basicSearch.ISBN" placeholder="请输入搜索书籍的ISBN编号" style=""></Input></div>
              <div class="search-input">
                <div class="word">系列</div>
                <Select v-model="basicSearch.publisher" >
                  <Option v-for="item in publisher" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>
              <div class="search-input">
                <div class="word">类型</div>
                <Select v-model="basicSearch.bookType" >
                  <Option v-for="item in bookType" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>
            </TabPane>
            <TabPane label="加速阅读(AR)查书">
              <div class="search-input">
                <div class="word">
                  <Tooltip content="这里是提示文字" placement="top">
                    <i  class="iconfont icon-wenhao"></i>
                  </Tooltip>
                  兴趣等级
                </div>
                <Select v-model="ARSearch.interestLevel" >
                  <Option v-for="item in interestLevel" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>

              <div class="search-input">
                <div class="word">测试号</div><InputNumber   v-model="ARSearch.QN" placeholder="请输入搜索书籍的标题" style="width: 100%;"></InputNumber>
              </div>
              <div class="search-input">
                <div class="word">测试类型</div>
                <Select v-model="basicSearch.quizType" >
                  <Option v-for="item in quizType" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>

              <div class="search-input">
                  <div class=" word double">
                    <Tooltip content="这里是提示文字" placement="top">
                    <i  class="iconfont icon-wenhao"></i>
                  </Tooltip>BL值范围</div><Input v-model="ARSearch.ABLev" placeholder="请输入搜索书籍的标题" style=""></Input>
                <span class="tilde">~</span><Input v-model="ARSearch.ABLevT" placeholder="请输入搜索书籍的标题" style=""></Input>
              </div>
              <div class="search-input">
                  <div class="word double">AR Points</div><Input v-model="ARSearch.ARP" placeholder="请输入搜索书籍的标题" style=""></Input>
                  <span class="tilde">~</span><Input v-model="ARSearch.ARPT" placeholder="请输入搜索书籍的标题" style=""></Input>
              </div>

            </TabPane>
            <TabPane label="蓝思阅读(Lexile)查书">
              <div class="search-input">
                  <div class="word double">蓝思值范围</div><Input v-model="LLSearch.LLV" placeholder="请输入搜索书籍的标题" style=""></Input>
                <span class="tilde">~</span><Input v-model="LLSearch.LLVT" placeholder="请输入搜索书籍的标题" style=""></Input>
              </div>
              <div class="search-input">
                <div class="word">排序方法</div>
                <Select v-model="LLSearch.sort" >
                  <Option v-for="item in sort" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>
            </TabPane>
          </Tabs>
          <div  class="basics-search-button-group">
            <div class="search-btn">
              <Button type="info" @click="getSearchInfo">搜索</Button>
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
import './advancedSearch.scss'
import  searchApi from '../../api/advancedSearch'
    export default{
        data(){
            return {
              publisher:[{value:1,label:"Function and Nonfiction"},{value:2,label:"Fiction"},{value:3,label:"Nonfiction"},],
              bookType:[{value:1,label:"精装版本"},{value:2,label:"平装版本"},{value:3,label:"纸版书"},],
              quizType:[{value:1,label:"Any Quiz Type"},{value:2,label:"Reading Practice"},{value:3,label:"Recorded Voice"},{value:4,label:"Vocabulary Practice"},{value:5,label:"Literacy Skills"}],
              interestLevel:[{value:1,label:"所有等级"},{value:2,label:"Lower Grades(LG K-3)"},{value:3,label:"Middle Grades(MG 4-8)"},{value:4,label:"Middle Grades Plus(MG+ 6 and up)"},{value:5,label:"Upper Grades(UG 9-12)"}],
              sort:[{value:1,label:"作者"},{value:2,label:"蓝思等级"},{value:3,label:"BL等级"},{value:4,label:"兴趣等级"},{value:5,label:"阅读分值"},{value:6,label:"页数"}],
              basicSearch:{
                  type:null,
                  title:null,
                  author:null,
                  ISBN:null,
                  publisher:null,
                  bookType:null,
                },
                ARSearch:{
                  inLev:null,
                  ABLev:null,
                  ABLevT:null,
                  ARP:null,
                  ARPT:null,
                  QN:null,
                  QT:null,
                  quizType:null,
                  interestLevel:null,
                },
                LLSearch:{
                  LLV:null,
                  LLVT:null,
                  sort:null,
                }
            }
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {
          emptyBasic(){
             this.basicSearch={
               type:'',
               title:'',
               author:'',
               ISBN:'',
               publisher:'',
             }
            this.ARSearch={
              inLev:'',
              ABLev:'',
              ABLevT:'',
              ARP:'',
              ARPT:'',
              QN:'',
              QT:'',
            }
            this.LLSearch={
              LLV:'',
              LLVT:'',
            }
          },
          getSearchInfo(){
             setAdvancedSearchInfo(this.basicSearch,this.ARSearch,this.LLSearch)
            this.$router.push({path: '/index/book_list'})


          }
        }
    }
</script>
