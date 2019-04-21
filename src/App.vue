<template>
  <div id="app">
    <loading v-show="isShow"></loading>
    <home-tab></home-tab>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
import Home from "./components/Home/Home.vue";
import Loading from "./components/common/Loading.vue";
import HomeTab from "@/components/tabbar/HomeTab.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  components: {
    Home,
    Loading,
    HomeTab
  },
  computed: {
    // ...mapState({   //第一种写法
    //   isShow: state => state.loadingState.loadingState
    // }),
    ...mapGetters("loadingState", [
      //第二种写法
      "isShow"
    ])
  }
};
</script>

<style>
#app {
  font-size: 0.3rem;
}
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
