<template>
    <div id="scroll-view" :style="{height:height+'px'}" ref="bscroll">
        <div class="box">
            <slot></slot>
            <get-more :type="getMoreType"></get-more>
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
            getMoreType:2 //上拉加载更多type
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
                // if (!this.cateClickState) return false;
                // if (this.isGetMore) {
                //     this.getMoreType = 2
                //     store.dispatch('loadingState/isOpenFun',false) //是否加载全局loading动画，当前加载false
                //     this.getListData();
                // } else {
                //     this.getMoreType = 3
                // }
            })
        },
        
    },
    components:{
        GetMore
    },
    mounted() {
        this.$nextTick(() => {
            this._initScroll();
            this._pullUpEvent();
        })
    },
}
</script>

<style scoped>

</style>
