<template>
    <div id="home-goods">
        <div class="cate-fixed" v-show="cateBarState">
            <div class="good-cate" ref="cateBox">
                <ul>
                    <li :class="[index == cateIndex ? 'cate-active' : '']" 
                    v-for="(cate, index) in categroy" 
                    :key="index" @click="getGoods(cate.id, index)">
                        {{cate.category_name}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="model-logo">
            <img src="https://lg-6d6g0sjo-1257245756.cos.ap-shanghai.myqcloud.com/hdj_biaotitemai@2x.png" alt="">
        </div>
        <div class="good-cate" ref="cateBox" id="catesTop">
            <ul>
                <li :class="[index == cateIndex ? 'cate-active' : '']" 
                v-for="(cate, index) in categroy" 
                :key="index" @click="getGoods(cate.id, index)" ref="cate">
                    {{cate.category_name}}
                </li>
            </ul>
        </div>
        <div class="goods-box">
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
    </div>
</template>

<script>
export default {
    name:'home-goods',
    props:['categroy', 'goodsList', 'cateBarState'],
    data() {
        return {
            cateIndex:0,    //初始化默认分类
            cateXList:[],   //默认商品分类每个li距离左侧距离集合
            catesTop:0      //默认商品分类距离顶部距离
        }
    },
    methods: {
        getGoods(id,index) { //获取当前点击的是哪个分类
            if (index == this.cateIndex) return false;
            this.cateIndex = index
            const cateBox = this.$refs.cateBox;
            let left = this.cateXList[index];
            if (left < 375 / 2) {
                left = 0;
            }
            if (left > 375 / 2) {
                left -= 375 / 2;
            }
            cateBox.scrollLeft = left
            this.$emit('getCatId',id) //将子组件获取的分类id传给父组件
        },
        getEleX() { //获取商品分类每个li距离左边的位置
            const cateXList = new Array();
            const cateList = this.$refs.cate;
            // console.log(cateList);
            const cateXOne = cateList[0].getBoundingClientRect().left;
            cateList.forEach(element => {
                cateXList.push(element.getBoundingClientRect().left - cateXOne);
            });
            this.cateXList = cateXList
        }
    },
    mounted() {
        this.$nextTick(function () { //强制性组件渲染完毕之后再去执行
            this.getEleX()  //初始化获取商品分类每个li距离左边的位置
            this.catesTop = document.getElementById('catesTop').getBoundingClientRect().top //获取初始化商品分类距离顶部位置
        })
        
    },
}
</script>
<style scoped>

#home-goods {
    width: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    background: #f3f5f9;
}
.cate-fixed {
    position: fixed;
    left: 0;
    top: 0.8rem;
    background: #ffffff;
    z-index: 11;
    padding: 0 0.2rem;
    box-sizing: border-box;
    border-bottom: 0.02rem solid #f1f1f1;
    width: 100%;
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
    font-weight: bold;
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

