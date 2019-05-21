<template>
    <div id="Comment">
        <div class="com-box">
            <div class="com-cont">
                <img src="https://oss.jmhshop.com/Public/upload/real/2018/08-23/5b7e14a8da510.png" alt="">
                <div class="content">
                    <p class="name">啦啦</p>
                    <p class="time">2018-12-01</p>
                    <p class="cont">味道很喜欢 孩子负责监督洗衣服</p>
                </div>
            </div>
            <div class="star">
                <div class="star-img">
                    <img src="https://lg-6d6g0sjo-1257245756.cos.ap-shanghai.myqcloud.com/hmt_new_star.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"comment",
    props:{
        // comment:String
    }
}
</script>

<style scoped>
.com-box{
    border-bottom:0.02rem solid #f1f1f1;
    padding:0.2rem;
    background:#fff;
    width: 100%;
    box-sizing: border-box;
    display:flex;    
}
</style>

