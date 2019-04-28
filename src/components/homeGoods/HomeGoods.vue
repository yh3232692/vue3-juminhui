<template>
    <div class="goods-box" id="goods-box">
        <ul>
            <li v-for="(good, index) in goodsList" :key="index">
                <img :src="good.original_img" alt="">
                <div class="goods-cont">
                    <p class="name">{{good.good_name}}</p>
                    <p class="now-price">
                        <span class="price-name">会员价:¥ </span>
                        <span class="price">{{good.shop_price}}</span>
                    </p>
                    <p class="old-price">
                        <span class="line-price">原价:¥{{good.cost_price}}</span>
                        <span class="sale-count">销量：{{good.sales_sum}}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'home-goods',
    props:['goodsList']
}
</script>

<style scoped>
/* 商品列表 */
.goods-box {
    width: 100%;
    margin-top: 0.2rem;
}
.goods-box ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.goods-box ul li {
    width:3.5rem;
    overflow: hidden;
    background: #fff;
    border-radius: 0.08rem;
    box-shadow:0 2rpx 8rpx 0 rgba(209, 216, 229, 0.72);
    margin-bottom: 0.1rem;
}
.goods-box ul li img {
    width: 3.5rem;
    height: 3.5rem;
}
.goods-cont {
    padding: 0.1rem;
    width: 3.5rem;
    box-sizing: border-box;
    font-size: 0.24rem;
}
.goods-cont .name {
    line-height:0.32rem;
    color:#333;
    font-weight:bold;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2
}
.goods-cont .now-price {
    color:#f54440;    
    margin-top: 0.05rem;    
}
.goods-cont .price-name {
    font-weight: bold;
}
.goods-cont .price {
    font-size: 0.32rem;
    font-weight: bold;
}
.goods-cont .old-price {
    color: #999;
    line-height: 0.28rem;
    display: flex;
    justify-content: space-between;
    margin-top: 0.02rem;
}
.goods-cont .old-price .line-price {
    text-decoration-line: line-through;
}
</style>

