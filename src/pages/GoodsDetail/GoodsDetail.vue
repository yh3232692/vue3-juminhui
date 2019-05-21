<template>
    <div id="goods-detail">
        <!-- 顶部导航 -->
        <navigation-bar 
            :isBack="navOptions.isBack" 
            :fontColor="navOptions.fontColor" 
            :bgColor="navOptions.bgColor"
            ref="navBar" >
            <span slot="content">商品详情</span>
        </navigation-bar>
        <!-- 分类导航 -->
        <div class="navs" ref="navs">
            <ul>
                <li v-for="(item, index) in navList" 
                    :key="index"
                    @click="changeSwiper"
                    :class="[navIndex == index ? 'nav-active' : '']">
                    {{item}}
                </li>
            </ul>
        </div>
        <!-- 分类相关的页面 -->
        <div class="good-swriper">
            <swiper :options="goodSwiperOption">
                <swiper-slide>
                    <div class="swiper-box" :style="{'min-height':goodSwiperHeight+'px'}" ref="goods">
                        <goods :height="goodSwiperHeight"></goods>
                    </div>   
                </swiper-slide>
                <swiper-slide>
                    <div class="swiper-box" :style="{'min-height':goodSwiperHeight+'px'}" ref="detail">
                        <div>2222222222222222</div>
                    </div> 
                </swiper-slide>
                <swiper-slide>
                    <div class="swiper-box" :style="{'min-height':goodSwiperHeight+'px'}" ref="commont">
                        <div>33333333333333</div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="swiper-box" :style="{'min-height':goodSwiperHeight+'px'}" ref="likes">
                        <div>44444444444444</div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import NavigationBar from '@/components/common/NavigationBar.vue'
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import BScroll from 'better-scroll'
import Goods from './Goods.vue'

export default {
    name:"goods-detail",
    data() {
        return {
            navOptions:{
                isBack:true,
                fontColor:'#333',
                bgColor:'#fff'
            },
            navList:['商品','详情','评价','推荐'],
            navIndex:0,
            goodSwiperOption: {
				
            },
            goodSwiperHeight:0
        }
    },
    methods: {
        changeSwiper(){
            
        },
        _initScroll(name) { //初始化scroll
            let scroll = this.$refs[name]     
            this[name] = new BScroll(scroll,{
                click:true,
                pullUpLoad: {
                    threshold: 50
                }
            })
        }
    },
    mounted() {
        this.$nextTick(() => {
            const nameList = ['goods','detail','commont','likes'];
            nameList.forEach(ele => {
                this._initScroll(ele)
            });

            { //计算高度
                const docHeight = document.documentElement.clientHeight,
                navHeight = this.$refs.navBar.innerHeight,
                cateHieght = this.$refs.navs.getBoundingClientRect().height;
                this.goodSwiperHeight = docHeight - navHeight - cateHieght; 
            }
        })
    },
    components:{
        NavigationBar,swiper,swiperSlide,Goods
    }
}
</script>

<style scoped>
@import '../../assets/css/pages/goodsDetail.css';
</style>

