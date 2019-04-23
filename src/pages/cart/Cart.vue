<template>
    <div id="cart">
        购物车
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>sssssssssssssssss</h1>
        <h1>sssssssssssssss</h1>
        <h1>sssssssssssssssssss</h1>

    </div>
</template>

<script>
import ScrollPosition from '@/lib/scroll-position'


export default {
    name:'cart',
    activated() {
        ScrollPosition.get.call(this);
    },
}
</script>

<style scoped>
#cart {
    overflow: hidden;
}
</style>
