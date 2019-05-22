<template>
    <div id="Comment">
        <div class="com-box">
            <div class="com-cont">
                <img src="https://oss.jmhshop.com/Public/upload/real/2018/08-23/5b7e14a8da510.png" alt="" class="logo">
                <div class="content">
                    <p class="name">啦啦</p>
                    <p class="time">2018-12-01</p>
                    <p class="cont">道很喜欢 孩子负责监督洗衣服道很喜欢 孩子负责监督洗衣服</p>
                </div>
            </div>
            <div class="star">
                <div class="star-img">
                    <img src="https://lg-6d6g0sjo-1257245756.cos.ap-shanghai.myqcloud.com/hmt_new_star.png" alt="" v-for="item in 5" >
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
    justify-content: space-between;
}
.star {
    width: 2rem;
    display: flex;
    justify-content: flex-end;
}
.star-img {
    margin-top: 0.1rem;
}
.star-img img{
    width: 0.18rem;
    height: 0.18rem;
    margin-right: 0.06rem;
}
.com-cont{
    flex: 1;
    display: flex;
    justify-content: space-between;
}
.logo{
    width: 0.52rem;
    height: 0.52rem;
    border-radius: 50%;
    margin-top: 0.16rem;
}
.content {
    margin-left: 0.16rem;
    color: #333333;
    font-size: 0.24rem;
}
.content .time {
    color: #999999;
}
.content .cont {
    margin-top: 0.1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
</style>

