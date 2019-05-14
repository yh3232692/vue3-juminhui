<template>
    <div id="special-day">
        <navigation-bar 
            :isBack="navOptions.isBack" 
            :fontColor="navOptions.fontColor"
            :bgColor="navOptions.bgColor" ref="navBar">
            <span slot="content" class="text-ellipsis">每日特惠</span>
        </navigation-bar>
        <div class="cate-scroll" v-if="flag" ref="cates">
            <cate-scroll 
                :categroy="categroy"
                :cateName="cateScrollOptions.cateName"
                fontColor="#fff"
                activeLineColor="rgb(242,240,70)"
                @clickCate="changeCate"
                :cateIndex="cateIndex">
            </cate-scroll>
        </div>
        <div class="container" ref="bscroll" :style="{height:listHeight + 'px'}">
            <ul :style="{'min-height':listHeight + 'px'}">
                <li class="goods">
                    <img src="https://oss.jmhshop.com/Public/upload/goods/2018/10-19/5bc93b979fc89.png" alt="">
                    <div class="cont">
                        <p class="name">【3瓶装】 澳芝曼绵羊脂滋润维E霜‍ 250*3</p>
                        <div class="price-group">
                            <p class="price">
                                <span class="p-hui">会员价：￥<span class="p-num">82.00</span></span>
                                <span class="btn-qiang">马上抢</span>
                            </p>
                            <p class="price-bot">
                                <span class="line-price">原价：￥180.00</span>
                                <span>销量：7324</span>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import NavigationBar from '@/components/common/NavigationBar.vue'
import CateScroll from '@/components/cateScroll/CateScroll.vue'
import BScroll from 'better-scroll'

export default {
    name:'spacial-day',
    data() {
        return {
            flag:false,
            navOptions:{    //导航组件需要的参数
                isBack:true,
                bgColor:'#f42125'
            },
            categroy:[],            
            cateScrollOptions:{ //scroll组件需要的参数
                cateName:'cat_name',
                fontColor:'#fff'
            },
            cateIndex:0,
            listHeight:0
        }
    },
    methods: {
        changeCate:function (id,index) {
            console.log(id,index)
            this.cateIndex = index;
        }
    },
    mounted() {
        this.$post('/api/Special/daily_special_category',{})
        .then((response) => {
            if (response.status == 1) {
                return response.data;
            }
        })
        .then((data) => {
            this.categroy = data;
            this.flag = true;  
               
        })
        .then(() => {
            let param = {
                cat_id:this.categroy[this.cateIndex],
                p:this.p
            }
            this.$post('/api/Special/daily_special_list',param)    
        })
        .then(() => {
            this.$nextTick(() => {
                let bscroll = this.$refs.bscroll     
                this.bscroll = new BScroll(bscroll,{
                    click:true
                })

                const docHeight = document.documentElement.clientHeight,
                navHeight = this.$refs.navBar.innerHeight,
                cateHieght = this.$refs.cates.getBoundingClientRect().height;

                this.listHeight = docHeight - navHeight - cateHieght;
            })
        })
        
    },
    components:{
        NavigationBar, CateScroll
    }
}
</script>

<style scoped>
#special-day {
    width: 100%;
    height: 100%;
    background: #f3f5f9;
}
.cate-scroll {
    width: 100%;
    padding: 0 0.2rem 0.1rem 0.2rem;
    box-sizing: border-box;
    background: #f42125;
}
.container {
    background: #f3f5f9;
    width: 100%;
    overflow: hidden;
    background: linear-gradient(#f42125 0%, #ff0271 25%,#f3f5f9 60%) #f3f5f9 no-repeat;
    padding: 0 0.2rem;
    box-sizing: border-box;
}
.container ul {
    background: #ffffff;
    border-radius: 0.08rem;
    overflow: hidden;
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
}
.container ul li{
    display: flex;
    margin-bottom: 0.2rem;
}
.goods {
    width: 100%;
}
.goods img{
    width: 2.52rem;
    height: 2.52rem;
    border-radius: 0.08rem;
    margin-right: 0.2rem;
}
.cont {
    padding: 0.2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.cont .name {
    font-size:0.3rem;
    color:#333;
    line-height:0.4rem;
    font-weight:bold;
    overflow:hidden;
}
.price {
    height: 0.5rem;
}
.price-bot {
    height: 0.32rem;
    color: #999;
}
.price-group>p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.24rem;        
}
.price .p-hui{
    color: #f54440;
    font-weight: bold;
}
.price .p-hui .p-num{
    font-size: 0.32rem;
}
.btn-qiang {
    width: 1.16rem;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #f54440;
    text-align: center;
    color: #ffffff;
    border-radius: 0.06rem;
}
.line-price {
    text-decoration: line-through;
}
</style>

