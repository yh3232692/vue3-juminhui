<template>
    <div class="cate-box" id="cate-scroll">
        <ul>
            <li :class="[index == cateIndex ? 'cate-active' : '']" 
            v-for="(cate, index) in categroy" 
            :key="index" @click="getCateId(cate.id, index)" ref="cate">
                {{cate.category_name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cateIndex:0
        }
    },
    props:['categroy'],
    methods: {
        getCateId (id, index) {
            if(index == this.cateIndex) return false; 
            this.cateIndex = index;
            this.$emit('clickCate',id);
        }
    },
}
</script>

<style scoped>
/* 商品分类 */
.cate-box {
    width: 100%;
    overflow-x: scroll;  
}
.cate-box ul{
    white-space:nowrap;
}
.cate-box ul li {
    display: inline-block;
    height: 0.7rem;
    line-height: 0.7rem;
    position:relative;
    padding:0 0.16rem;
    font-size:0.3rem;
    color:#333;
    font-weight: bold;
}

.cate-box ul .cate-active {
    font-size: 0.32rem;
    color:#333;
    font-weight: bold;
}
.cate-box ul .cate-active::after {
    display: block;
    background: #f54440;
    content: '';
    width: 60%;
    height: 0.06rem;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0 auto;
    z-index: 10;
    border-radius: 0.06rem;
}
</style>


