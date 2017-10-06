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
                <div class="word">Quiz Type</div>
                <Select v-model="basicSearch.type" >
                  <Option v-for="item in bookType" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>
              <div class="search-input">
                <div class="word">Quiz Number</div><InputNumber   v-model="ARSearch.QN" placeholder="请输入搜索书籍的标题" style="width: 100%;"></InputNumber>
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

            </TabPane>
            <TabPane label="蓝思阅读(Lexile)查书">
              <div class="search-input">
                <div class="search-input-sec">
                  <div class="word">Lexile Value</div><Input v-model="LLSearch.LLV" placeholder="请输入搜索书籍的标题" style=""></Input>
                </div>
                <div class="search-input-sec">
                  <div class="word">through</div><Input v-model="LLSearch.LLVT" placeholder="请输入搜索书籍的标题" style=""></Input>
                </div>
              </div>
            </TabPane>
          </Tabs>
          <div  class="basics-search-button-group">
            <div class="search-btn">
              <Button type="info" @click="handleSpinCustom">搜索</Button>
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
                LLSearch:{
                  LLV:null,
                  LLVT:null,
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
               type:null,
               title:null,
               author:null,
               ISBN:null,
               publisher:null,
             }
            this.ARSearch={
              inLev:null,
              ABLev:null,
              ABLevT:null,
              ARP:null,
              ARPT:null,
              QN:null,
              QT:null,
            }
            this.LLSearch={
              LLV:null,
              LLVT:null,
            }
          },
          handleSpinCustom () {
            this.$Spin.show({
              render: (h) => {
                return h('div', [
                  h('Icon', {
                    'class': 'demo-spin-icon-load',
                    props: {
                      type: 'load-c',
                      size: 28
                    }
                  }),
                  h('div', '拼命加载中')
                ])
              }
            });

            this.getSearchInfo();
          },
          getSearchInfo(){
            /*searchApi.advancedSearch().then((response)=>{

            }).catch((response)=>{
              setNoticConfig(response.message,null,null,"error")
            })*/
            this.$Spin.hide();
            this.$router.push({path: '/index/book_list'})


          }
        }
    }
</script>
