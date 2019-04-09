<template>
    <div id="home-cate-icon">
        <ul class="big-cate">
            <li class="cates">
                <img src="../../assets/icons/home-icon.png" alt="" class="icons">
                <p>惠民商圈</p>
            </li>
            <li class="cates">
                <img src="../../assets/icons/home-icon.png" alt="" class="icons">
                <p>惠民商圈</p>
            </li>
            <li class="cates">
                <img src="../../assets/icons/home-icon.png" alt="" class="icons">
                <p>惠民商圈</p>
            </li>
            <li class="cates">
                <img src="../../assets/icons/home-icon.png" alt="" class="icons">
                <p>惠民商圈</p>
            </li>
        </ul>
        <ul class="small-cate">
            <li class="cates">
                <img src="../../assets/icons/home-icon2.png" alt="" class="icons">
                <p>美食广场</p>
            </li>
            <li class="cates">
                <img src="../../assets/icons/home-icon2.png" alt="" class="icons">
                <p>美食广场</p>
            </li>
            <li class="cates">
                <img src="../../assets/icons/home-icon2.png" alt="" class="icons">
                <p>美食广场</p>
            </li>
            <li class="cates">
                <img src="../../assets/icons/home-icon2.png" alt="" class="icons">
                <p>美食广场</p>
            </li>
            <li class="cates">
                <img src="../../assets/icons/home-icon2.png" alt="" class="icons">
                <p>美食广场</p>
            </li>
            <li class="cates">
                <img src="../../assets/icons/home-icon2.png" alt="" class="icons">
                <p>美食广场</p>
            </li>
            <li class="cates">
                <img src="../../assets/icons/home-icon2.png" alt="" class="icons">
                <p>美食广场</p>
            </li>
            <li class="cates">
                <img src="../../assets/icons/home-icon2.png" alt="" class="icons">
                <p>美食广场</p>
            </li>
            <li class="cates">
                <img src="../../assets/icons/home-icon2.png" alt="" class="icons">
                <p>美食广场</p>
            </li>
            <li class="cates">
                <img src="../../assets/icons/home-icon2.png" alt="" class="icons">
                <p>美食广场</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'home-cate-icon'
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

