<template>
    <div id="special-day">
        <navigation-bar 
            :isBack="navOptions.isBack" 
            :fontColor="navOptions.fontColor"
            :bgColor="navOptions.bgColor">
            <span slot="content" class="text-ellipsis">每日特惠</span>
        </navigation-bar>
        <div class="cate-scroll" v-if="falg">
            <cate-scroll 
                :categroy="categroy"
                :cateName="cateScrollOptions.cateName"
                fontColor="#fff">
            </cate-scroll>
        </div>
    </div>
</template>

<script>

import NavigationBar from '@/components/common/NavigationBar.vue'
import CateScroll from '@/components/cateScroll/CateScroll.vue'

export default {
    name:'spacial-day',
    data() {
        return {
            falg:false,
            navOptions:{    //导航组件需要的参数
                isBack:true,
                bgColor:'linear-gradient(to right,#ff0271,#f42125)'
            },
            categroy:[],            
            cateScrollOptions:{
                cateName:'cat_name',
                fontColor:'#fff',
                bgColor:'rgb(242, 240, 70)'
            }
            
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
            this.falg = true;            
        })
    },
    components:{
        NavigationBar,CateScroll
    }
}
</script>

<style scoped>
.cate-scroll {
    width: 100%;
    padding: 0 0.2rem 0.1rem 0.2rem;
    box-sizing: border-box;
    background: linear-gradient(to right,#ff0271,#f42125);
}
/* .cate-box ul .cate-active >>> ::after{
    background:rgb(242, 240, 70)
} */
</style>

