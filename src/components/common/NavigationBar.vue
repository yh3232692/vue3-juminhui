<template>
    <div id="navigation-bar">
        <div class="nav-left">
            <i class="back-icon iconfont icon-jiantou2"></i>
            <slot name="backText"></slot>
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
        // backText:{    //返回箭头边上的文本
        //     type:String,
        //     default:'返回'
        // },
        content:String, //导航的文字显示
        isCustom:{
            type:Boolean,
            default:false
        }

    }
}
</script>

<style scoped>
#navigation-bar {
    width: 100%;
    height: 0.88rem;
    background: #f54440;
    padding: 0 0.3rem;
    box-sizing: border-box;
    display: flex;
}
.nav-left {
    /* width: 0.2rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.88rem;
    color: #fff
}
.iconfont {
    font-size: 0.5rem;
    color: #fff;
    margin-left: -0.25rem;
}
</style>

