<template>
    <div id="goods">
        <scroll-view :height="height">
            
        </scroll-view>
    </div>
</template>

<script>
import ScrollView from '@/components/common/ScrollView.vue'

export default {
    name:'goods',
    props:{
        height:[Number,String]
    },
    components:{
        ScrollView
    }
}
</script>

<style scoped>

</style>


