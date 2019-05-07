<template>
    <div id="home-active">
        <!-- 活动模块第一行 -->
        <div class="box-1">
            <!-- 每日特惠模块 -->
            <div class="tehui active-box" @click="jump('special')">
                <div class="title-box">
                    <p class="title">
                        <span class="c-red">{{special.title}}</span>
                        <img :src="special.icon" alt="">
                    </p>
                    <p class="desc">{{special.desc}}</p>
                </div>
                <ul class="tehui-list">
                    <li v-for="(item, index) in good" :key="index">
                        <img :src="item.original_img" alt="">
                        <p class="now-price">¥{{item.price}}</p>
                        <p class="line-price">¥{{item.cost_price}}</p>
                    </li>
                </ul>
            </div>
            <!-- 领优惠模块 -->
            <div class="fuli active-box">
                <div class="title-box">
                    <p class="title">
                        <span class="c-zise">{{lottery.title}}</span>
                        <img :src="lottery.icon" alt="">
                    </p>
                    <p class="desc">{{lottery.desc}}</p>
                </div>
                <div class="fuli-img">
                    <img :src="lottery.image" alt="">
                </div>
            </div>
        </div>
        <!-- 活动模块第二行 -->
        <div class="box-2">
            <ul class="b2-box">
                <!-- 优惠好房 -->
                <li class="active-box haofang">
                    <div class="title-box">
                        <p class="title">
                            <span class="c-red">{{huiHouse.title}}</span>
                            <img :src="huiHouse.icon" alt="">
                        </p>
                        <p class="desc">{{huiHouse.desc}}</p>
                    </div>
                    <div class="b2-bg">
                        <img :src="huiHouse.image" alt="">
                        <p>{{huiHouse.name}}</p>
                    </div>
                </li>
                <!-- 惠民商圈 -->
                <li class="active-box shangquan">
                    <div class="title-box">
                        <p class="title">
                            <span class="c-red">{{shangQuan.title}}</span>
                            <img :src="shangQuan.icon" alt="">
                        </p>
                        <p class="desc">{{shangQuan.desc}}</p>
                    </div>
                    <div class="b2-bg">
                        <img :src="shangQuan.image" alt="">
                        <p>{{shangQuan.name}}</p>
                    </div> 
                </li>
            </ul>
        </div>
        <!-- 附近商家 -->
        <div class="near-shop">
            <img :src="market.market_img" alt="" class="shop-logo">
            <div class="content">
                <p class="shop-name">{{market.market_name}}</p>
                <p class="star">
                    <img src="https://lg-6d6g0sjo-1257245756.cos.ap-shanghai.myqcloud.com/hdj_xingxingw@2x.png" alt="">
                    <span>5.0</span>
                </p>
                <p class="desc">{{ getKmOrM }}
                    <span> | </span>
                    起送费￥{{market.start_price}}
                    <span> | </span>
                    配送费￥{{market.shipping_price}}
                </p>
            </div>
            <img src="https://lg-6d6g0sjo-1257245756.cos.ap-shanghai.myqcloud.com/hdj_gengduox@2x.png" alt="" class="more">
            <img src="https://lg-6d6g0sjo-1257245756.cos.ap-shanghai.myqcloud.com/hdj_julizuijinxsx@2x.png" alt="" class="near-logo">
        </div>
        <!-- 精选商家 -->
        <div class="jingxuan">
            <div class="model-logo">
                <img src="https://lg-6d6g0sjo-1257245756.cos.ap-shanghai.myqcloud.com/hdj_btsj@2x.png" alt="">
            </div>
            <div class="jingxuan-box">
                <ul class="jingxuan-scroll">
                    <li v-for="(shop, index) in shops" :key="index">
                        <img :src="shop.fc_shop_img" alt="">
                        <p class="name">{{shop.fc_shop_name}}</p>
                        <p class="label">{{shop.category_name}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'home-active',
    props:['special','lottery','huiHouse','shangQuan','shops','market'],
    data () {
        return {
            good: [],
            initInter:null
        }
    },
    computed: {
        getKmOrM () { //处理距离的字段
            let juli = Number(this.market.juli)
            juli = juli > 999 ? (juli/1000).toFixed(2) + 'km' : juli + 'm'
            return juli;
        }
    },
    methods: {
        makeGood(goods) { //处理每日特惠商品数据
            let arr = [];
            for (let i = 0; i < goods.length; i += 3) {
                let item = goods.slice(i, i + 3);
                if (item.length < 3) {
                    if (item.length == 1) {
                        item.unshift(goods[goods.length - 2]);
                        item.unshift(goods[goods.length - 3]);
                    }
                    if (item.length == 2) {
                        item.unshift(goods[goods.length - 3]);
                    }
                }
                arr.push(item);
            }
            this.intervalInit(arr);
        },
        intervalInit(data) { //每日优惠商品定时任务
            let count = 0;
            this.good = data[0];
            if (data.length > 1) {
                this.initInter = setInterval(() => {
                    count++;
                    if (count >= data.length) {
                        count = 0;
                    }
                    this.good = [];
                    setTimeout(() => {
                        this.good = data[count]; 
                    }, 100);
                }, 4000)
            }
        },
        jump(name){
            let routerLink = {};
            switch (name) {
                case 'special':
                    routerLink.name = 'SpecialDay'
                    break;
            
                default:
                    break;
            }
            this.$router.push(routerLink)
            console.log(this.$router);
        }
    },
    mounted() {
        // console.log(this.special);
        //处理每日特惠商品
        let goods = this.special.goods;
        this.makeGood(goods)  
    },
        

}
</script>

<style scoped>
/* 精选商家 */
.jingxuan-box {
    width:100%;
    margin:0 auto;
    background:#fff;
    border:0.02rem solid #f1f1f1;
    box-shadow:0 0.02rem 0.08rem 0 rgba(209, 216, 229, 0.50);
    border-radius:0.08rem;
    padding:0.2rem;
    padding-bottom: 0.1rem;
    box-sizing: border-box;
    white-space:nowrap;
}
.jingxuan-scroll {
    width: 100%;
    overflow-x: scroll;
}
.jingxuan-scroll li{
    width: 2.1rem;
    overflow: hidden;
    margin-right: 0.1rem;
    display: inline-block;
}

.jingxuan-scroll li img {
    width: 2.1rem;
    height: 1.44rem;
    border-radius: 0.08rem;
}
.jingxuan-scroll li .name {
    width:100%;
    height:0.4rem;
    line-height:0.4rem;
    font-size:0.25rem;
    color:#333;
    font-weight:bold;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    -webkit-line-clamp:1;
    -webkit-box-orient:vertical;
    margin-bottom:0.04rem;
}
.jingxuan-scroll li .label {
    width: auto;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    -webkit-line-clamp:1;
    -webkit-box-orient:vertical;
    font-size:0.2rem;
    color:#999;
    height:0.3rem;
    line-height:0.3rem;
}
#home-active {
    width: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    padding-top:0.4rem;
    background:-webkit-linear-gradient(#fff, #f3f5f9);
    background:-o-linear-gradient(#fff, #f3f5f9);
    background:-moz-linear-gradient(#fff, #f3f5f9);
    background:linear-gradient(#fff, #f3f5f9);
}
/* 活动版块第一行 */
.box-1 {
    display: flex;
    justify-content: space-between;
}
.active-box {
    padding: 0.2rem 0.16rem;
    padding-bottom: 0;
    box-sizing: border-box;
}
.tehui {
    width: 4.86rem;
    height: 2.78rem;
    background: url('https://lg-6d6g0sjo-1257245756.cos.ap-shanghai.myqcloud.com/hdj_zuoyibj@2x.png') no-repeat center center;
    background-size: 100% 100%;
}
.tehui-list {
    width: 100%;
    display: flex;
    padding: 0 0.1rem;
    box-sizing: border-box;
    justify-content: space-between;
}
.tehui-list li {
    text-align: center;
    /*动画名称*/
    animation-name: fadeIn;
    /*动画持续时间*/
    animation-duration: 2s;
    /*动画次数*/
    animation-iteration-count: 1;
    /*延迟时间*/
    animation-delay: 0s;
}
.tehui-list li img{
    width: 1.08rem;
    height: 1.08rem;
    border-radius: 0.04rem;
}
.tehui-list li p {
    text-align: center;
    height: 0.26rem;
    line-height: 0.26rem;
}
.now-price {
    font-size: 0.28rem;
    color: #f54440;
}
.line-price{
    font-size: 0.2rem;
    color: #999;
    text-decoration-line: line-through;
}
.fuli {
    width: 2.14rem;
    height: 2.78rem;
    background: url('https://lg-6d6g0sjo-1257245756.cos.ap-shanghai.myqcloud.com/hdj_zuoerbj@2x.png') no-repeat center center;
    background-size: 100% 100%; 
}
.fuli-img img{
    width: 1.82rem;
    height: 1.56rem;
    border-radius: 0.08rem;
}
/* 活动版块第二行 */
.box-2 {
    margin-top: 0.1rem;
}
.b2-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.b2-box li {
    width: 3.5rem;
    height: 3rem;
}
.haofang {
    background: url('https://lg-6d6g0sjo-1257245756.cos.ap-shanghai.myqcloud.com/hdj_zuosanbeijing@2x.png') no-repeat center center;
    background-size: 100% 100%;
}
.shangquan {
    background: url('https://lg-6d6g0sjo-1257245756.cos.ap-shanghai.myqcloud.com/hdj_zuosibeijing@2x.png') no-repeat center center;
    background-size: 100% 100%;
}
.b2-bg {
    position: relative;
    margin-top: 0.18rem;
}
.b2-bg img{
    width: 3.19rem;
    height: 1.7rem;
}
.b2-bg p {
    position: absolute;
    left: 0.1rem;
    bottom: 0.2rem;
    z-index: 1;
    color: #fff;
    font-size: 0.24rem;
}


/* 活动板块公用标题样式 */
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
    margin-left: 0.1rem;
}
.title-box .desc{
    color: #767988;
    height: 0.28rem;
    line-height: 0.28rem;
    font-size: 0.24rem;
    margin:0.04rem 0 0.1rem 0;
}

/* 附近商家 */
.near-shop {
    background: #fff;
    padding:0 0.2rem;
    margin-top: 0.2rem;
    width: 100%;
    height: 1.48rem;
    border:0.02rem solid #eee;
    box-shadow:0 0.02rem 0.08rem 0 rgba(209, 216, 229, 0.50);
    border-radius:0.08rem; 
    box-sizing: border-box;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    position: relative;
}
.shop-logo {
    width: 1.08rem;
    height: 1.08rem;
    border-radius:0.08rem;
    border:0.02rem solid #f1f1f1;
}

.content {
    height: 1.08rem;
    position: relative;
    margin-left: 0.2rem;
}
.content .shop-name{
    color: #333;
    font-size: 0.26rem;
    height: 0.4rem;
    line-height: 0.4rem;
    font-weight: bold;  
}
.content .star{
    color: #666;
    font-size: 0.22rem;
    height: 0.32rem;
    display:flex;
    align-items: center;
}
.content .star img {
    width: 1.18rem;
    height: 0.19rem;
}
.content .star span {
    margin-left: 0.1rem;
}
.content .desc {
    height: 0.4rem;
    line-height: 0.4rem;
    color: #999;
    font-size: 0.22rem;
}
.content .desc span {
    color: #f1f1f1;
}
.near-shop .more {
    width: 0.7rem;
    height: 0.24rem;
    position: absolute;
    right: 0.14rem;
    top: 0.26rem;
}
.near-shop .near-logo {
    width: 1.32rem;
    height: 0.34rem;
    position: absolute;
    right: 0;
    bottom: 0.26rem;
}


@keyframes fadeIn {
    0% {
        opacity: 0; /*初始状态 透明度为0*/
    }

    50% {
        opacity: 0.5; /*中间状态 透明度为0*/
    }

    100% {
        opacity: 1; /*结尾状态 透明度为1*/
    }
}


</style>

