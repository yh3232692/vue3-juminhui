<template>
    <div id="home-active">
        <!-- 活动模块第一行 -->
        <div class="box-1">
            <div class="tehui active-box">
                <div class="title-box">
                    <p class="title">
                        <span>每日特惠</span>
                        <img src="" alt="">
                    </p>
                    <p class="desc">大牌促销 实惠到家</p>
                </div>
            </div>
            <div class="fuli active-box"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'home-active'
}
</script>

<style scoped>
#home-active {
    width: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    padding-top:0.4rem;
}
.box-1 {
    display: flex;
    justify-content: space-between;
}
.active-box {
    padding: 0.2rem 0.16rem;
    box-sizing: border-box;
}
.tehui {
    width: 4.86rem;
    height: 2.78rem;
    background: #aaffff;
}
.fuli {
    width: 2.14rem;
    height: 2.78rem;
    background: #fafa;
}
.title-box .title {
    display: flex;
    height: 0.44rem;
    align-items: center;
}
.title-box .title span{
    line-height: 0.44rem;
    font-size: 0.32rem;
    font-weight: bold;
}
.title-box .title img {
    height: 0.28rem;
    display: block;
}
.title-box .desc{
    color: #767988;
    height: 0.28rem;
    line-height: 0.28rem;
    font-size: 0.24rem;
    margin:0.04rem 0.16rem 0.1rem 0;
}
</style>

