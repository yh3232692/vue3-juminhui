<template>
    <div id="goods">
        <scroll-view :height="height">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, index) in imageArr" :key="index">
                    <img :src="item" alt="" class="swiper-image">
                </swiper-slide>
            </swiper>
        </scroll-view>
    </div>
</template>

<script>
import ScrollView from '@/components/common/ScrollView.vue'
import { swiper, swiperSlide } from "vue-awesome-swiper";
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
        ScrollView, swiper, swiperSlide
    }
}
</script>

<style scoped>
.swiper-image {
    width: 7.5rem;
    height: 7.5rem;
    display: block;
}
</style>


