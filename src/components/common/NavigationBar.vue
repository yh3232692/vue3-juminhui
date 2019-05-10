<template>
    <div id="navigation-bar" 
        :style="{color:fontColor?fontColor:'#fff',background:bgColor?bgColor:'#f54440'}">
        <!-- 左侧返回按钮 -->
        <div class="nav-left" v-if="isBack" @click="goBack">
            <i class="back-icon iconfont icon-jiantou2"></i>
            <slot name="backText"></slot>
        </div>
        <!-- 左侧自定义内容 直接留出插槽位置 -->
        <div class="nav-left" v-if="isCustom">
            <slot name="custom-left"></slot>
        </div>
        <!-- 中间内容部分 -->
        <div class="nav-content text-ellipsis">
            <!-- 每日特惠每日特惠每日特惠每日特惠 -->
            <slot name="content"></slot>
        </div>
        <!-- 右侧部分 -->
        <div class="nav-right">
            <slot name="nav-right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"navigation-bar",
    props:{
        isBack:{    //是否显示返回箭头
            type:Boolean,
            default:false  
        },
        isCustom:{
            type:Boolean,
            default:false
        },
        fontColor:String,
        bgColor:String

    },
    methods: {
        goBack() {
            
        }
    },
}
</script>

<style scoped>
#navigation-bar {
    width: 100%;
    height: 0.88rem;
    padding: 0 0.3rem;
    box-sizing: border-box;
    position: relative;
    color: #fff;    
}
.nav-left {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.88rem;
    float: left;
}
.iconfont {
    font-size: 0.5rem;
    margin-left: -0.25rem;
}

.nav-right {
    /* width: 0.6rem; */
    height: 100%;
    float: right;
}
.nav-content {
    width: 3.7rem;
    height: 0.88rem;
    line-height: 0.88rem;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -1.85rem;
}

</style>

