<template>
    <div id="goods">
        <scroll-view :height="height">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, index) in imageArr" :key="index">
                    <img :src="item" alt="" class="swiper-image">
                </swiper-slide>
            </swiper>
            <div class="price-group">
                <div class="price-box">
                    <div class="price-left">
                        <p class="price"><span>会员价: ¥</span>65.00</p>
                        <p class="sale-count">已售：9809</p>
                    </div>
                    <div class="share-box">
                        <img src="../../assets/icons/hdj_shoucangsc@2x.png" alt="">
                    </div>
                </div>
                <p class="line-price">原价：￥90.00</p>
                <p class="goods-name">贝亲/婴幼儿洗衣液 800ml</p>
            </div>
            <p class="role-box">
                <span class="title">送至</span>
                <span class="value">
                    <span class="c-red">[可配送]</span>
                    北京市朝阳区日坛北路33号
                </span>
                <span class="arrow"><span class="arrow-cont"></span></span>
            </p>
            <p class="role-box">
                <span class="title">运费</span>
                <span class="value">免运费</span>
            </p>
            <!-- 商品评价 -->
            <div class="comment-box">
                <div class="com-title">
                    <p><span class="shu"></span>商品评价</p>
                    <span class="arrow"><span class="arrow-cont"></span></span>
                </div>
                <comment></comment>       
            </div>
            <!-- 猜你喜欢 -->
            <div class="user-like">
                <div class="like-navs">
                    <span class="like-active">猜你喜欢</span>
                    <span>热门推荐</span>                    
                </div>
                <div class="like-cont">
                    <goods-like></goods-like>
                    <goods-like></goods-like>
                    <goods-like></goods-like>
                    <goods-like></goods-like>
                    <goods-like></goods-like>
                    <goods-like></goods-like>
                </div>
            </div>
        </scroll-view>
    </div>
</template>

<script>
import ScrollView from '@/components/common/ScrollView.vue'
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Comment from './Comment.vue';
import GoodsLike from './GoodsLike';
export default {
    name:'goods',
    data() {
        return {
            swiperOptions:{
                //设置swiper组件初始化参数
				// autoplay: {
				// 	autoplay: true, //自动播放
				// 	disableOnInteraction: false //控制当前触摸了元素之后也会自动播放
				// },
				loop: true, //开启loop（无限循环播放）
				on: {
					tap: function(e) {
						console.log(e);
						alert(this.realIndex); //获取当前点击索引
					}
				}
            },
            imageArr:[
                'https://oss.jmhshop.com/Public/upload/goods/2018/10-26/5bd2b1b99b510.jpg',
                'https://oss.jmhshop.com/Public/upload/goods/2018/10-26/5bd2b1df2d66b.jpg',
                'https://oss.jmhshop.com/Public/upload/goods/2018/10-26/5bd2b1def1724.jpg'
            ]
        }
    },
    props:{
        height:[Number,String]
    },
    components:{
        ScrollView, swiper, swiperSlide, Comment, GoodsLike
    }
}
</script>

<style scoped>
#goods {
    background: #f3f5f9;
}
.swiper-image {
    width: 100%;
    height: 7.5rem;
    display: block;
}
.price-group {
    width: 100%;
    padding: 0.2rem 2%;
    box-sizing: border-box;
    border-bottom:0.02rem solid #f1f1f1;
    background: #fff;
}
.price-box {
    width: 100%;
    height: 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.price-left {
    display: flex;
    height: 0.7rem;
    justify-content: space-between;
    align-items: center;
    flex: 1;
}
.price {
    color: #f54440;
    font-size: 0.44rem;
    font-weight: 600;
}
.price span{
    font-size: 0.24rem;
}
.sale-count {
    color: #999999;
    font-size: 0.24rem;
}

.share-box {
    width: 0.48rem;
    height:0.7rem;
    padding:0 0.2rem;
    border-left:0.02rem solid #f1f1f1;
    margin-left:0.2rem;
}
.share-box img {
    display: block;
    width: 0.48rem;
    height: 0.7rem;
}


.line-price {
    width: 100%;
    height: 0.26rem;
    line-height: 0.3rem;
    color: #999999;
    text-decoration: line-through;
    padding-bottom: 0.08rem;
    font-size: 0.24rem;
}
.goods-name{
    width: 100%;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    font-size:0.32rem;
    color:#333;
    margin-top:0.32rem;
    font-weight:bold;
}
.role-box {
    width: 100%;
    padding:0 2%;
    box-sizing: border-box;
    height: 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #999999;
    font-size: 0.24rem;
    border-bottom: 0.02rem solid #f1f1f1;
    background: #fff;
}
.c-red {
    color: #f54440;
}
.role-box .title {
    width: 1.16rem;
}
.role-box .value{
    flex: 8;
    color: #333;
}
.arrow {
    flex: 1;
    display: flex;
    align-items: center;
    height: 0.9rem;
    justify-content: flex-end;
}
.arrow .arrow-cont{
    width: 0.14rem;
    height: 0.14rem;
    border-top:0.02rem solid #999;
    border-right:0.02rem solid #999;
    transform:rotate(45deg);
}

.comment-box {
    background:#fff;
    margin-top: 0.2rem;
}
.comment-box .com-title {
    color: #333;
    font-size: 0.28rem;
    display: flex;
    height: 0.9rem;
    line-height:0.9rem;
    border-bottom:0.02rem solid #f1f1f1;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    padding:0 2%;    
}
.comment-box .com-title>p {
    display: flex;
    align-items: center;
    height: 0.9rem;
    line-height: 0.9rem;
}
.comment-box .com-title .shu{
    width: 0.08rem;
    height: 0.38rem;
    background: #f54440;
    margin-right: 0.16rem;
}

/* 猜你喜欢 */
.user-like {
    width: 100%;
}
.like-navs {
    width: 100%;
    display:flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    box-sizing: border-box;
    border-bottom: 0.02rem solid #f1f1f1;
    background: #fff;
    
}
.like-navs span {
    text-align: center;
    height: 0.88rem;
    line-height: 0.88rem;
    color: #333;
    font-size: 0.3rem;
    flex: 1;
    position: relative;
}
.like-active {
    color: #f54440;
}
.like-active::after{
    content: '';
    width: 100%;
    height: 0.04rem;
    background: #f54440;
    position: absolute;
    bottom: 0;
    left: 0;
}
.like-cont {
    width: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #fff;
}
</style>


