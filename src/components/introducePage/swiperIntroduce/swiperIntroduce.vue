<template>
    <div class="introduce-page ">
      <div class="container_12">
      <swiper class="swiper-content animateClass" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <img src="../../../assets/1.png">
        </swiper-slide>
        <swiper-slide>
          <img src="../../../assets/2.png">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      </div>
    </div>
</template>

<script>
import './swiperIntroduce.scss'
    export default{
        data(){
            return {
              swiperOption: {
                // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                freeMode : true,
                autoplay: 3000,
                /*slidesPerGroup : 3,*/
                /*slidesOffsetBefore : -180,*/
                centeredSlides : true,
                direction : 'horizontal',
                grabCursor : true,
                setWrapperSize :true,
                autoHeight: true,
                pagination : '.swiper-pagination',
                paginationBulletRender: function (swiper, index, className) {
                  return '<span class="' + className + '  mypagination">' + (index + 1) + '</span>';
                },

                paginationClickable :true,
              },
            }
        },
        components: {
        },
        computed:{
          swiper() {
            return this.$refs.mySwiper.swiper
          }
        },
        created(){
        },
        mounted(){
          window.onresize = () => {
            return (() => {
              this.swiper.onResize();
            })()
          }
        },
        methods: {}
    }
</script>
