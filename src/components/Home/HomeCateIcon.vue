<template>
    <div id="home-cate-icon">
        <ul class="big-cate">
            <li class="cates" v-for=" (tIcon, index) in topIcon " :key="index">
                <img :src="tIcon.img" alt="" class="icons">
                <p>{{tIcon.name}}</p>
            </li>
        </ul>
        <ul class="small-cate">
            <li class="cates" v-for="(icon, index) in icons" :key="index">
                <img :src="icon.img" alt="" class="icons">
                <p>{{icon.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'home-cate-icon',
    props: ['topIcon','icons']
}
</script>

<style scoped>
.big-cate {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0 0.4rem;
    box-sizing: border-box;
    padding-top: 0.22rem;
    color: #666;
    font-size: 0.26rem;
}
.big-cate .cates {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.big-cate .cates .icons {
    width: 0.92rem;
    height: 0.92rem;
    margin-bottom: 0.12rem;
}
.small-cate {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 0.2rem;
    box-sizing: border-box;
    color: #666;
    font-size: 0.26rem;
    margin-top: 0.32rem;    
}
.small-cate .cates {
    width: calc(100%/5);    
    display: flex;
    flex-direction: column;
    align-items: center;
}
.small-cate .cates .icons {
    width: 0.48rem;
    height: 0.48rem;
    margin: 0.12rem 0;  
}
</style>

