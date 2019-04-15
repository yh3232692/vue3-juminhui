<template>
    <!-- 首页搜索的组件 -->
    <div id="search-bar">
        <!-- 最顶部的定位部分 -->
        <div class="pos-box">
            <div class="position" id="position">
                <img src="../../assets/icons/home-dingwei.png" alt="" class="dingwei">
                <span>日坛北路33号望京SOHO</span>
                <img src="../../assets/icons/home-jiantou.png" alt="" class="arrow">
            </div>
            <div class="icons">
                <img src="../../assets/icons/home-shouyi.png" alt="" class="shouyi">
                <img src="../../assets/icons/home-message.png" alt="" class="message">                
            </div>
        </div>
        <!-- 搜索框 -->
        <div class="search-box">
            <div class="searchs">
                <img src="../../assets/icons/home-search.png" alt="">
                <span>您需要什么商品与服务？</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'search-bar'
}
</script>
<style scoped>
    #search-bar {
        width: 100%;
        background: #f54440;
        padding: 0 0.2rem;
        box-sizing: border-box;
    }
    .pos-box {
        width: 100%;
        display: flex;
        justify-content:space-between;
        flex-wrap: nowrap;
        position: fixed;
        background: #f54440;
        left: 0;
        top: 0;
        z-index: 11;
        padding: 0 0.2rem;
        box-sizing: border-box;
    }
    .position {
        display: flex;
        height: 0.70rem;
        align-items: center;
    }
    .position span {
        max-width: 2.2rem;
        margin: 0 0.1rem;
        overflow: hidden;
        height: 0.7rem;
        line-height: 0.7rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #ffffff;
    }
    .position img {
        display:block;
    }
    .dingwei {
        width:0.28rem;
        height: 0.36rem;
    }
    .arrow{
        width: 0.16rem;
        height: 0.1rem;
    }
    .icons {
        height: 0.7rem;
        display: flex;
        align-items: center;
    }
    .icons .shouyi {
        width: 0.7rem;
    }
    .icons .message {
        width: 0.38rem;
        height: 0.38rem;
        margin-left: 0.26rem;
    }
    .search-box{
        width: 100%;
        padding: 0.1rem 0 0.14rem 0;
        box-sizing: border-box;
        padding-top: 0.7rem;
    }
    .searchs {
        width: 100%;
        height: 0.64rem;
        background: rgba(255, 255, 255, 0.9);
        padding-left:0.5rem;
        border-radius: 0.08rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }
    .searchs img {
        display: block;
        width: 0.4rem;
        height: 0.36rem;
        margin-left: -0.4rem;
    }
    .searchs span{
        font-size: 0.24rem;
        color: #999;
        margin-left: 0.12rem;
    }
</style>


