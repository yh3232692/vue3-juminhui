<template>
    <div id="special-day">
        <navigation-bar 
            :isBack="navOptions.isBack" 
            :fontColor="navOptions.fontColor"
            :bgColor="navOptions.bgColor" ref="navBar">
            <span slot="content" class="text-ellipsis">每日特惠</span>
        </navigation-bar>
        <div class="cate-scroll" v-if="flag" ref="cates">
            <cate-scroll 
                :categroy="categroy"
                :cateName="cateScrollOptions.cateName"
                fontColor="#fff"
                activeLineColor="rgb(242,240,70)"
                @clickCate="changeCate"
                :cateIndex="cateIndex">
            </cate-scroll>
        </div>
        <div class="container">
            <scroll-view 
                :height="listHeight" 
                @pullUpEvent="pullUpFun"
                ref="listScroll" 
                :isPullUp="isPullUp">
                <ul :style="{'min-height':scrollHeight + 'px'}">
                    <li class="goods" 
                        v-for="(good,index) in goodsList" 
                        :key="index"
                        @click="jump">
                        <img :src="good.original_img" alt="">
                        <div class="cont">
                            <p class="name">{{good.goods_name}}</p>
                            <div class="price-group">
                                <p class="price">
                                    <span class="p-hui">会员价：￥<span class="p-num">{{good.price}}</span></span>
                                    <span class="btn-qiang">马上抢</span>
                                </p>
                                <p class="price-bot">
                                    <span class="line-price">原价：￥{{good.cost_price}}</span>
                                    <span>销量：{{good.sales_sum}}</span>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </scroll-view>          
        </div>
    </div>
</template>

<script>

import NavigationBar from '@/components/common/NavigationBar.vue'
import CateScroll from '@/components/cateScroll/CateScroll.vue'
// import BScroll from 'better-scroll'
import ScrollView from '@/components/common/ScrollView.vue'
import store from '@/store/store.js'
import GetMore from '@/components/common/GetMore.vue'

export default {
    name:'spacial-day',
    data() {
        return {
            flag:false,
            navOptions:{    //导航组件需要的参数
                isBack:true,
                bgColor:'#f42125'
            },
            categroy:[],            
            cateScrollOptions:{ //scroll组件需要的参数
                cateName:'cat_name',
                fontColor:'#fff'
            },
            cateIndex:0,    //当前选中分类的索引
            listHeight:0,   //scroll外层容器高度
            p:1,            //当前页面加载的分页
            goodsList:[],   
            isPullUp:true,
            isGetMore:true,
            cateClickState:true,
            scrollOption:{
                click:false,
                pullUpLoad: {
                    threshold: 20
                }
            },
            scrollHeight:0
        }
    },
    methods: {
        changeCate:function (id,index) { //点击切换分类
            console.log(id,index)
            this.cateIndex = index;
            this.p = 1;
            this.isGetMore = true;
            this.goodsList = [];
            this.cateClickState = false;
            this.listScroll.resetLoading();
            setTimeout(() => {
                this.cateClickState = true
            },200)
            store.dispatch('loadingState/isOpenFun',false) //是否加载全局loading动画，当前加载false
            this.getListData();
        },
        getListData() { //获取列表数据
            let param = {
                cat_id:this.categroy[this.cateIndex].id,
                p:this.p
            }
            this.$post('/api/Special/daily_special_list',param)
            .then((response) => {
                if (response.status == 1) {
                    const data = response.data;
                    if (data.length > 0) {
                        ++this.p;
                        this.goodsList = this.goodsList.concat(data)
                        this.listScroll.resetLoading();
                    } else {
                        this.listScroll.finishload();
                        this.isGetMore = false
                    }
                }
            })
        },
        pullUpFun() {
            if (!this.cateClickState) return false;
            const _this = this;
            if (this.isGetMore) {
                this.listScroll.showLoading(() => {
                    _this.getListData();
                });
            } else {
                this.listScroll.finishload();
            }
        },
        jump() {  //跳转商品详情
            let routerLink = {
                name:'GoodsDetail'
            }
            this.$router.push(routerLink)
        }
    },
    mounted() {
        this.$post('/api/Special/daily_special_category',{})
        .then((response) => {
            if (response.status == 1) {
                return response.data;
            }
        })
        .then((data) => {
            this.categroy = data;
            this.flag = true;  
            store.dispatch('loadingState/isOpenFun',true) //是否加载全局loading动画，当前加载true
            this.getListData();
        })
        .then(() => {
            this.$nextTick(() => {
                this.listScroll = this.$refs.listScroll;
                { //计算当前scroll外面容器的高度
                    const docHeight = document.documentElement.clientHeight,
                    navHeight = this.$refs.navBar.innerHeight,
                    cateHieght = this.$refs.cates.getBoundingClientRect().height;
                    this.listHeight = docHeight - navHeight - cateHieght; 
                    console.log(this.listScroll.getMoreHeight)
                    this.scrollHeight = this.listHeight - this.listScroll.getMoreHeight
                }
                
            })
        })
        
    },
    components:{
        NavigationBar, CateScroll, GetMore, ScrollView
    }
}
</script>

<style scoped>
#special-day {
    width: 100%;
    height: 100%;
    background: #f3f5f9;
    padding-top: 0.88rem;
}
.cate-scroll {
    width: 100%;
    padding: 0 0.2rem 0.1rem 0.2rem;
    box-sizing: border-box;
    background: #f42125;
}
.container {
    background: #f3f5f9;
    width: 100%;
    overflow: hidden;
    background: linear-gradient(#f42125 0%, #ff0271 25%,#f3f5f9 60%) #f3f5f9 no-repeat;
    padding: 0 0.2rem;
    box-sizing: border-box;
}
.container ul {
    background: #ffffff;
    border-radius: 0.08rem;
    overflow: hidden;
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
}
.container ul li{
    display: flex;
    margin-bottom: 0.2rem;
}
.goods {
    width: 100%;
}
.goods img{
    width: 2.52rem;
    height: 2.52rem;
    border-radius: 0.08rem;
    margin-right: 0.2rem;
}
.cont {
    padding: 0.2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 3.98rem;
}
.cont .name {
    font-size:0.3rem;
    color:#333;
    line-height:0.4rem;
    font-weight:bold;
    overflow:hidden;
}
.price {
    height: 0.5rem;
}
.price-bot {
    height: 0.32rem;
    color: #999;
}
.price-group>p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.24rem;        
}
.price .p-hui{
    color: #f54440;
    font-weight: bold;
}
.price .p-hui .p-num{
    font-size: 0.32rem;
}
.btn-qiang {
    width: 1.16rem;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #f54440;
    text-align: center;
    color: #ffffff;
    border-radius: 0.06rem;
}
.line-price {
    text-decoration: line-through;
}
</style>

