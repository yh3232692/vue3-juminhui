<template>
    <div id="home">
        <!-- 首页顶部搜索组件 -->
        <search-bar></search-bar>
        <!-- 首页轮播 -->
        <home-swiper></home-swiper>
        <!-- 首页图标入口 -->
        <home-cate-icon></home-cate-icon>
        <!-- 首页活动入口 -->
        <home-active></home-active>
        <!-- 首页惠民特卖商品 -->
        <home-goods></home-goods>
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
import HomeSwiper from './HomeSwiper.vue'
import HomeCateIcon from './HomeCateIcon.vue'
import HomeActive from './HomeActive.vue'
import HomeGoods from './HomeGoods.vue'

export default {
    name:'home',
    components:{
        SearchBar, HomeSwiper, HomeCateIcon, HomeActive, HomeGoods
    },
    mounted() {
        let param = {
            latitude:'39.90468941207866',
            longitude:'116.40717057457375',
            user_id:15159,
            name:'北京市',
            version:581,
            county:'东城区'
        }
        this.$post('/api/NewIndex/homeIndexnew_four',param)
            .then((response) => {
               
            })
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

