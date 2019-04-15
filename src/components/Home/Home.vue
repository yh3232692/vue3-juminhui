<template>
    <div id="home">
        <!-- 首页顶部搜索组件 -->
        <search-bar></search-bar>
        <!-- 首页轮播 -->
        <home-swiper :sliders="slider"></home-swiper>
        <!-- 首页图标入口 -->
        <home-cate-icon :topIcon="topIcon" :icons="icons" ></home-cate-icon>
        <!-- 首页活动入口 -->
        <home-active 
            :special="special" 
            :lottery="lottery" 
            :huiHouse="huiHouse" 
            :shangQuan="shangQuan"
            :shops="shops" 
            :market="market"
            v-if="flag">
        </home-active>
        <!-- 首页惠民特卖商品 -->
        <home-goods 
            :categroy="categroy" 
            :goodsList="goodsList" 
            @getCatId="getCatId"
            :cateBarState="cateBarState"
            ref="catesTop"
            v-if="flag">
        </home-goods>
    </div>
</template>


<script>
import SearchBar from './SearchBar.vue'
import HomeSwiper from './HomeSwiper.vue'
import HomeCateIcon from './HomeCateIcon.vue'
import HomeActive from './HomeActive.vue'
import HomeGoods from './HomeGoods.vue'

// vue2实现数据请求显示loading图

export default {
    name:'home',
    data() {
        return {
            flag: false,    //初始化组件显示隐藏
            topIcon: [],    //顶部Icon入口
            icons: [],      //小icon入口
            slider: [],     //轮播图
            special: {},    //每日特惠模块
            lottery: {},    //抽奖模块
            huiHouse: {},   //优惠好房
            shangQuan: {},  //精选商圈
            shops: {},      //精选商家
            market: {},     //附近便利店
            categroy: [],    //首页惠民特卖的分类
            goodsList: [],   //商品列表
            params:{
                latitude:'39.90468941207866',
                longitude:'116.40717057457375',
                user_id:15159,
                name:'北京市',
                version:581,
                county:'东城区',
                cat_id:'',
                market_id:'',
                p:1
            },
            isGetMore:true,     //是否允许上拉触底加载更多
            cateClickState:true,    //分类点击状态
            cateBarState:false  //是否显示悬浮商品分类
        }
    },
    methods: {
        getGoodList () { //获取分类下的商品数据
            // 如果当前isGetMore为false，则无需加载分页数据，否则需要加载
            if (!this.isGetMore) return false;

            this.$post('/api/NewIndex/getGoods',{
                cat_id:this.params.cat_id,
                market_id:this.params.market_id,
                p:this.params.p
            })
            .then((response) => {
                if (response.status == 1) {
                    const goodsList = response.result;
                    if (goodsList.length > 0) {
                        ++this.params.p
                        this.goodsList = this.goodsList.concat(goodsList)
                    } else {    //当前分类的分页下暂无数据
                        this.isGetMore = false  //禁止再次请求数据
                        console.log('当前分页暂无数据');
                        return false;
                    }
                    
                } else {
                    return false
                }
            })
        },
        getCatId(id) {  //通过获取到的分类id重新获取数据
            this.params.cat_id = id
            this.params.p = 1
            this.goodsList = []
            this.isGetMore = true
            this.getGoodList();
            this.cateClickState = false //先将分类点击状态设置为false,
            setTimeout(() => {
                //500毫秒之后再设置为true，防止点击分类之后页面滚动条发生变化导致触底再次加载数据
                this.cateClickState = true 
            },500)
        },
        scrollFun() {
            if(this.cateClickState == true) {
                // 滚动过的高度
                let scrollTop = -(document.getElementsByTagName('body')[0].getBoundingClientRect().top);

                {   //当前代码块处理首页商品分类滚动监听定位顶部
                    let catesTop = this.$refs.catesTop.catesTop;
                    let searchHeight = document.getElementById('position').getBoundingClientRect().height;
                    catesTop -= searchHeight
                    // 当滚动的距离大于商品分类初始化距离顶部距离时候显示并吸顶
                    if (scrollTop >= catesTop) {
                        this.cateBarState = true
                    } else {
                        this.cateBarState = false
                    }
                }

                {
                    //可滚动容器的高度
                    let innerHeight = document.getElementById('home').clientHeight;
                    // 屏幕的高度
                    let outerHeight = document.documentElement.clientHeight;
                    //当前判断页面是否触底
                    if (innerHeight <= (outerHeight + scrollTop)) { 
                        this.getGoodList();  
                    }
                }
                
            }
        }
    },
    created() {
        window.addEventListener('scroll',this.scrollFun)
    },
    mounted() {
        this.$post('/api/NewIndex/homeIndexnew_four',{
            latitude:this.params.latitude,
            longitude:this.params.longitude,
            user_id:this.params.user_id,
            name:this.params.name,
            version:this.params.version,
            county:this.params.county
        })
        .then((response) => {
            if (response.status == 1) {
                return response.result;
            }
        })
        .then((data) => {
            this.topIcon    = data.TopIcon
            this.icons      = data.Icon
            this.slider     = data.ad
            this.special    = data.daily_special
            this.lottery    = data.Brought_welfare
            this.huiHouse   = data.Optimization_properties
            this.shangQuan  = data.Near_shop
            this.market     = data.market[0]
            this.shops      = data.recommend_shop
            this.categroy   = data.market_cate
            this.params.market_id  = data.market[0].id
            this.params.cat_id     = data.market_cate[0].id
            this.flag       = true
        })
        .then(() => {
            this.getGoodList()
        })
        // console.log(this.$refs.catesTop);
    },
    components:{
        SearchBar, HomeSwiper, HomeCateIcon, HomeActive, HomeGoods
    },
}

</script>
<style>
/* 精选商家 惠民特卖 等模块logo样式 */
.model-logo {
    width: 100%;
    padding: 0.56rem 0 0.26rem 0;
    text-align: center;
}
.model-logo img {
    height: 0.4rem;
}
</style>

