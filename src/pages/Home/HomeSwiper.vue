<template>
	<div id="home-swiper">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(slide, index) in sliders" :key="index">
				<img :src="slide.image" alt>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
	name: "home-swiper",
	props: ["sliders"],
	data() {
		return {
			swiperOption: {
				//设置swiper组件初始化参数
				autoplay: {
					autoplay: true, //自动播放
					disableOnInteraction: false //控制当前触摸了元素之后也会自动播放
				},
				loop: true, //开启loop（无限循环播放）
				on: {
					tap: function(e) {
						console.log(e);
						alert(this.realIndex); //获取当前点击索引
					}
				}
			}
		};
  	},
	mounted() {},
	components: {
		swiper,
		swiperSlide
	}
};
</script>

<style scoped>
#home-swiper {
  	width: 100%;
}
.swiper-container {
	height: 2.4rem;
	background: #cccccc;
}
.swiper-container img {
	width: 100%;
	height: 2.4rem;
	display: block;
}
</style>


