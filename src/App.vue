<template>
  <div id="app">
    <loading v-show="isShow"></loading>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <home-tab></home-tab>
  </div>
</template>

<script>
import Home from './components/Home/Home.vue'
import Loading from './components/common/Loading.vue'
import HomeTab from '@/components/tabbar/HomeTab.vue'
import {mapState,mapGetters,mapActions} from 'vuex'

export default {
  name: 'app',
  components: {
    Home,Loading,HomeTab
  },
  computed: {
    // ...mapState({   //第一种写法
    //   isShow: state => state.loadingState.loadingState
    // }),
    ...mapGetters('loadingState',[  //第二种写法
      'isShow'
    ])
  },
}
</script>

<style>
#app {
  font-size:0.30rem;
}
</style>
