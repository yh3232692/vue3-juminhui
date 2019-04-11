<template>
    <div id="home-goods">
        <div class="model-logo">
            <img src="https://lg-6d6g0sjo-1257245756.cos.ap-shanghai.myqcloud.com/hdj_biaotitemai@2x.png" alt="">
        </div>
        <div class="good-cate">
            <ul>
                <li>热卖</li>
                <li class="cate-active">专供</li>
                <li>优品专供</li>
                <li>美妆护品</li>
                <li>生活用品</li>
                <li>休闲零食</li>
                <li>数码电子</li>
            </ul>
        </div>
        <div class="goods-box">
            <ul>
                <li>
                    <img src="https://oss.jmhshop.com/Public/upload/goods/2019/03-15/5c8b1ad12edb8.jpg" alt="">
                    <div class="goods-cont">
                        <p class="name">【送一个月不限速套餐】随U行移动WiFi M6 62mm*46mm*8.5mm</p>
                        <p class="now-price">
                            <span class="price-name">会员价:¥ </span>
                            <span class="price">288.00</span>
                        </p>
                        <p class="old-price">
                            <span class="line-price">原价:¥299.00</span>
                            <span class="sale-count">销量：142</span>
                        </p>
                    </div>
                </li>
                <li>
                    <img src="https://oss.jmhshop.com/Public/upload/goods/2019/03-15/5c8b1ad12edb8.jpg" alt="">
                    <div class="goods-cont">
                        <p class="name">【送一个月不限速套餐】随U行移动WiFi M6 62mm*46mm*8.5mm</p>
                        <p class="now-price">
                            <span class="price-name">会员价:¥ </span>
                            <span class="price">288.00</span>
                        </p>
                        <p class="old-price">
                            <span class="line-price">原价:¥299.00</span>
                            <span class="sale-count">销量：142</span>
                        </p>
                    </div>
                </li>
                <li>
                    <img src="https://oss.jmhshop.com/Public/upload/goods/2019/03-15/5c8b1ad12edb8.jpg" alt="">
                    <div class="goods-cont">
                        <p class="name">【送一个月不限速套餐】随U行移动WiFi M6 62mm*46mm*8.5mm</p>
                        <p class="now-price">
                            <span class="price-name">会员价:¥ </span>
                            <span class="price">288.00</span>
                        </p>
                        <p class="old-price">
                            <span class="line-price">原价:¥299.00</span>
                            <span class="sale-count">销量：142</span>
                        </p>
                    </div>
                </li>
                <li>
                    <img src="https://oss.jmhshop.com/Public/upload/goods/2019/03-15/5c8b1ad12edb8.jpg" alt="">
                    <div class="goods-cont">
                        <p class="name">【送一个月不限速套餐】随U行移动WiFi M6 62mm*46mm*8.5mm</p>
                        <p class="now-price">
                            <span class="price-name">会员价:¥ </span>
                            <span class="price">288.00</span>
                        </p>
                        <p class="old-price">
                            <span class="line-price">原价:¥299.00</span>
                            <span class="sale-count">销量：142</span>
                        </p>
                    </div>
                </li>
                <li>
                    <img src="https://oss.jmhshop.com/Public/upload/goods/2019/03-15/5c8b1ad12edb8.jpg" alt="">
                    <div class="goods-cont">
                        <p class="name">【送一个月不限速套餐】随U行移动WiFi M6 62mm*46mm*8.5mm</p>
                        <p class="now-price">
                            <span class="price-name">会员价:¥ </span>
                            <span class="price">288.00</span>
                        </p>
                        <p class="old-price">
                            <span class="line-price">原价:¥299.00</span>
                            <span class="sale-count">销量：142</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'home-goods'
}
</script>
<style scoped>
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

#home-goods {
    width: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    background: #f3f5f9;
}
/* 商品分类 */
.good-cate {
    width: 100%;
    overflow-x: scroll;  
}
.good-cate ul{
    white-space:nowrap;
}
.good-cate ul li {
    display: inline-block;
    height: 0.7rem;
    line-height: 0.7rem;
    position:relative;
    padding:0 0.16rem;
    font-size:0.3rem;
    color:#333;
}

.good-cate ul .cate-active {
    font-size: 0.32rem;
    color:#333;
    font-weight: bold;
}
.good-cate ul .cate-active::after {
    display: block;
    background: #f54440;
    content: '';
    width: 60%;
    height: 0.06rem;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0 auto;
    z-index: 10;
    border-radius: 0.06rem;
}
/* 商品列表 */

</style>

