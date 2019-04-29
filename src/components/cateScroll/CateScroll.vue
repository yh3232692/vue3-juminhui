<template>
    <div id="cate-scroll" >
        <div class="cate-box" ref="bscroll">
            <ul ref="content">
                <li :class="[index == cateIndex ? 'cate-active' : '']" 
                v-for="(cate, index) in categroy" 
                :key="index" @click="getCateId(cate.id, index)" ref="cate">
                    {{cate.category_name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    data() {
        return {
            cateIndex: 0,
            bscroll: {},
            startX: 0,
            startY: 0,
            scrollWidth:'',
            listX: [],   //记录列表中的每个元素距离父元素的x偏移量
        }
    },
    props:['categroy'],
    methods: {
        getCateId (id, index) {
            if(index == this.cateIndex) return false;
            let currentX = this.listX[index],
                baseWidth = this.scrollWidth/2;
            if (currentX < baseWidth) {
                this.bscroll.scrollTo(0, this.startY)
            } else {
                this.bscroll.scrollTo(-(currentX - baseWidth), this.startY)   
            }
            this.cateIndex = index;
            this.$emit('clickCate',id);
        },
        _initScrollDom () {     //初始化计算宽度
            return new Promise((resolve, reject) => { //设计成promise模式，可以解决滚动条首次触摸没反应的问题
                let content = this.$refs.content;
                let listDom = content.children;
                let width = 0,
                    listX = [],
                    baseX = listDom[0].getBoundingClientRect().left; //获取第一个元素距离屏幕左边的距离
                for (let i = 0; i < listDom.length; i++) {
                    const eleWidth = listDom[i].clientWidth;
                    width += eleWidth
                    const eleX = listDom[i].getBoundingClientRect().left - baseX;  
                    listX.push(eleX)
                }
                content.style.width = width + 'px'
                this.listX = listX;
                resolve();  
            })        
        }
    },
    mounted() {
        this.$nextTick(() => {
            this._initScrollDom () //初始化Better-scroll，为scroll下级父元素动态添加宽度，解决scroll不滚动的问题
            .then(() => {
                let bscroll = this.$refs.bscroll
                this.scrollWidth = this.$refs.bscroll.clientWidth;               
                this.bscroll = new BScroll(bscroll,{
                    click:true,
                    scrollX:true,
                    scrollY:false,
                    startX:this.startX,
                    eventPassthrough:'vertical'
                })
            })
        })
    },
}
</script>

<style scoped>
/* 商品分类 */
.cate-box {
    width: 100%;
    overflow: hidden;
    /* height: 0.7rem; */
    /* overflow-x: scroll;   */
}
.cate-box ul{
    white-space:nowrap;
    /* width: auto; */
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


