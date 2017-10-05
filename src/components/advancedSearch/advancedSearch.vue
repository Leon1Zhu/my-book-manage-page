<template>
    <div id="advanced-search">
      <div class="container_12 search-content">
        <div class="grid_12">
          <Tabs type="card">
            <TabPane label="基础信息查书">
              <div class="search-input">
                <div class="word">书籍类型</div>
                <Select v-model="basicSearch.type" >
                  <Option v-for="item in bookType" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>
              <div class="search-input"><div class="word">标题</div><Input v-model="basicSearch.title" placeholder="请输入搜索书籍的标题" style=""></Input></div>
              <div class="search-input"><div class="word">作者</div><Input v-model="basicSearch.author" placeholder="请输入搜索书籍的作者" style=""></Input></div>
              <div class="search-input"><div class="word">ISBN编号</div><Input v-model="basicSearch.ISBN" placeholder="请输入搜索书籍的ISBN编号" style=""></Input></div>
              <div class="search-input"><div class="word">出版社</div><Input v-model="basicSearch.publisher" placeholder="请输入搜索书籍的出版社" style=""></Input></div>
              <div  class="basics-search-button-group">
                  <div class="search-btn">
                    <Button type="info">搜索</Button>
                  </div>
                  <div class="empty-btn">
                    <Button type="info" @click="emptyBasic()">清空</Button>
                  </div>
              </div>
            </TabPane>
            <TabPane label="加速阅读(AR)查书">
              <div class="search-input">
                <div class="word">
                  <Tooltip content="这里是提示文字" placement="top">
                    <i  class="iconfont icon-wenhao"></i>
                  </Tooltip>
                  Interest Level</div>
                <Select v-model="ARSearch.inLev" >
                  <Option v-for="item in bookType" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>
              <div class="search-input">
                <div class="search-input-sec">
                  <div class="word">
                    <Tooltip content="这里是提示文字" placement="top">
                    <i  class="iconfont icon-wenhao"></i>
                  </Tooltip>ATOS Book Leval</div><Input v-model="ARSearch.ABLev" placeholder="请输入搜索书籍的标题" style=""></Input>
                </div>
                <div class="search-input-sec">
                  <div class="word">through</div><Input v-model="ARSearch.ABLevT" placeholder="请输入搜索书籍的标题" style=""></Input>
                </div>
              </div>
              <div class="search-input">
                <div class="search-input-sec">
                  <div class="word">AR Points</div><Input v-model="ARSearch.ARP" placeholder="请输入搜索书籍的标题" style=""></Input>
                </div>
                <div class="search-input-sec">
                  <div class="word">through</div><Input v-model="ARSearch.ARPT" placeholder="请输入搜索书籍的标题" style=""></Input>
                </div>
              </div>

              <div class="search-input">
                  <div class="word">Quiz Number</div><Input type="number" v-model="ARSearch.QN" placeholder="请输入搜索书籍的标题" style=""></Input>
              </div>
              <div class="search-input">
                <div class="word">Quiz Type</div>
                <Select v-model="basicSearch.type" >
                  <Option v-for="item in bookType" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>
              <div  class="AR-search-button-group">
                <div class="search-btn">
                  <Button type="info">搜索</Button>
                </div>
                <div class="empty-btn">
                  <Button type="info" @click="emptyAR()">清空</Button>
                </div>
              </div>
            </TabPane>
            <TabPane label="蓝思阅读(Lexile)查书">
              <div class="search-input">
                <div class="search-input-sec">
                  <div class="word">AR Points</div><Input v-model="ARSearch.ARP" placeholder="请输入搜索书籍的标题" style=""></Input>
                </div>
                <div class="search-input-sec">
                  <div class="word">through</div><Input v-model="ARSearch.ARPT" placeholder="请输入搜索书籍的标题" style=""></Input>
                </div>
              </div>

              <div  class="LL-search-button-group">
                <div class="search-btn">
                  <Button type="info">搜索</Button>
                </div>
                <div class="empty-btn">
                  <Button type="info" @click="emptyBasic()">清空</Button>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
</template>

<script>
import './advancedSearch.scss'
    export default{
        data(){
            return {
                bookType:[{value:1,label:"所有书籍"},{value:2,label:"AR书籍"},{value:3,label:"所有书籍"},],
                basicSearch:{
                  type:null,
                  title:null,
                  author:null,
                  ISBN:null,
                  publisher:null,
                },
                ARSearch:{
                  inLev:null,
                  ABLev:null,
                  ABLevT:null,
                  ARP:null,
                  ARPT:null,
                  QN:null,
                  QT:null,
                },
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
               type:null,
               title:null,
               author:null,
               ISBN:null,
               publisher:null,
             }
          },
          emptyAR(){
            this.ARSearch={
              inLev:null,
                ABLev:null,
                ABLevT:null,
                ARP:null,
                ARPT:null,
                QN:null,
                QT:null,
            }
          }
        }
    }
</script>
