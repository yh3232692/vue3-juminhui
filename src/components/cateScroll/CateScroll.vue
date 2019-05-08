<template>
    <div id="cate-scroll" >
        <div class="cate-box" ref="bscroll">
            <ul ref="content" 
                :style="{color:fontColor?fontColor:'#333'}">
                <li :class="[index == cateIndex ? 'cate-active' : '']" 
                    v-for="(cate, index) in categroy" 
                    :key="index" 
                    @click="getCateId(cate.id, index)" 
                    ref="cate">
                    {{cate[cateName]}}
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
            bscroll: {},
            startX: 0,
            startY: 0,
            scrollWidth:'',
            offsetTop:0,
        }
    },
    props:{
        categroy:Array,
        cateIndex: {
            type: Number,
            default: 0
        },
        linked:{    //当前页面是否加载当前两个或两个上，并且需要联动 true(需要联动) false(不需要联动)
            type: Boolean,
            default: false
        },
        cateName:{  //当前分类显示字段key，因为后台返回的数据格式不一样
            type:String,
            default:'category_name'
        },
        fontColor:String
    },
    methods: {
        getCateId (id, index) {
            if(index == this.cateIndex) return false;
            
            if (!this.linked) {
                this.cateIndex = index;                
                this.clickScrollTo(index)
            }
            
            this.$emit('clickCate', id, index);
        },
        _initScrollDom () {     //初始化计算宽度
            return new Promise((resolve, reject) => { //设计成promise模式，可以解决滚动条首次触摸没反应的问题
                let content = this.$refs.content;
                let listDom = content.children;
                if (listDom.length <= 0) return false;
                let width = 0,
                    baseX = listDom[0].getBoundingClientRect().left; //获取第一个元素距离屏幕左边的距离
                for (let i = 0; i < listDom.length; i++) {
                    const eleWidth = listDom[i].clientWidth;
                    width += eleWidth
                }
                content.style.width = width + 'px'
                resolve();  
            })        
        },
        clickScrollTo(index) { //设置滚动到指定元素的计算方法，公开方法
            let baseWidth = this.scrollWidth/2 - this.$refs.cate[index].clientWidth/2;
            let cateEl = this.$refs.cate[index];
            this.bscroll.scrollToElement(cateEl, 300, -baseWidth)
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
            this.offsetTop = this.$refs.bscroll.getBoundingClientRect().top;
            // let active = document.querySelector('.cate-active')
            // active.setAttribute('data-bgcolor','#ffffff')                
        })
    },
}
</script>

<style scoped>
/* 商品分类 */
.cate-box {
    width: 100%;
    overflow: hidden;
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
    font-size:0.26rem;
    font-weight: bold;
}

.cate-box ul .cate-active {
    font-size: 0.32rem;
    font-weight: bold;
}
.cate-box ul .cate-active::after {
    display: block;
    background-color: #f54440;
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


