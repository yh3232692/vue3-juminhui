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
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
import HomeSwiper from './HomeSwiper.vue'
import HomeCateIcon from './HomeCateIcon.vue'
import HomeActive from './HomeActive.vue'

export default {
    name:'home',
    components:{
        SearchBar, HomeSwiper, HomeCateIcon, HomeActive
    }
}

</script>
<style scoped>

</style>

