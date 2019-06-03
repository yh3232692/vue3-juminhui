<template>
    <div class="like-good">
        <img src="" alt="" class="good-img">
        <p class="good-name">洛娜思深海鱼子修护精华液30ml/瓶</p>
        <p class="price">
            ￥158.00
            <img src="/src/assets/icons/buyCar.png" alt="">
        </p>
    </div>
</template>

<script>
export default {
    name:"goods-like",
    data() {
        return {
            
        }
    },
    
}
</script>

<style scoped>
.like-good{
    width: 2.3rem;
    box-sizing: border-box;
    padding: 0.1rem;
    margin-top: 0.16rem;
}
.good-img {
    width: 100%;
    height: 2.04rem;
    display: block;
    background: #cccccc;
}
.good-name {
    width: 100%;
    line-height: 0.38rem;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    font-size: 0.28rem;
    font-weight: bold;
    margin-top: 0.3rem;
}
.price {
    color: #f54440;
    font-size: 0.28rem;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.price img {
    width: 0.4rem;
    height: 0.4rem;
    display: block;
    background: #cccccc;
}
</style>

