<template>
    <div id="scroll-view" :style="{height:height+'px'}" ref="bscroll">
        <div class="box">
            <slot></slot>
            <get-more :type="getMoreType" ref="getMore" v-show="isPullUp"></get-more>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import GetMore from '@/components/common/GetMore.vue'

export default {
    name:'scroll-view',
    props:{
        height:{    //scroll-view容器的高度
            type:[Number,String],
            default:300
        },
        options:{
            type:Object,
            default:function () {
                return {}
            }
        },
        isPullUp:{
            type:[String,Boolean],
            default:false
        }
    },
    data() {
        return {
            sOptions:{   //better-scroll初始化参数
                click:true,
                pullUpLoad: {
                    threshold: 50
                }
            },
            getMoreType:1, //上拉加载更多type
            getMoreHeight:0
        }
    },
    methods: {
        _initScroll() { //初始化better-scroll
            let bscroll = this.$refs.bscroll;
            // let options = Object.assign(this.sOptions,this.options)
            let options = {...this.sOptions,...this.options}
            this.bscroll = new BScroll(bscroll,options)
        },

        _pullUpEvent() {    //上滑加载事件
            this.bscroll.on('pullingUp', () => {
                this.$emit('pullUpEvent')
            })
        },

        showLoading(callBack) { //显示加载动画
            this.getMoreType = 2;
            this.$store.dispatch('loadingState/isOpenFun',false) //是否加载全局loading动画，当前加载false
            if (callBack && typeof callBack === 'function') {
                callBack();
            } else {
                setTimeout(() => {
                    this.resetLoading();
                },500)
            }
            this.bscroll.finishPullUp();
        },

        finishload(){   //加载完成显示加载完成
            this.getMoreType = 3;
            this.bscroll.finishPullUp();
        },

        resetLoading() {    //隐藏当前上滑的显示效果
            this.getMoreType = 1;
            this.bscroll.finishPullUp();
        }
    },
    components:{
        GetMore
    },
    mounted() {
        this.$nextTick(() => {
            this._initScroll();
            this._pullUpEvent();
            this.getMoreHeight = this.$refs.getMore.eleHeight
        })
    },
}
</script>

<style scoped>

</style>
