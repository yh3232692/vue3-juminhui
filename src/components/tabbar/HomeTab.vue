<template>
    <div id="home-tab">
        <router-link :to="tab.path" v-for="(tab, index) in tabList" :key="index" :class="['tab-item', currentPath == tab.path ? 'c-red' : '']">
            <img :src="currentPath == tab.path ? tab.selectIconPath : tab.iconPath" alt="">
            <p>{{tab.text}}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'home-tab',
    data() {
        return {
            tabList:[
                {
                    text:'首页',
                    path:'/',
                    iconPath:require('../../assets/icons/tabbar/index1D.png'),
                    selectIconPath:require('../../assets/icons/tabbar/index1S.png')
                },
                {
                    text:'运营商',
                    path:'/chain',
                    iconPath:require('./../../assets/icons/tabbar/lian1D.png'),
                    selectIconPath:require('./../../assets/icons/tabbar/lian1S.png')
                },
                {
                    text:'购物车',
                    path:'/cart',
                    iconPath:require('./../../assets/icons/tabbar/buy1D.png'),
                    selectIconPath:require('./../../assets/icons/tabbar/buy1S.png')
                },
                {
                    text:'我的',
                    path:'/person',
                    iconPath:require('./../../assets/icons/tabbar/my1D.png'),
                    selectIconPath:require('./../../assets/icons/tabbar/my1S.png')
                },
            ],
            currentPath:'/'
        }
    },
    watch:{
        $route(to,from){
            this.currentPath = to.path
            console.log(this.$route)
        }
    },
}
</script>

<style scoped>
#home-tab {
    width:100%;
    height:1rem;
    position:fixed;
    bottom:0;
    box-shadow:0.06rem 0.06rem 0.06rem 0.06rem #ccc;
    display:flex;
    background:#fff;
    z-index:999;
}
a{
    text-decoration: none;
    /* font-size:0.24rem;
    color:#333333; */
}
.tab-item {
    flex: 1;
    text-align: center;
    font-size:0.24rem;
    color:#333333;
}
.tab-item img {
    width: 0.5rem;
    height: 0.5rem;
    margin-top: 0.08rem;
}
.c-red {
    color: #f54440
}
</style>

