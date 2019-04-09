<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-size:0.30rem;
}
</style>
