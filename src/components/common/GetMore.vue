<template>
    <div id="get-more">
        <div class="box" v-show="type == 1">
            <!-- <i class="iconfont icon-changjiantou-shang"></i>            
            <p>上拉加载更多</p> -->
        </div>
        <div class="box" v-show="type == 2">
            <mt-spinner type="fading-circle" color="#999" :size="25"></mt-spinner>
            <p>正在加载中</p>         
        </div>
        <div class="box" v-show="type == 3">
            <p>没有更多了</p>         
        </div>
    </div>
</template>

<script>
import { Spinner } from 'mint-ui';
import Vue from 'vue'
Vue.component(Spinner.name,Spinner)

export default {
    name:'get-more',
    props:['type'], //type控制当前显示哪种类型结构 1、显示加载更多 2、显示正在加载中 3、没有更多了
    data() {
        return {
            eleHeight:0
        }
    },
    mounted() {
        this.eleHeight = document.getElementById('get-more').clientHeight;
    },
    components:{
        Spinner
    }
}
</script>

<style scoped>
.iconfont {
    font-size: 0.4rem;
    color: #999;
}
#get-more{
    width: 100%;
    height: 1rem;
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box {
    display: flex;
    align-items: center;
}
.box p{
    margin-left: 0.2rem;
    font-size: 0.26rem;
}
</style>

