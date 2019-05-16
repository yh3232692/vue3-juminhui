<template>
  <div id="app">
    <loading v-show="isShow && isOpen"></loading>
    <home-tab v-show="tabBarState"></home-tab>
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
import Home from "./pages/Home/Home.vue";
import Loading from "@/components/common/Loading.vue";
import HomeTab from "@/components/tabbar/HomeTab.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  data() {
    return {
      tabBarState:true
    }
  },
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
      "isShow",
      "isOpen"
    ])
  },
  watch: {
    $route(to, from) {
      console.log(to);
      const routerNameArr = ['Home', 'Cart', 'Person']
      if (!routerNameArr.includes(to.name)) {
        this.tabBarState = false;
      } else {
        this.tabBarState = true;
      }
    }
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
